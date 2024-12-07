'use client';
import { useState } from 'react';

export const useUserTabConnections = () => {
  const [connections] = useState([
    {
      id: 1,
      name: 'Hashirama Senju',
      avatar: 'https://example.com/avatar1.jpg',
      mutualFriends: 25
    },
    {
      id: 2,
      name: 'Tobirama Senju',
      avatar: 'https://example.com/avatar2.jpg',
      mutualFriends: 15
    },
    {
      id: 3,
      name: 'Izuna Uchiha',
      avatar: 'https://example.com/avatar3.jpg',
      mutualFriends: 30
    }
  ]);

  const handleMessage = (connectionId) => {
    console.log('Send message to:', connectionId);
  };

  const handleViewProfile = (connectionId) => {
    console.log('View profile:', connectionId);
  };

  return {
    connections,
    handleMessage,
    handleViewProfile
  };
};
