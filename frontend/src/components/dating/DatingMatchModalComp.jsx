'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { useDating } from './utils/DatingUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import {
  MatchModal,
  MatchContent,
  MatchProfiles,
  MatchActions
} from './styles/DatingStyles';

function DatingMatchModalComp({ match, onClose }) {
  const { theme } = useTheme();
  const { handleStartChat } = useDating();

  return (
    <MatchModal theme={theme}>
      <MatchContent theme={theme}>
        <h2>It's a Match!</h2>
        <MatchProfiles theme={theme}>
          <div className="profile">
            <img src={match.photo} alt={match.name} />
            <h3>{match.name}</h3>
          </div>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <div className="profile">
            <img src={match.matchedWith.photo} alt={match.matchedWith.name} />
            <h3>{match.matchedWith.name}</h3>
          </div>
        </MatchProfiles>
        <MatchActions theme={theme}>
          <button onClick={() => handleStartChat(match.id)}>
            <FontAwesomeIcon icon={faComment} />
            Send Message
          </button>
          <button onClick={onClose}>
            Keep Swiping
          </button>
        </MatchActions>
      </MatchContent>
    </MatchModal>
  );
}

export default DatingMatchModalComp;
