'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
  EmojiContainer,
  EmojiHeader,
  EmojiSearch,
  EmojiCategories,
  EmojiCategory,
  EmojiGrid,
  EmojiButton,
  RecentEmojis
} from './styles/MessagesStyle';

function MessagesEmojiSelectorComp({ onEmojiSelect }) {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [recentEmojis, setRecentEmojis] = useState(['😊', '❤️', '👍', '🎉']);

  const emojiCategories = [
    {
      name: 'Smileys & People',
      emojis: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘']
    },
    {
      name: 'Animals & Nature',
      emojis: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔']
    },
    {
      name: 'Food & Drink',
      emojis: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅']
    },
    {
      name: 'Activities',
      emojis: ['⚽️', '🏀', '🏈', '⚾️', '🥎', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '⛳️']
    }
  ];

  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji);
    setRecentEmojis(prev => {
      const updated = [emoji, ...prev.filter(e => e !== emoji)];
      return updated.slice(0, 8);
    });
  };

  const filteredCategories = searchTerm
    ? emojiCategories.map(category => ({
        ...category,
        emojis: category.emojis.filter(emoji => 
          emoji.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.emojis.length > 0)
    : emojiCategories;

  return (
    <EmojiContainer theme={theme}>
      <EmojiHeader>
        <FontAwesomeIcon icon={faSmile} />
        <span>Emojis</span>
      </EmojiHeader>

      <EmojiSearch>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search emojis..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </EmojiSearch>

      {recentEmojis.length > 0 && !searchTerm && (
        <RecentEmojis>
          <h6>
            <FontAwesomeIcon icon={faClock} />
            Recent
          </h6>
          <EmojiGrid>
            {recentEmojis.map((emoji, index) => (
              <EmojiButton
                key={`recent-${index}`}
                onClick={() => handleEmojiClick(emoji)}
                theme={theme}
              >
                {emoji}
              </EmojiButton>
            ))}
          </EmojiGrid>
        </RecentEmojis>
      )}

      <EmojiCategories>
        {filteredCategories.map((category, categoryIndex) => (
          <EmojiCategory key={categoryIndex}>
            <h6>{category.name}</h6>
            <EmojiGrid>
              {category.emojis.map((emoji, emojiIndex) => (
                <EmojiButton
                  key={`${categoryIndex}-${emojiIndex}`}
                  onClick={() => handleEmojiClick(emoji)}
                  theme={theme}
                >
                  {emoji}
                </EmojiButton>
              ))}
            </EmojiGrid>
          </EmojiCategory>
        ))}
      </EmojiCategories>
    </EmojiContainer>
  );
}

export default MessagesEmojiSelectorComp;