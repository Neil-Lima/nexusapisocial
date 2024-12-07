'use client';
import styled from 'styled-components';
import { Card, Row, Col } from 'react-bootstrap';

export const AboutContainer = styled.div`
  padding: 36px;
`;

export const OverviewCard = styled(Card)`
  border: none;
  margin-bottom: 24px;
  padding: 20px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
`;

export const InfoCard = styled(Card)`
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

export const InfoIcon = styled.i`
  margin-bottom: 14px;
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
  margin-right: 17px;
  float: left;
`;

export const InfoText = styled.h6`
  color: rgb(103, 106, 121);
  margin: 0;
  
  strong {
    margin-left: 5px;
  }
`;
