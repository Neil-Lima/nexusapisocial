'use client';
import React from 'react';
import MessagesHeaderComp from './MessagesHeaderComp';
import MessagesInputComp from './MessagesInputComp';
import {
  ConversationContainer,
  MessagesContainer,
  MessageBubble,
  MessageTime,
  MessageStatus
} from './styles/MessagesStyle';
import { useTheme } from '@/context/ThemeContext';

function MessagesConversationComp({ contact, messages, onStartVideoCall }) {
  const { theme } = useTheme();

  return (
    <ConversationContainer theme={theme}>
      <MessagesHeaderComp contact={contact} onStartVideoCall={onStartVideoCall} />
      
      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            sent={message.sent}
            theme={theme}
          >
            <p>{message.content}</p>
            <MessageTime>{message.time}</MessageTime>
            {message.sent && (
              <MessageStatus>
                {message.read ? 'Read' : 'Sent'}
              </MessageStatus>
            )}
          </MessageBubble>
        ))}
      </MessagesContainer>

      <MessagesInputComp />
    </ConversationContainer>
  );
}

export default MessagesConversationComp;
