'use client';
import { useState } from 'react';

export const useUserHeader = () => {
  const [headerData] = useState({
    name: 'Sarah Anderson',
    bannerUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    profileUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    description: 'Designer Digital & UX/UI Lead na Creative Solutions. Apaixonada por inovação e design centrado no usuário. Explorando novas formas de criar experiências digitais impactantes.'
  });

  return {
    headerData
  };
};
