'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledProfileCard = styled(Card)`
  border-radius: 20px;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  color: #ffffff;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CoverImage = styled.div`
  height: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  margin-top: -75px;
  padding: 0 20px;
`;

export const ProfileImage = styled(Card.Img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  margin: 0 auto;
  object-fit: cover;
`;

export const GradientText = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 24px;
`;

export const ProfileDescription = styled.p`
  margin: 10px 0;
  color: #ffffff;
`;

export const ProfileLink = styled.a`
  color: #FF0080;
  text-decoration: none;
  
  &:hover {
    color: #FF0080;
    text-decoration: underline;
  }
`;
