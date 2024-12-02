'use client';
import { useState } from 'react';

export const useEventsCard = () => {
  const [interested, setInterested] = useState([]);

  const handleInterest = (eventId) => {
    setInterested(prev => 
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return {
    interested,
    handleInterest
  };
};
