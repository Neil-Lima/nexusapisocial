'use client'

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function LoginResultModalComp({ showResultModal, setShowResultModal, resultModalContent }) {
  return (
    <Modal show={showResultModal} onHide={() => setShowResultModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{resultModalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{resultModalContent.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowResultModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginResultModalComp;
