'use client';
import styled from 'styled-components';

export const NewsContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
    border: ${props => props.theme.messengerBorder};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 20px;
`;

export const NewsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  
  h5 {
    margin: 0;
    color: ${props => props.theme.highlightColor};
    margin-left: 10px;
  }
`;

export const NewsIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  font-size: 20px;
`;

export const NewsList = styled.div`
  padding: 15px;
`;

export const NewsItem = styled.div`
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  
  &:hover {
    background: ${props => props.theme.messengerInputBackground};
    transform: translateX(5px);
  }
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NewsTitle = styled.h6`
  margin: 0;
  color: ${props => props.theme.textColor};
  font-weight: 500;
`;

export const NewsTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255,255,255,0.7);
  font-size: 12px;
  margin-top: 5px;
`;

