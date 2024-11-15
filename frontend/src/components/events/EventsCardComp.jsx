'use client';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { StyledCard, StyledButton, EventImage } from './styles/EventsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faClock, faUsers, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

export default function EventsCardComp({ event }) {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <EventImage src={event.image} alt={event.title} />
      <Card.Body>
        <h4>{event.title}</h4>
        <div className="mb-3">
          <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
          {event.date}
          <FontAwesomeIcon icon={faClock} className="ms-3 me-2" />
          {event.time}
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {event.location}
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon={faUsers} className="me-2" />
          {event.attendees} participants
        </div>
        <div className="d-flex justify-content-between">
          <StyledButton theme={theme}>Participate</StyledButton>
          <div>
            <Button variant="link" className="text-white">
              <FontAwesomeIcon icon={faHeart} /> {event.likes}
            </Button>
            <Button variant="link" className="text-white">
              <FontAwesomeIcon icon={faComment} /> {event.comments}
            </Button>
            <Button variant="link" className="text-white">
              <FontAwesomeIcon icon={faShare} /> {event.shares}
            </Button>
          </div>
        </div>
      </Card.Body>
    </StyledCard>
  );
}
