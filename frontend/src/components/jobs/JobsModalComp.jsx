'use client';
import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { StyledModal, StyledButton } from './styles/JobsStyles';

export default function JobsModalComp({ show, onHide }) {
  const { theme } = useTheme();

  return (
    <StyledModal show={show} onHide={onHide} centered theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>Candidatar-se à Vaga</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Currículo</Form.Label>
            <Form.Control type="file" accept=".pdf,.doc,.docx" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Carta de Apresentação</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pretensão Salarial</Form.Label>
            <Form.Control type="text" placeholder="R$ " />
          </Form.Group>
          <StyledButton type="submit" theme={theme}>
            Enviar Candidatura
          </StyledButton>
        </Form>
      </Modal.Body>
    </StyledModal>
  );
}
