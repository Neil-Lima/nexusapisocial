'use client'
import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';
import { StyledCard, FriendGrid, FriendItem, StyledButton } from './styles/ProfileuserStyle';
import { allFriends } from './utils/ProfileuserUtils';

export function ProfileuserFriendsComp() {
  const { theme } = useTheme();
  const [showAllFriends, setShowAllFriends] = useState(false);
  const displayedFriends = showAllFriends ? allFriends : allFriends.slice(0, 6);

  return (
    <StyledCard>
      <Card.Body>
        <h4 className="mb-4">Amigos</h4>
        <FriendGrid>
          {displayedFriends.map((friend, index) => (
            <FriendItem key={index} theme={theme}>
              <Image src={`https://picsum.photos/80/80?random=${index + 10}`} />
              <div className="friend-name">{friend}</div>
              <div className="friend-status">Online</div>
            </FriendItem>
          ))}
        </FriendGrid>
        {!showAllFriends && allFriends.length > 6 && (
          <div className="text-center mt-3">
            <StyledButton theme={theme} onClick={() => setShowAllFriends(true)}>
              Mostrar mais
            </StyledButton>
          </div>
        )}
      </Card.Body>
    </StyledCard>
  );
}
