'use client';
import { format } from 'date-fns';

export const groupMessagesByDate = (messages = []) => {
  const groups = {};
  messages.forEach(message => {
    if (message && message.time) {
      try {
        const date = format(new Date(message.time), 'yyyy-MM-dd');
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(message);
      } catch (error) {
        console.log('Invalid date format:', message.time);
      }
    }
  });
  return groups;
};

export const fetchContacts = async () => {
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
  return [
    {
      id: 1,
      text: 'Hey, how are you?',
      time: new Date().toISOString(),
      sent: true,
      read: true
    },
    {
      id: 2,
      text: 'I\'m good, thanks! How about you?',
      time: new Date().toISOString(),
      sent: false,
      read: true
    },
    {
      id: 3,
      text: 'Great! Want to train together today?',
      time: new Date().toISOString(),
      sent: true,
      read: true
    }
  ];
};