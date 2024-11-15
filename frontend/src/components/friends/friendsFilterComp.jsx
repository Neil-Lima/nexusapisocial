'use client';
import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { StyledCard, CategoryTag } from './styles/friendsStyle';
import { defaultCategories } from './utils/friendsUtil';
import { useTheme } from '@/context/ThemeContext';

function FriendsFilterComp({ selectedCategory, onCategoryChange }) {
  const { theme } = useTheme();

  return (
    <StyledCard className="mb-4">
      <Card.Body>
        <h5 className="mb-3">Filter Friends</h5>
        <div className="d-flex flex-wrap gap-2">
          {defaultCategories.map((category) => (
            <CategoryTag
              key={category}
              selected={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
              theme={theme}
            >
              {category}
            </CategoryTag>
          ))}
        </div>
      </Card.Body>
    </StyledCard>
  );
}

export default FriendsFilterComp;
