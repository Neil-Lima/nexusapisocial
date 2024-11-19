'use client';
import React, { useState } from 'react';
import { Modal, Tab, ListGroup, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faDollarSign, faBriefcase, faClock, faCheckCircle, faChartLine, faUsers, faStar, faHandshake, faGraduationCap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledModal, JobInfo, StyledTabs, StyledListGroup, StyledButton, StyledDatePicker, CompanyInsights, StatisticCard } from './styles/JobsStyle';
import { Line } from 'react-chartjs-2';

function JobsModalComp({ showModal, setShowModal, selectedJob, skillMatchPercentage, setAppliedJobs, userProfile, careerInsights }) {
  const [interviewDate, setInterviewDate] = useState(new Date());
  const [applicationStep, setApplicationStep] = useState('details');
  const [applicationForm, setApplicationForm] = useState({
    coverLetter: '',
    availability: '',
    expectedSalary: '',
    portfolioLink: '',
    references: []
  });

  const handleApplicationSubmit = () => {
    // Lógica para submeter a candidatura
    setAppliedJobs(prev => [...prev, selectedJob.id]);
    setShowModal(false);
  };

  return (
    <StyledModal show={showModal} onHide={() => setShowModal(false)} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectedJob?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledTabs activeKey={applicationStep} onSelect={k => setApplicationStep(k)}>
          {/* Detalhes da Vaga */}
          <Tab eventKey="details" title="Detalhes da Vaga">
            <Row>
              <Col md={8}>
                <JobInfo>
                  <FontAwesomeIcon icon={faBuilding} />
                  {selectedJob?.company}
                </JobInfo>
                <JobInfo>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {`${selectedJob?.location.city}, ${selectedJob?.location.state}, ${selectedJob?.location.country}`}
                </JobInfo>
                <JobInfo>
                  <FontAwesomeIcon icon={faDollarSign} />
                  {selectedJob?.salary}
                </JobInfo>
                <JobInfo>
                  <FontAwesomeIcon icon={faBriefcase} />
                  {selectedJob?.type}
                </JobInfo>
                <JobInfo>
                  <FontAwesomeIcon icon={faClock} />
                  {selectedJob?.experience}
                </JobInfo>

                <h5 className="mt-4">Descrição da Vaga</h5>
                <p>{selectedJob?.description}</p>

                <h5>Responsabilidades</h5>
                <StyledListGroup>
                  {selectedJob?.responsibilities.map((resp, index) => (
                    <ListGroup.Item key={index}>
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      {resp}
                    </ListGroup.Item>
                  ))}
                </StyledListGroup>

                <h5 className="mt-4">Requisitos</h5>
                <StyledListGroup>
                  {selectedJob?.requirements.map((req, index) => (
                    <ListGroup.Item key={index}>
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      {req}
                    </ListGroup.Item>
                  ))}
                </StyledListGroup>

                <h5 className="mt-4">Benefícios</h5>
                <StyledListGroup>
                  {selectedJob?.benefits.map((benefit, index) => (
                    <ListGroup.Item key={index}>
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      {benefit}
                    </ListGroup.Item>
                  ))}
                </StyledListGroup>
              </Col>
              
              <Col md={4}>
                <StatisticCard>
                  <h5>Match de Competências</h5>
                  <div className="text-center">
                    <h2>{skillMatchPercentage}%</h2>
                    <p>Compatibilidade com seu perfil</p>
                  </div>
                </StatisticCard>

                <CompanyInsights>
                  <h5>Insights da Empresa</h5>
                  <div className="insight-item">
                    <FontAwesomeIcon icon={faChartLine} />
                    <h6>Crescimento</h6>
                    <p>{selectedJob?.companyInsights.growth}% ao ano</p>
                  </div>
                  <div className="insight-item">
                    <FontAwesomeIcon icon={faUsers} />
                    <h6>Funcionários</h6>
                    <p>{selectedJob?.companyInsights.employees}</p>
                  </div>
                  <div className="insight-item">
                    <FontAwesomeIcon icon={faStar} />
                    <h6>Avaliação</h6>
                    <p>{selectedJob?.companyInsights.rating}/5</p>
                  </div>
                </CompanyInsights>

                <StatisticCard>
                  <h5>Estatísticas da Vaga</h5>
                  <p>{selectedJob?.statistics.views} visualizações</p>
                  <p>{selectedJob?.statistics.applications} candidaturas</p>
                  <p>Publicada há {selectedJob?.statistics.daysAgo} dias</p>
                </StatisticCard>
              </Col>
            </Row>
          </Tab>

          {/* Sobre a Empresa */}
          <Tab eventKey="company" title="Sobre a Empresa">
            <Row>
              <Col md={8}>
                <h5>Cultura da Empresa</h5>
                <p>{selectedJob?.companyInfo.culture}</p>

                <h5 className="mt-4">Valores</h5>
                <StyledListGroup>
                  {selectedJob?.companyInfo.values.map((value, index) => (
                    <ListGroup.Item key={index}>
                      <FontAwesomeIcon icon={faHandshake} className="me-2" />
                      {value}
                    </ListGroup.Item>
                  ))}
                </StyledListGroup>

                <h5 className="mt-4">Projetos Recentes</h5>
                {selectedJob?.companyInfo.projects.map((project, index) => (
                  <div key={index} className="mb-3">
                    <h6>{project.name}</h6>
                    <p>{project.description}</p>
                  </div>
                ))}

                <h5 className="mt-4">Depoimentos</h5>
                {selectedJob?.companyInfo.testimonials.map((testimonial, index) => (
                  <div key={index} className="mb-3">
                    <p>"{testimonial.text}"</p>
                    <small>- {testimonial.author}, {testimonial.role}</small>
                  </div>
                ))}
              </Col>

              <Col md={4}>
                <StatisticCard>
                  <h5>Ambiente de Trabalho</h5>
                  {selectedJob?.companyInfo.workplaceStats.map((stat, index) => (
                    <div key={index} className="mb-2">
                      <p>{stat.label}</p>
                      <ProgressBar now={stat.value} label={`${stat.value}%`} />
                    </div>
                  ))}
                </StatisticCard>

                <StatisticCard>
                  <h5>Oportunidades de Crescimento</h5>
                  <Line data={selectedJob?.companyInfo.careerGrowth} />
                </StatisticCard>
              </Col>
            </Row>
          </Tab>

          {/* Preparação */}
          <Tab eventKey="preparation" title="Preparação">
            <Row>
              <Col md={8}>
                <h5>
                  <FontAwesomeIcon icon={faGraduationCap} /> Habilidades Requeridas
                </h5>
                {selectedJob?.skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <h6>{skill.name}</h6>
                    <ProgressBar>
                      <ProgressBar variant="success" now={skill.userLevel} label="Seu nível" />
                      <ProgressBar variant="info" now={skill.requiredLevel} label="Nível requerido" />
                    </ProgressBar>
                  </div>
                ))}

                <h5 className="mt-4">Dicas para Entrevista</h5>
                <StyledListGroup>
                  {selectedJob?.interviewTips.map((tip, index) => (
                    <ListGroup.Item key={index}>
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      {tip}
                    </ListGroup.Item>
                  ))}
                </StyledListGroup>

                <h5 className="mt-4">Recursos Recomendados</h5>
                {selectedJob?.recommendedResources.map((resource, index) => (
                  <div key={index} className="mb-3">
                    <h6>{resource.title}</h6>
                    <p>{resource.description}</p>
                    <StyledButton size="sm">Acessar</StyledButton>
                  </div>
                ))}
              </Col>

              <Col md={4}>
                <StatisticCard>
                  <h5>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Agendar Mock Interview
                  </h5>
                  <StyledDatePicker
                    selected={interviewDate}
                    onChange={date => setInterviewDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                  <StyledButton className="mt-3">Confirmar Agendamento</StyledButton>
                </StatisticCard>

                <StatisticCard>
                  <h5>Mentores Disponíveis</h5>
                  {selectedJob?.availableMentors.map((mentor, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="rounded-circle me-2"
                          style={{ width: '40px', height: '40px' }}
                        />
                        <div>
                          <h6>{mentor.name}</h6>
                          <small>{mentor.role}</small>
                        </div>
                      </div>
                      <StyledButton size="sm" className="mt-2">
                        Solicitar Mentoria
                      </StyledButton>
                    </div>
                  ))}
                </StatisticCard>
              </Col>
            </Row>
          </Tab>

          {/* Candidatura */}
          <Tab eventKey="application" title="Candidatura">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Carta de Apresentação</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={applicationForm.coverLetter}
                  onChange={e => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Disponibilidade</Form.Label>
                <Form.Control
                  type="text"
                  value={applicationForm.availability}
                  onChange={e => setApplicationForm({...applicationForm, availability: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pretensão Salarial</Form.Label>
                <Form.Control
                  type="text"
                  value={applicationForm.expectedSalary}
                  onChange={e => setApplicationForm({...applicationForm, expectedSalary: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Link do Portfólio</Form.Label>
                <Form.Control
                  type="text"
                  value={applicationForm.portfolioLink}
                  onChange={e => setApplicationForm({...applicationForm, portfolioLink: e.target.value})}
                />
              </Form.Group>

              <StyledButton onClick={handleApplicationSubmit}>
                Enviar Candidatura
              </StyledButton>
            </Form>
          </Tab>
        </StyledTabs>
      </Modal.Body>
    </StyledModal>
  );
}

export default JobsModalComp;
