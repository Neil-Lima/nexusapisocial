'use client';
import styled from 'styled-components';

export const SuggestionsContainer = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const SuggestionsHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  
  h5 {
    margin: 0;
    color: #ffffff;
  }
`;

export const SuggestionsList = styled.div`
  padding: 15px;
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const UserInfo = styled.div`
  flex: 1;
  
  h6 {
    margin: 0;
    color: #ffffff;
  }
  
  small {
    color: rgba(255,255,255,0.7);
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const IgnoreButton = styled(AddButton)`
  background: rgba(255,255,255,0.1);
  
  &:hover {
    background: rgba(255,0,0,0.2);
  }
`;
