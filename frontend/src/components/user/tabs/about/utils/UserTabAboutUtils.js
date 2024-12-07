'use client';
import { useState } from 'react';

export const useUserTabAbout = () => {
  const [userInfo] = useState({
    overview: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    birthDate: '20 de outubro de 1990',
    relationship: 'Solteiro',
    occupation: 'Desenvolvedor Líder',
    email: 'example@gmail.com',
    joinDate: '26 de novembro de 2019'
  });

  return {
    userInfo
  };
};
