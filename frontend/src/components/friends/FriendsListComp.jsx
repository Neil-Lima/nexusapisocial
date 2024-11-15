'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faUserMinus, 
  faEnvelope, 
  faCircle 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { 
  FriendCard, 
  FriendImage, 
  FriendInfo, 
  FriendActions,
  ActionButton,
  StatusBadge
} from './styles/friendsStyle';

function FriendsListComp({ friends, onToggleFriend }) {
  const { theme } = useTheme();

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {friends.map((friend) => (
        <Col key={friend.id}>
          <FriendCard>
            <FriendImage>
              <img src={friend.image} alt={friend.name} />
              <StatusBadge online={true}>
                <FontAwesomeIcon icon={faCircle} />
              </StatusBadge>
            </FriendImage>
            
            <FriendInfo>
              <h5>{friend.name}</h5>
              <span>12 mutual friends</span>
            </FriendInfo>

            <FriendActions>
              <ActionButton primary theme={theme}>
                <FontAwesomeIcon icon={faEnvelope} />
              </ActionButton>
              <ActionButton 
                danger={friend.isFriend}
                theme={theme}
                onClick={() => onToggleFriend(friend.id)}
              >
                <FontAwesomeIcon icon={friend.isFriend ? faUserMinus : faUserPlus} />
              </ActionButton>
            </FriendActions>
          </FriendCard>
        </Col>
      ))}
    </Row>
  );
}

export default FriendsListComp;
