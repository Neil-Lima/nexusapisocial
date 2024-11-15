'use client';
import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const CreatePostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

export const PostInput = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: ${props => props.theme.textColor};
  resize: none;
  min-height: 60px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const CreatePostBody = styled.div`
  padding: 15px;
  
  img {
    width: 100%;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 15px;
  }
`;

export const CreatePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  > div {
    display: flex;
    gap: 10px;
  }
`;

export const MediaButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  padding: 8px 12px;
  border-radius: 20px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.primaryColor};
  }
`;

export const PostButton = styled.button`
  background: ${props => props.disabled 
    ? 'rgba(255,255,255,0.1)' 
    : `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: ${props => props.theme.transition};
  
  &:hover:not(:disabled) {
    transform: ${props => props.theme.buttonHoverTransform};
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
