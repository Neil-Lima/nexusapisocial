'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import {
  InputContainer,
  MessageInput,
  InputActions,
  SendButton
} from './styles/MessagesStyle';
import { useTheme } from '@/context/ThemeContext';
import MessagesEmojiSelectorComp from './MessagesEmojiSelectorComp';

function MessagesInputComp() {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Send message logic
      setMessage('');
    }
  };

  return (
    <InputContainer theme={theme}>
      <InputActions>
        <FontAwesomeIcon 
          icon={faSmile} 
          onClick={() => setShowEmojis(!showEmojis)}
        />
        <FontAwesomeIcon icon={faPaperclip} />
      </InputActions>
      
      <MessageInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        theme={theme}
      />
      
      <SendButton 
        onClick={handleSend}
        disabled={!message.trim()}
        theme={theme}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </SendButton>

      {showEmojis && (
        <MessagesEmojiSelectorComp
          onEmojiSelect={(emoji) => setMessage(prev => prev + emoji)}
        />
      )}
    </InputContainer>
  );
}

export default MessagesInputComp;