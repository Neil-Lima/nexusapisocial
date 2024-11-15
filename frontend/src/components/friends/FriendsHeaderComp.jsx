'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton } from './styles/friendsStyle';
import { useTheme } from '@/context/ThemeContext';

function FriendsHeaderComp() {
  const { theme } = useTheme();

  return (
    <StyledCard className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-0">Friends</h2>
            <p className="text-muted mb-0">Manage your connections</p>
          </div>
          <div className="d-flex gap-2">
            <StyledButton className="d-lg-none" theme={theme}>
              <FontAwesomeIcon icon={faBars} />
            </StyledButton>
          </div>
        </div>
      </Card.Body>
    </StyledCard>
  );
}

export default FriendsHeaderComp;
