'use client';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const MatchCard = styled(Card)`
   border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const UserStatus = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: ${props => props.online ? 
    'rgba(46, 213, 115, 0.9)' : 
    'rgba(255, 71, 87, 0.9)'
  };
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
`;

export const CardContent = styled.div`
  padding: 20px;
  color: white;
`;

export const CardTitle = styled.div`
  h4 {
    margin: 0;
    font-weight: bold;
  }

  h6 {
    color: rgba(255, 255, 255, 0.7);
    margin: 5px 0;
  }
`;

export const InfoList = styled.div`
  margin: 15px 0;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);

  svg {
    color: ${props => props.theme.primaryColor};
    margin-right: 10px;
    width: 16px;
  }

  strong {
    margin-right: 5px;
  }
`;

export const WhatsappButton = styled(Button)`
  width: 100%;
  background: #25D366;
  border: none;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 8px;
  }
`;
