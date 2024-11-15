'use client';
import { useState, useEffect } from 'react';

export const fetchContacts = async () => {
  // Simulated API call
  return [
    {
      id: 1,
      name: 'Sasuke Uchiha',
      avatar: 'https://picsum.photos/50/50?random=1',
      online: true,
      lastMessage: 'Where are you, dobe?',
      lastMessageTime: '2min ago',
      unreadCount: 3
    },
    {
      id: 2,
      name: 'Sakura Haruno',
      avatar: 'https://picsum.photos/50/50?random=2',
      online: true,
      lastMessage: 'Training at the hospital today',
      lastMessageTime: '1h ago',
      unreadCount: 0
    },
    {
      id: 3,
      name: 'Kakashi Sensei',
      avatar: 'https://picsum.photos/50/50?random=3',
      online: false,
      lastMessage: 'Don\'t be late for training',
      lastMessageTime: '3h ago',
      unreadCount: 1
    }
  ];
};

export const fetchMessages = async (contactId) => {
  // Simulated API call
  return [
    {
      id: 1,
      content: 'Hey, how are you?',
      time: '10:00',
      sent: true,
      read: true
    },
    {
      id: 2,
      content: 'I\'m good, thanks! How about you?',
      time: '10:02',
      sent: false,
      read: true
    },
    {
      id: 3,
      content: 'Great! Want to train together today?',
      time: '10:03',
      sent: true,
      read: true
    }
  ];
};
