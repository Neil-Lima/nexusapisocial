'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FriendItem, StyledButton } from './styles/friendsStyle';

function FriendsCardComp({ friend, onToggleFriend }) {
  const { theme } = useTheme();

  return (
    <FriendItem>
      <Card.Body>
        <div className="d-flex flex-column align-items-center text-center">
          <img 
            src={friend.image} 
            alt={friend.name} 
            className="rounded-circle" 
            style={{width: '100px', height: '100px', marginBottom: '15px'}} 
          />
          <h5>{friend.name}</h5>
          <div className="mt-3">
            <StyledButton variant="primary" theme={theme} className="me-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </StyledButton>
            <StyledButton 
              variant={friend.isFriend ? "danger" : "success"} 
              theme={theme}
              onClick={() => onToggleFriend(friend.id)}
            >
              <FontAwesomeIcon icon={friend.isFriend ? faUserMinus : faUserPlus} />
            </StyledButton>
          </div>
        </div>
      </Card.Body>
    </FriendItem>
  );
}

export default FriendsCardComp;
