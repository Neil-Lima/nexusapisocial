'use client';
import { faHome, faUser, faGlobeAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';

export const useMenuList = () => {
  const menuItems = [
    { icon: faHome, text: 'Feed', path: '/' },
    { icon: faUser, text: 'Conexões', path: '/conexoes' },
    { icon: faGlobeAmericas, text: 'Ultimas noticias', path: '/noticias' },
    { icon: faUsers, text: 'Grupos', path: '/grupos' }
  ];

  return {
    menuItems
  };
};
