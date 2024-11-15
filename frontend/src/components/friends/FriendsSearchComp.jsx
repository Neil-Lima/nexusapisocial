'use client';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton } from './styles/friendsStyle';
import { useTheme } from '@/context/ThemeContext';

function FriendsSearchComp({ searchTerm, onSearch }) {
  const { theme } = useTheme();

  return (
    <StyledCard className="mb-4">
      <div className="p-3">
        <Form>
          <InputGroup>
            <Form.Control
              placeholder="Search friends..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.1)', 
                color: '#ffffff', 
                border: 'none',
                padding: '12px 20px'
              }}
            />
            <StyledButton variant="primary" theme={theme}>
              <FontAwesomeIcon icon={faSearch} />
            </StyledButton>
          </InputGroup>
        </Form>
      </div>
    </StyledCard>
  );
}

export default FriendsSearchComp;
