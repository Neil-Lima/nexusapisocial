'use client';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const GradientBackground = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  min-height: 100vh;
  padding: 20px;
`;
export const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$online ? '#4CAF50' : '#9E9E9E'};
  margin-left: 10px;
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  color: #ffffff;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;

export const StyledCard = styled(Card)`
  border-radius: 20px;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  color: #ffffff;
  overflow: hidden;
`;

export const ContactListContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: calc(100vh - 40px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 8px;
    border-radius: 20px;
    color: white;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;


export const ContactList = styled.div`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

 

export const ContactItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props['data-active'] === 'true' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;





export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &::after {
    content: '';
    display: ${props => props.$online ? 'block' : 'none'};
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #44b700;
    border: 2px solid white;
  }
`;


export const ContactInfo = styled.div`
  flex: 1;
  h6 {
    margin: 0;
    color: white;
  }
`;

export const LastMessage = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
  align-self: ${props => props.$sent ? 'flex-end' : 'flex-start'};
`;


export const UnreadBadge = styled.span`
  background: ${props => props.theme.highlightColor};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  margin-top: 5px;
  display: inline-block;
`;
export const MessageGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ConversationContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;


export const Message = styled.div`
  max-width: 60%;
  padding: 15px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${props => props.$sent ? '0 0 0 auto' : '0 auto 0 0'};
  background-color: ${props => props.$sent ? 
    props.theme.primaryColor : 
    'rgba(255, 255, 255, 0.1)'
  };
  color: #ffffff;
  
  p {
    margin: 0;
    padding: 0;
  }
`;

export const DateDivider = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
  
  span {
    background: rgba(0, 0, 0, 0.5);
    padding: 0 10px;
    position: relative;
    color: #ffffff;
  }
`;


export const MessageBubble = styled.div`
  max-width: 70%;
  align-self: ${props => props.sent ? 'flex-end' : 'flex-start'};
  background: ${props => props.sent ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };
  padding: 10px 15px;
  border-radius: 15px;
  color: white;

  p {
    margin: 0;
  }
`;

export const MessageStatus = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  align-self: flex-end;
`;

export const InputContainer = styled.div`
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const InputActions = styled.div`
  display: flex;
  gap: 15px;
  color: rgba(255, 255, 255, 0.7);

  svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const SendButton = styled.button`
  background: ${props => props.disabled ? 
    'rgba(255, 255, 255, 0.1)' : 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
  };
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;

  &:not(:disabled):hover {
    transform: scale(1.1);
  }
`;

export const EmojiContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const VideoCallContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const VideoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 15px;
  padding: 15px;
`;

export const VideoFrame = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const CallControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ControlButton = styled.button`
  background: ${props => props.danger ? 
    'rgba(255, 59, 48, 0.8)' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.danger ? 
      'rgba(255, 59, 48, 1)' : 
      'rgba(255, 255, 255, 0.3)'
    };
  }
`;

// Add these new styled components to the existing file:

export const EmojiHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EmojiSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    width: 100%;
  }
`;

export const EmojiCategories = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;

export const EmojiCategory = styled.div`
  padding: 10px;
  
  h6 {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.2);
  }
`;

export const RecentEmojis = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h6 {
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 10px;
  }
`;
