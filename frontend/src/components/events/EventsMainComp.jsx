'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, Card } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground, StyledCard, StyledButton } from './styles/EventsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import EventsCardComp from './EventsCardComp';
import EventsModalComp from './EventsModalComp';
import ProfileCardComp from '@/shared/profile/components/ProfileCardComp';
import MenuListComp from '@/shared/menu/MenuListComp';
import { initialEvents } from './utils/EventsUtil';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function EventsMainComp() {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState(initialEvents);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <NavMenuComp/>
     <GradientBackground theme={theme}>
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileCardComp />
            <MenuListComp />
          </Col>
          <Col lg={9}>
            <StyledCard>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2>Events</h2>
                  <StyledButton onClick={() => setShowModal(true)} theme={theme}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Create Event
                  </StyledButton>
                </div>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
                {filteredEvents.map((event) => (
                  <EventsCardComp key={event.id} event={event} />
                ))}
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>
      </Container>
      <EventsModalComp 
        show={showModal} 
        onHide={() => setShowModal(false)}
        events={events}
        setEvents={setEvents}
      />
    </GradientBackground>
    </>
   
  );
}
