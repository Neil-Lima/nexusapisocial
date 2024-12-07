'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const HeaderCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
`;

export const HeaderBanner = styled(Card.Img)`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: -90px;
  margin-left: 40px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileTitle = styled.h4`
  color: #ffffff;
  font-size: 2rem;
  margin: 20px 40px;
  font-weight: 600;
`;

export const ProfileDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0 40px 30px;
  line-height: 1.6;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
