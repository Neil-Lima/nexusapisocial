import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const EventCard = styled(Card)`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  transition: ${props => props.theme.transition};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
`;

export const EventButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
