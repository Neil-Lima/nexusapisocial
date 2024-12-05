'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 20px 0;
`;

export const SearchContainer = styled.div`
  width: 80%;
  margin: 0 auto 40px;
`;

export const LocationHeader = styled.div`
  margin-top: 20px;
  color: white;

  h4 {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
