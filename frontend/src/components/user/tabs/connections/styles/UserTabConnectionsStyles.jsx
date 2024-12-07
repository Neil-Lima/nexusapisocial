'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ConnectionsContainer = styled.div`
  padding: 20px;
`;

export const ConnectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ConnectionCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ConnectionAvatar = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
`;

export const ConnectionInfo = styled.div`
  padding: 15px;
  color: white;
`;

export const ConnectionName = styled.h5`
  margin: 0;
  color: white;
`;

export const ConnectionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const ConnectionActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
