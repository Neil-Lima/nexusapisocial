'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import NotificationsItemComp from './NotificationsItemComp';
import { NotificationsList, DateDivider, LoadingSpinner } from './styles/NotificationsStyle';
import { groupNotificationsByDate } from './utils/NotificationsUtils';

export default function NotificationsListComp({ notifications, loading, setNotifications }) {
  const { theme } = useTheme();
  const groupedNotifications = groupNotificationsByDate(notifications);

  if (loading) {
    return <LoadingSpinner theme={theme} />;
  }

  return (
    <NotificationsList theme={theme}>
      {Object.entries(groupedNotifications).map(([date, items]) => (
        <div key={date}>
          <DateDivider theme={theme}>{date}</DateDivider>
          {items.map((notification) => (
            <NotificationsItemComp 
              key={notification.id} 
              notification={notification}
              setNotifications={setNotifications}
            />
          ))}
        </div>
      ))}
    </NotificationsList>
  );
}
