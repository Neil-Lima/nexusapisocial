'use client';
import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faCertificate, faRocket, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
import { LearningSection, CourseCard, StyledButton } from './styles/JobsStyle';

function JobsLearningComp({ learningPaths, userProfile, careerInsights }) {
  return (
    <LearningSection>
      <h4>Desenvolvimento Profissional</h4>

      {/* Trilhas de Aprendizado */}
      <section className="mb-4">
        <h5>
          <FontAwesomeIcon icon={faRocket} /> Trilhas Recomendadas
        </h5>
        <Row>
          {learningPaths.map((path, index) => (
            <Col md={4} key={index}>
              <CourseCard>
                <Card.Body>
                  <Card.Title>{path.title}</Card.Title>
                  <Card.Text>{path.description}</Card.Text>
                  <ProgressBar now={path.progress} label={`${path.progress}%`} />
                  <div className="mt-2">
                    <small>{path.duration} horas • {path.modules} módulos</small>
                  </div>
                  <StyledButton className="mt-3">
                    {path.progress > 0 ? 'Continuar' : 'Começar'}
                  </StyledButton>
                </Card.Body>
              </CourseCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Certificações */}
      <section className="mb-4">
        <h5>
          <FontAwesomeIcon icon={faCertificate} /> Certificações Recomendadas
        </h5>
        <Row>
          {careerInsights.certifications.map((cert, index) => (
            <Col md={6} key={index}>
              <CourseCard>
                <Card.Body>
                  <Card.Title>{cert.name}</Card.Title>
                  <Card.Text>{cert.description}</Card.Text>
                  <div>
                    <small>Impacto salarial: +{cert.salaryIncrease}%</small>
                  </div>
                  <StyledButton className="mt-3">
                    Preparar-se
                  </StyledButton>
                </Card.Body>
              </CourseCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Mentoria */}
      <section className="mb-4">
        <h5>
          <FontAwesomeIcon icon={faUsers} /> Mentoria
        </h5>
        <Row>
          {careerInsights.mentors.map((mentor, index) => (
            <Col md={4} key={index}>
              <CourseCard>
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src={mentor.avatar} 
                      alt={mentor.name}
                      className="rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                  <Card.Title>{mentor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{mentor.role}</Card.Subtitle>
                  <Card.Text>{mentor.specialties.join(' • ')}</Card.Text>
                  <StyledButton>
                    Agendar Mentoria
                  </StyledButton>
                </Card.Body>
              </CourseCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Recursos de Aprendizado */}
      <section className="mb-4">
        <h5>
          <FontAwesomeIcon icon={faBook} /> Recursos
        </h5>
        <Row>
          {['E-books', 'Podcasts', 'Webinars', 'Cases'].map((resource, index) => (
            <Col md={3} key={index}>
              <CourseCard>
                <Card.Body>
                  <Card.Title>{resource}</Card.Title>
                  <StyledButton>
                    Explorar
                  </StyledButton>
                </Card.Body>
              </CourseCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Insights de Aprendizado */}
      <section>
        <h5>
          <FontAwesomeIcon icon={faLightbulb} /> Insights
        </h5>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h6>Horas de Estudo</h6>
                <p>{userProfile.learningStats.studyHours}h este mês</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h6>Certificados</h6>
                <p>{userProfile.learningStats.certificates} conquistados</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h6>Mentorias</h6>
                <p>{userProfile.learningStats.mentoringSessions} realizadas</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </LearningSection>
  );
}

export default JobsLearningComp;
