'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper, StyledListGroup, StyledListGroupItem, MenuText } from './styles/MenuListStyles';
import { useTheme } from '@/context/ThemeContext';
import { menuItems } from './utils/MenuListUtils';

function MenuListComp() {
  const { theme } = useTheme();

  return (
    <StyledListGroup className="mb-4">
      {menuItems.map((item, index) => (
        <StyledListGroupItem 
          key={index} 
          className="border-0 d-flex align-items-center"
        >
          <IconWrapper theme={theme}>
            <FontAwesomeIcon icon={item.icon} style={{fontSize: '20px', color: '#ffffff'}} />
          </IconWrapper>
          <MenuText>{item.text}</MenuText>
        </StyledListGroupItem>
      ))}
    </StyledListGroup>
  );
}

export default MenuListComp;
