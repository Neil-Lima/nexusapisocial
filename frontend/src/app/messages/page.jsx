'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/components/messages/styles/MessagesStyle';
import MessagesContactListComp from '@/components/messages/MessagesContactListComp';
import MessagesConversationComp from '@/components/messages/MessagesConversationComp';
import MessagesVideoCallComp from '@/components/messages/MessagesVideoCallComp';
import { fetchContacts, fetchMessages } from '@/components/messages/utils/MessagesUtils';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function MessagesPage() {
  const { theme } = useTheme();
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showVideoCall, setShowVideoCall] = useState(false);

  useEffect(() => {
    const loadContacts = async () => {
      const contactsData = await fetchContacts();
      setContacts(contactsData);
    };

    loadContacts();
  }, []);

  useEffect(() => {
    if (selectedContact) {
      const loadMessages = async () => {
        const messagesData = await fetchMessages(selectedContact.id);
        setMessages(messagesData);
      };

      loadMessages();
    }
  }, [selectedContact]);

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <Container>
          <Row>
            <Col md={4} lg={3}>
              <MessagesContactListComp
                contacts={contacts}
                activeContact={selectedContact}
                setActiveContact={setSelectedContact}
                theme={theme}
              />
            </Col>
            <Col md={8} lg={9}>
              {selectedContact ? (
                showVideoCall ? (
                  <MessagesVideoCallComp
                    contact={selectedContact}
                    onEndCall={() => setShowVideoCall(false)}
                  />
                ) : (
                  <MessagesConversationComp
                    contact={selectedContact}
                    messages={messages}
                    onStartVideoCall={() => setShowVideoCall(true)}
                  />
                )
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <h3>Select a contact to start chatting</h3>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </GradientBackground>
    </>
  );
}