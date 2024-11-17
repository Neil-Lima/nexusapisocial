'use client';
import React from 'react';
import MessagesHeaderComp from './MessagesHeaderComp';
import MessagesInputComp from './MessagesInputComp';
import {
  ConversationContainer,
  MessagesContainer,
  Message,
  MessageTime,
  MessageStatus,
  MessageGroup,
  DateDivider
} from './styles/MessagesStyle';
import { useTheme } from '@/context/ThemeContext';
import { groupMessagesByDate } from './utils/MessagesUtils';

export default function MessagesConversationComp({ contact, messages, onStartVideoCall }) {
  const { theme } = useTheme();

  const renderMessageGroups = () => {
    const groups = groupMessagesByDate(messages || []);
    return Object.entries(groups).map(([date, messages]) => (
      <MessageGroup key={date}>
        <DateDivider>
          <span>{new Date(date).toLocaleDateString()}</span>
        </DateDivider>
        {messages.map(msg => (
          <Message key={msg.id} $sent={msg.sent} theme={theme}>
            <p>{msg.text}</p>
            <MessageTime>
              {new Date(msg.time).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </MessageTime>
            {msg.sent && (
              <MessageStatus>
                {msg.read ? 'Read' : 'Sent'}
              </MessageStatus>
            )}
          </Message>
        ))}
      </MessageGroup>
    ));
  };

  return (
    <ConversationContainer theme={theme}>
      <MessagesHeaderComp 
        contact={contact} 
        onStartVideoCall={onStartVideoCall} 
      />
      
      <MessagesContainer>
        {renderMessageGroups()}
      </MessagesContainer>

      <MessagesInputComp />
    </ConversationContainer>
  );
}
