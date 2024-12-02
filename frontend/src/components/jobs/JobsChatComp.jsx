'use client';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { ChatContainer, ChatMessages, MessageBubble } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

export default function JobsChatComp() {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');

  return (
    <ChatContainer theme={theme}>
      <div className="chat-header">
        <img src="/company-logo.png" alt="Company" />
        <div>
          <h5>TechCorp</h5>
          <span>Vaga: Desenvolvedor Frontend</span>
        </div>
      </div>
      
      <ChatMessages>
        <MessageBubble theme={theme}>
          Olá! Vimos seu currículo e gostaríamos de marcar uma entrevista.
        </MessageBubble>
        <MessageBubble theme={theme} $isSent>
          Ótimo! Estou disponível esta semana.
        </MessageBubble>
      </ChatMessages>

      <Form className="chat-input">
        <div className="d-flex gap-2">
          <button type="button">
            <FontAwesomeIcon icon={faSmile} />
          </button>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </Form>
    </ChatContainer>
  );
}
