// DatingChatComp.jsx
'use client';
import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImage, faSmile, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';

function DatingChatComp() {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="user-info">
          <Image src="/user-avatar.jpg" roundedCircle />
          <div>
            <h5>Maria Silva</h5>
            <span className="online">Online</span>
          </div>
        </div>
        <div className="chat-actions">
          <Button variant="link">
            <FontAwesomeIcon icon={faPhone} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faVideo} />
          </Button>
        </div>
      </div>

      <div className="messages-container">
        {[1,2,3].map(msg => (
          <div key={msg} className={`message ${msg % 2 === 0 ? 'sent' : 'received'}`}>
            <p>Olá, tudo bem?</p>
            <span className="time">14:30</span>
          </div>
        ))}
      </div>

      <Form className="message-input">
        <Button variant="link">
          <FontAwesomeIcon icon={faImage} />
        </Button>
        <Button variant="link">
          <FontAwesomeIcon icon={faSmile} />
        </Button>
        <Form.Control type="text" placeholder="Digite sua mensagem..." />
        <Button variant="primary">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Form>
    </div>
  );
}

export default DatingChatComp;
