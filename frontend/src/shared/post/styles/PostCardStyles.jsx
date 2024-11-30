'use client';
import styled from 'styled-components';

export const PostContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const PostHeader = styled.div`
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

export const UserInfo = styled.div`
  flex: 1;
  h6 {
    margin: 0;
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }
  small {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const PostDropdown = styled.div`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 5px;
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.theme.textColor};
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

export const PostBody = styled.div`
  padding: 15px;
`;

export const PostText = styled.p`
  color: ${props => props.theme.textColor};
  margin-bottom: 15px;
  line-height: 1.5;
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 15px;
`;

export const PostFooter = styled.div`
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.$isActive ? props.theme.primaryColor : props.theme.textColor};
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

export const CommentSection = styled.div`
  .comment {
    display: flex;
    margin-bottom: 15px;
    
    .comment-content {
      background: rgba(255, 255, 255, 0.1);
      padding: 10px 15px;
      border-radius: ${props => props.theme.borderRadius};
      flex: 1;
      margin-left: 10px;
      
      h6 {
        margin: 0;
        color: ${props => props.theme.textColor};
        font-weight: 600;
      }
      
      p {
        margin: 5px 0;
        color: ${props => props.theme.textColor};
      }
      
      small {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

export const CommentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  
  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    color: ${props => props.theme.textColor};
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;
