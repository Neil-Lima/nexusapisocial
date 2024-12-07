'use client';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostCard = styled(Card)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PostAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  flex: 1;
  
  h5 {
    margin: 0;
    color: white;
  }
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const PostContent = styled.div`
  padding: 15px;
  color: white;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  button {
    background: none;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primaryColor};
      transform: translateY(-2px);
    }
  }
`;
