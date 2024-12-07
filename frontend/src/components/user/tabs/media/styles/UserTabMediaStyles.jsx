'use client';
import styled from 'styled-components';

export const MediaContainer = styled.div`
  padding: 20px;
`;

export const MediaTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MediaTab = styled.button`
  background: ${props => props.active ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'};
  border: none;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const MediaContent = styled.div`
  margin-top: 20px;
`;
