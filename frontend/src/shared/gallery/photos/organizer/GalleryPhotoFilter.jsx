'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FilterContainer, FilterButton } from '../styles/GalleryPhotoStyles';

function GalleryPhotoFilter({ filterOptions, currentFilter, onFilterChange }) {
  const { theme } = useTheme();

  return (
    <FilterContainer theme={theme}>
      {filterOptions.map((option) => (
        <FilterButton
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          $active={currentFilter === option.id}
          theme={theme}
        >
          <FontAwesomeIcon icon={faFilter} />
          {option.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

export default GalleryPhotoFilter;
