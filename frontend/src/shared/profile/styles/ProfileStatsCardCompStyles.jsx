'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  text-align: center;
  border: none;
  margin-bottom: 24px;
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

export const StatColumn = styled.div`
  padding: 8px;
`;

export const StatValue = styled.h4`
  color: ${props => props.theme.textColor};
  opacity: 0.7;
  font-size: 0.85rem;
  margin: 0;
`;

export const StatLabel = styled.h4`
  color: ${props => props.theme.textColor};
  font-weight: bold;
  font-size: 0.85rem;
  margin: 0;
`;
