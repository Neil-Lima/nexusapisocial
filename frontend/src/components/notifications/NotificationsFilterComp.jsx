'use client';
import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faComment, 
  faAt, 
  faBell, 
  faUserPlus,
  faSort
} from '@fortawesome/free-solid-svg-icons';
import { 
  FilterContainer, 
  FilterButton,
  SortMenu,
  SortMenuItem,
  CategoryBadge,
  SortButton 
} from './styles/NotificationsStyle';

export default function NotificationsFilterComp({ 
  filter, 
  setFilter, 
  sortBy, 
  setSortBy,
  notificationCounts 
}) {
  const { theme } = useTheme();
  const [showSortMenu, setShowSortMenu] = useState(false);

  const categories = [
    { 
      id: 'all', 
      label: 'Todas', 
      icon: faBell, 
      color: '#5f27cd',
      count: notificationCounts?.total || 0
    },
    { 
      id: 'likes', 
      label: 'Curtidas', 
      icon: faHeart, 
      color: '#ff4757',
      count: notificationCounts?.likes || 0
    },
    { 
      id: 'comments', 
      label: 'Comentários', 
      icon: faComment, 
      color: '#2e86de',
      count: notificationCounts?.comments || 0
    },
    { 
      id: 'mentions', 
      label: 'Menções', 
      icon: faAt, 
      color: '#ffa502',
      count: notificationCounts?.mentions || 0
    },
    { 
      id: 'follows', 
      label: 'Seguidores', 
      icon: faUserPlus, 
      color: '#2ed573',
      count: notificationCounts?.follows || 0
    }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'oldest', label: 'Mais Antigas' },
    { value: 'unread', label: 'Não Lidas Primeiro' }
  ];

  return (
    <FilterContainer theme={theme}>
      <div className="filter-content">
        <ButtonGroup className="filter-buttons">
          {categories.map(category => (
            <FilterButton
            key={category.id}
            $active={filter === category.id}
            onClick={() => setFilter(category.id)}
            theme={theme}
          >
          
              <FontAwesomeIcon 
                icon={category.icon} 
                style={{ color: category.color }}
              />
              <span>{category.label}</span>
              {category.count > 0 && (
                <CategoryBadge color={category.color}>
                  {category.count}
                </CategoryBadge>
              )}
            </FilterButton>
          ))}
        </ButtonGroup>

        <div className="sort-container">
          <SortButton 
            theme={theme}
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <FontAwesomeIcon icon={faSort} />
            <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
          </SortButton>

          {showSortMenu && (
            <SortMenu theme={theme}>
              {sortOptions.map(option => (
                <SortMenuItem
                  key={option.value}
                  active={sortBy === option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setShowSortMenu(false);
                  }}
                  theme={theme}
                >
                  {option.label}
                </SortMenuItem>
              ))}
            </SortMenu>
          )}
        </div>
      </div>
    </FilterContainer>
  );
}
