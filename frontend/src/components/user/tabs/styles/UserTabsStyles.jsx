'use client';
import styled from 'styled-components';
import { Nav, Tab } from 'react-bootstrap';

export const TabsContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  gap: 10px;
`;

export const TabButton = styled.button`
  background: ${props => props.active ? 
    'rgba(255, 255, 255, 0.1)' : 
    'transparent'};
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;
