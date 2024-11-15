'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGlobeAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import { MenuContainer, MenuItem, IconWrapper } from './styles/MenuListStyles';
import { useMenuList } from './utils/MenuListUtils';
import { useTheme } from '@/context/ThemeContext';

function MenuListComp() {
  const { theme } = useTheme();
  const { menuItems } = useMenuList();

  return (
    <MenuContainer>
      {menuItems.map((item, index) => (
        <MenuItem key={index} theme={theme}>
          <IconWrapper theme={theme}>
            <FontAwesomeIcon icon={item.icon} />
          </IconWrapper>
          <span>{item.text}</span>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}

export default MenuListComp;
