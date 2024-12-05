'use client';
import { useState } from 'react';

export const useDatingMain = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Umarizal');

  const handleSearch = (value) => {
    setSelectedNeighborhood(value);
  };

  return {
    selectedNeighborhood,
    handleSearch
  };
};
