'use client';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShare, faChartLine, faGraduationCap, faCalendarAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FeedCard, FeedSection, StyledButton, StyledBadge } from './styles/JobsStyle';

const conexoesIniciais = [
  {
    name: 'Ana Silva',
    avatar: 'https://via.placeholder.com/50',
    update: 'Começou um novo trabalho na TechCorp'
  },
  {
    name: 'João Santos',
    avatar: 'https://via.placeholder.com/50',
    update: 'Compartilhou uma nova vaga'
  },
  {
    name: 'Maria Costa',
    avatar: 'https://via.placeholder.com/50',
    update: 'Conquistou uma nova certificação'
  }
];

const eventosIniciais = [
  {
    title: 'Tech Conference 2024',
    date: '15 de Janeiro',
    format: 'Online',
    description: 'Conferência sobre as últimas tendências em tecnologia'
  },
  {
    title: 'Workshop de React',
    date: '20 de Janeiro',
    format: 'Presencial',
    description: 'Aprenda React na prática com especialistas'
  }
];

function JobsFeedComp({ userProfile, connections = conexoesIniciais, events = eventosIniciais, recommendedJobs }) {
  return (
    <FeedSection>
      <FeedCard>
        <h4>Vagas Recomendadas para Você</h4>
        {recommendedJobs.slice(0, 3).map(job => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
              <div className="d-flex justify-content-between align-items-center">
                <StyledBadge>85% Match</StyledBadge>
                <div>
                  <StyledButton variant="link">
                    <FontAwesomeIcon icon={faBookmark} />
                  </StyledButton>
                  <StyledButton variant="link">
                    <FontAwesomeIcon icon={faShare} />
                  </StyledButton>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </FeedCard>

      <FeedCard>
        <h4>
          <FontAwesomeIcon icon={faChartLine} /> Tendências em {userProfile?.industry || 'Tecnologia'}
        </h4>
        <Row>
          <Col md={4}>
            <div className="trend-stat">
              <h5>Salário Médio</h5>
              <p>R$ 7.500</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="trend-stat">
              <h5>Vagas Abertas</h5>
              <p>1.234</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="trend-stat">
              <h5>Crescimento</h5>
              <p>+15%</p>
            </div>
          </Col>
        </Row>
      </FeedCard>

      <FeedCard>
        <h4>
          <FontAwesomeIcon icon={faGraduationCap} /> Desenvolva suas Habilidades
        </h4>
        <Row>
          {['Gestão de Projetos', 'Liderança', 'Comunicação Efetiva'].map((skill, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{skill}</Card.Title>
                  <StyledButton>Começar</StyledButton>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </FeedCard>

      <FeedCard>
        <h4>
          <FontAwesomeIcon icon={faCalendarAlt} /> Eventos Relevantes
        </h4>
        {events.map((event, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {event.date} • {event.format}
              </Card.Subtitle>
              <Card.Text>{event.description}</Card.Text>
              <StyledButton>Inscrever-se</StyledButton>
            </Card.Body>
          </Card>
        ))}
      </FeedCard>

      <FeedCard>
        <h4>
          <FontAwesomeIcon icon={faNewspaper} /> Atualizações da sua Rede
        </h4>
        {connections.slice(0, 3).map((connection, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center">
                <img
                  src={connection.avatar}
                  alt={connection.name}
                  className="rounded-circle me-3"
                  style={{ width: '50px', height: '50px' }}
                />
                <div>
                  <Card.Title>{connection.name}</Card.Title>
                  <Card.Text>{connection.update}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </FeedCard>
    </FeedSection>
  );
}

export default JobsFeedComp;
