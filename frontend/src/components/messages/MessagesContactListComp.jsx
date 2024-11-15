'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
  ContactListContainer,
  SearchBar,
  ContactList,
  ContactItem,
  Avatar,
  ContactInfo,
  LastMessage,
  MessageTime,
  UnreadBadge
} from './styles/MessagesStyle';

function MessagesContactListComp({ contacts, selectedContact, onSelectContact }) {
  const { theme } = useTheme();

  return (
    <ContactListContainer theme={theme}>
      <SearchBar>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search contacts..." />
      </SearchBar>
      
      <ContactList>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            selected={selectedContact?.id === contact.id}
            onClick={() => onSelectContact(contact)}
            theme={theme}
          >
            <Avatar $online={contact.online}>
              <img src={contact.avatar} alt={contact.name} />
            </Avatar>
            <ContactInfo>
              <h6>{contact.name}</h6>
              <LastMessage>{contact.lastMessage}</LastMessage>
            </ContactInfo>
            <div>
              <MessageTime>{contact.lastMessageTime}</MessageTime>
              {contact.unreadCount > 0 && (
                <UnreadBadge theme={theme}>{contact.unreadCount}</UnreadBadge>
              )}
            </div>
          </ContactItem>
        ))}
      </ContactList>
    </ContactListContainer>
  );
}

export default MessagesContactListComp;
