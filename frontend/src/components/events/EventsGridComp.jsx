// EventsGridComp.jsx
'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventsCardComp from './EventsCardComp';

function EventsGridComp({ events }) {
  return (
    <Row className="events-grid">
      {events.map(event => (
        <Col key={event.id} xs={12} md={6} lg={4}>
          <EventsCardComp event={event} />
        </Col>
      ))}
    </Row>
  );
}

export default EventsGridComp;
