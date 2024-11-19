'use client';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandshake, faCalendarAlt, faComments, faUserPlus, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { NetworkSection, ConnectionCard, StyledButton, EventCard } from './styles/JobsStyle';

function JobsNetworkComp({ connections, events, userProfile }) {
  return (
    <NetworkSection>
      <h4>Sua Rede Profissional</h4>

      {/* Estatísticas */}
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faUsers} />
              <h5>{connections.length}</h5>
              <p>Conexões</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faHandshake} />
              <h5>{userProfile.networkStats.introductions}</h5>
              <p>Apresentações</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <h5>{events.length}</h5>
              <p>Eventos</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Conexões Sugeridas */}
      <section className="mb-4">
        <h5>Conexões Sugeridas</h5>
        <Row>
          {connections.filter(c => c.suggested).map((connection, index) => (
            <Col md={4} key={index}>
              <ConnectionCard>
                <div className="text-center mb-3">
                  <img 
                    src={connection.avatar} 
                    alt={connection.name}
                    className="rounded-circle"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <h6>{connection.name}</h6>
                <p>{connection.role} at {connection.company}</p>
                <p>{connection.mutualConnections} conexões em comum</p>
                <StyledButton>
                  <FontAwesomeIcon icon={faUserPlus} /> Conectar
                </StyledButton>
              </ConnectionCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Eventos */}
      <section className="mb-4">
        <h5>Eventos Próximos</h5>
        <Row>
          {events.map((event, index) => (
            <Col md={6} key={index}>
              <EventCard>
                <div className="event-date">
                  <span className="day">{event.date.getDate()}</span>
                  <span className="month">{event.date.toLocaleString('default', { month: 'short' })}</span>
                </div>
                <h6>{event.title}</h6>
                <p>{event.description}</p>
                <p>
                  <FontAwesomeIcon icon={faUsers} /> {event.attendees} participantes
                </p>
                <StyledButton>Participar</StyledButton>
              </EventCard>
            </Col>
          ))}
        </Row>
      </section>

      {/* Grupos */}
      <section className="mb-4">
        <h5>Grupos Recomendados</h5>
        <Row>
          {userProfile.recommendedGroups.map((group, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{group.name}</Card.Title>
                  <Card.Text>{group.members} membros</Card.Text>
                  <Card.Text>{group.description}</Card.Text>
                  <StyledButton>Participar</StyledButton>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Oportunidades de Networking */}
      <section className="mb-4">
        <h5>Oportunidades de Networking</h5>
        <Row>
          {userProfile.networkingOpportunities.map((opportunity, index) => (
            <Col md={6} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{opportunity.title}</Card.Title>
                  <Card.Text>{opportunity.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <FontAwesomeIcon icon={faBriefcase} /> {opportunity.type}
                    </div>
                    <StyledButton>Explorar</StyledButton>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Chat e Mensagens */}
      <section>
        <h5>
          <FontAwesomeIcon icon={faComments} /> Conversas Recentes
        </h5>
        <Row>
          {userProfile.recentChats.map((chat, index) => (
            <Col md={12} key={index}>
              <Card className="mb-2">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h6>{chat.name}</h6>
                      <p className="mb-0">{chat.lastMessage}</p>
                      <small>{chat.timestamp}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </NetworkSection>
  );
}

export default JobsNetworkComp;
