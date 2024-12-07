'use client';
import { useState } from 'react';

export const useUserTabMedia = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange
  };
};
