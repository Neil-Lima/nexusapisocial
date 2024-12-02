'use client';
import { useState, useEffect } from 'react';

const mockEvents = [
  {
    id: 1,
    title: "The Learning Conference",
    date: "2024-12-08",
    time: "08:00 AM",
    location: "São Paulo Convention Center",
    image: "https://picsum.photos/800/400?random=1",
    category: "Conferência",
    price: "Free",
    attendees: 148,
    interested: 50,
    isOnline: false
  },
  {
    id: 2,
    title: "The Learning Conference",
    date: "2024-12-08",
    time: "08:00 AM",
    location: "São Paulo Convention Center",
    image: "https://picsum.photos/800/400?random=1",
    category: "Conferência",
    price: "Free",
    attendees: 148,
    interested: 50,
    isOnline: false
  },
  {
    id: 3,
    title: "The Learning Conference",
    date: "2024-12-08",
    time: "08:00 AM",
    location: "São Paulo Convention Center",
    image: "https://picsum.photos/800/400?random=1",
    category: "Conferência",
    price: "Free",
    attendees: 148,
    interested: 50,
    isOnline: false
  },
  {
    id: 4,
    title: "The Learning Conference",
    date: "2024-12-08",
    time: "08:00 AM",
    location: "São Paulo Convention Center",
    image: "https://picsum.photos/800/400?random=1",
    category: "Conferência",
    price: "Free",
    attendees: 148,
    interested: 50,
    isOnline: false
  },
 
];

export const useEventsGrid = () => {
  const [events, setEvents] = useState(mockEvents);
  const [isLoading, setIsLoading] = useState(false);

  return {
    events,
    isLoading
  };
};
