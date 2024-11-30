'use client';
import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const CreatePostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid ${props => props.theme.textColor};
`;

export const PostInput = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  resize: none;
  min-height: 60px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const CreatePostBody = styled.div`
  margin-bottom: 15px;
  
  img {
    width: 100%;
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const CreatePostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
  padding: 8px 12px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PostButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 20px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
