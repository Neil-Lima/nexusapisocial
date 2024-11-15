'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
  SuggestionsContainer,
  SuggestionsHeader,
  SuggestionsList,
  SuggestionItem,
  UserAvatar,
  UserInfo,
  ActionButtons,
  AddButton,
  IgnoreButton
} from './styles/SuggestionsStyles';
import { useSuggestions } from './utils/SuggestionsUtils';

function SuggestionsFriendComp() {
  const { theme } = useTheme();
  const { suggestions, handleAddFriend, handleIgnoreSuggestion } = useSuggestions();

  return (
    <SuggestionsContainer theme={theme}>
      <SuggestionsHeader>
        <h5>Friend Suggestions</h5>
      </SuggestionsHeader>
      
      <SuggestionsList>
        {suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion.id} theme={theme}>
            <UserAvatar src={suggestion.avatar} alt={suggestion.name} />
            <UserInfo>
              <h6>{suggestion.name}</h6>
              <small>{suggestion.mutualFriends} mutual friends</small>
            </UserInfo>
            <ActionButtons>
              <AddButton 
                onClick={() => handleAddFriend(suggestion.id)}
                theme={theme}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </AddButton>
              <IgnoreButton 
                onClick={() => handleIgnoreSuggestion(suggestion.id)}
                theme={theme}
              >
                <FontAwesomeIcon icon={faTimes} />
              </IgnoreButton>
            </ActionButtons>
          </SuggestionItem>
        ))}
      </SuggestionsList>
    </SuggestionsContainer>
  );
}

export default SuggestionsFriendComp;
