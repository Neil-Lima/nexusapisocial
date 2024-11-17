'use client'
import React, { useState } from 'react';
import { Form, InputGroup, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, ContactList, ContactItem, StatusIndicator, StyledButton } from './styles/MessagesStyle';

export default function MessagesContactListComp({ contacts, activeContact, setActiveContact, theme }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showArchived, setShowArchived] = useState(false);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (showArchived ? contact.archived : !contact.archived)
  );

  return (
    <StyledCard>
      <Card.Body>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Pesquisar contatos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: 'none' }}
          />
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
        <div className="d-flex justify-content-between mb-3">
          <StyledButton onClick={() => setShowArchived(!showArchived)} theme={theme}>
            {showArchived ? 'Show Active' : 'Show Archived'}
          </StyledButton>
        </div>
        <ContactList>
          {filteredContacts.map(contact => (
        <ContactItem
        key={contact.id}
        data-active={Boolean(activeContact?.id === contact?.id).toString()}
        onClick={() => setActiveContact(contact)}
      >
      
         
              <div className="d-flex align-items-center">
                <Image 
                  src={contact.avatar} 
                  alt={contact.name}
                  width={50}
                  height={50}
                  className="rounded-circle me-3"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-0">{contact.name}</h6>
                  <small>{contact.lastMessage}</small>
                </div>
                <div className="text-right">
                  <small>{contact.time}</small>
                  <StatusIndicator $online={contact.online} />
                  </div>
              </div>
            </ContactItem>
          ))}
        </ContactList>
      </Card.Body>
    </StyledCard>
  );
}
