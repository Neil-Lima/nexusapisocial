'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContainer,
  ContactInfo,
  Avatar,
  ActionButtons,
  ActionButton
} from './styles/MessagesStyle';
import { useTheme } from '@/context/ThemeContext';

function MessagesHeaderComp({ contact, onStartVideoCall }) {
  const { theme } = useTheme();

  return (
    <HeaderContainer theme={theme}>
      <ContactInfo>
        <Avatar $online={contact.online}>
          <img src={contact.avatar} alt={contact.name} />
        </Avatar>
        <div>
          <h6>{contact.name}</h6>
          <small>{contact.online ? 'Online' : 'Offline'}</small>
        </div>
      </ContactInfo>
      
      <ActionButtons>
        <ActionButton onClick={onStartVideoCall} theme={theme}>
          <FontAwesomeIcon icon={faVideo} />
        </ActionButton>
        <ActionButton theme={theme}>
          <FontAwesomeIcon icon={faPhone} />
        </ActionButton>
        <ActionButton theme={theme}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </ActionButton>
      </ActionButtons>
    </HeaderContainer>
  );
}

export default MessagesHeaderComp;
