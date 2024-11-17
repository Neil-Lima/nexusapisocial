'use client';
import React from 'react';
import { Card, Badge, Dropdown } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientText, IconWrapper } from '@/styles/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faCheck, 
  faCog, 
  faDownload, 
  faTrash 
} from '@fortawesome/free-solid-svg-icons';
import { 
  StyledCard, 
  HeaderTitle, 
  HeaderActions,
  NotificationBadge,
  SettingsButton 
} from './styles/NotificationsStyle';

export default function NotificationsHeaderComp({ unreadCount, onMarkAllRead }) {
  const { theme } = useTheme();

  return (
    <StyledCard theme={theme}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <HeaderTitle>
          <IconWrapper theme={theme}>
            <FontAwesomeIcon icon={faBell} />
            {unreadCount > 0 && (
              <NotificationBadge theme={theme}>
                {unreadCount}
              </NotificationBadge>
            )}
          </IconWrapper>
          <div>
            <GradientText theme={theme}>Notifications</GradientText>
            <div className="text-muted small">
              Stay updated with all your activities
            </div>
          </div>
        </HeaderTitle>
        
        <HeaderActions>
          <SettingsButton onClick={onMarkAllRead} theme={theme}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Mark all as read</span>
          </SettingsButton>

          <Dropdown align="end">
            <Dropdown.Toggle as={SettingsButton} theme={theme}>
              <FontAwesomeIcon icon={faCog} />
              <span>Settings</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Export Notifications
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrash} className="me-2" />
                Clear All
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </HeaderActions>
      </Card.Body>
    </StyledCard>
  );
}
