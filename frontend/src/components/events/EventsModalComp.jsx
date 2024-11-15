'use client';
import React, { useState, useRef } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { StyledModal, StyledButton } from './styles/EventsStyle';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { handleCreateEvent, handleInputChange, handleDateChange, handleImageUpload, initialNewEvent } from './utils/EventsUtil';

export default function EventsModalComp({ show, onHide, events, setEvents }) {
  const { theme } = useTheme();
  const [newEvent, setNewEvent] = useState(initialNewEvent);
  const fileInputRef = useRef(null);

  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleCreateEvent(e, newEvent, events, setEvents, onHide, setNewEvent)}>
          <Form.Group className="mb-3">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              name="title"
              value={newEvent.title}
              onChange={(e) => handleInputChange(e, setNewEvent)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <DatePicker
              selected={newEvent.date}
              onChange={(date) => handleDateChange(date, setNewEvent)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={newEvent.time}
              onChange={(e) => handleInputChange(e, setNewEvent)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event location"
              name="location"
              value={newEvent.location}
              onChange={(e) => handleInputChange(e, setNewEvent)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe the event"
              name="description"
              value={newEvent.description}
              onChange={(e) => handleInputChange(e, setNewEvent)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Event Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setNewEvent)}
              ref={fileInputRef}
              required
            />
          </Form.Group>
          <StyledButton type="submit" theme={theme}>
            Create Event
          </StyledButton>
        </Form>
      </Modal.Body>
    </StyledModal>
  );
}
