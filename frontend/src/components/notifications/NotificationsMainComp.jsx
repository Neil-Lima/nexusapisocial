'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NotificationsHeaderComp from './NotificationsHeaderComp';
import NotificationsFilterComp from './NotificationsFilterComp';
import NotificationsListComp from './NotificationsListComp';
import ProfileCardComp from '@/shared/profile/ProfileCardComp';
import MenuListComp from '@/shared/menu/MenuListComp';
import { getNotifications } from './utils/NotificationsUtils';

export default function NotificationsMainComp() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotifications = async () => {
      setLoading(true);
      const data = await getNotifications(filter, sortBy);
      setNotifications(data);
      setLoading(false);
    };

    loadNotifications();
  }, [filter, sortBy]);

  const handleMarkAllRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, unread: false }))
    );
  };

  return (
    <GradientBackground theme={theme}>
      <Container>
        <Row>
          <Col lg={2}>
            <ProfileCardComp />
            <MenuListComp />
          </Col>
          <Col lg={9}>
            <NotificationsHeaderComp 
              unreadCount={notifications.filter(n => n.unread).length}
              onMarkAllRead={handleMarkAllRead}
            />
            <NotificationsFilterComp 
              filter={filter}
              setFilter={setFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <NotificationsListComp 
              notifications={notifications}
              loading={loading}
              setNotifications={setNotifications}
            />
          </Col>
        </Row>
      </Container>
    </GradientBackground>
  );
}
