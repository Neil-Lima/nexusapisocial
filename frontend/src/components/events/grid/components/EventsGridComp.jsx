'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import EventsCardComp from '../../card/components/EventsCardComp';
import { GridContainer } from '../styles/EventsGridStyles';
import { useEventsGrid } from '../utils/EventsGridUtils';

export default function EventsGridComp({ onEventSelect }) {
  const { theme } = useTheme();
  const { events, isLoading } = useEventsGrid();

  return (
    <GridContainer theme={theme}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {events.map((event) => (
          <Col key={event.id}>
            <EventsCardComp 
              event={event}
              onSelect={() => onEventSelect(event)}
            />
          </Col>
        ))}
      </Row>
    </GridContainer>
  );
}
