'use client';
import { format, isToday, isYesterday, isThisWeek } from 'date-fns';

export const getNotifications = async (filter, sortBy) => {
  // Simulated API call
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'Naruto Uzumaki',
      avatar: 'https://picsum.photos/50/50?random=1',
      action: 'liked your post',
      time: new Date().toISOString(),
      unread: true,
      preview: 'Check out my new Rasengan technique! 🌀'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Sasuke Uchiha',
      avatar: 'https://picsum.photos/50/50?random=2',
      action: 'commented on your photo',
      time: new Date(Date.now() - 3600000).toISOString(),
      unread: true,
      preview: 'Nice technique, but my Chidori is still stronger! ⚡'
    },
    {
      id: 3,
      type: 'mention',
      user: 'Sakura Haruno',
      avatar: 'https://picsum.photos/50/50?random=3',
      action: 'mentioned you in a comment',
      time: new Date(Date.now() - 86400000).toISOString(),
      unread: false,
      preview: 'Hey @Naruto and @Sasuke, training session tomorrow?'
    },
    {
      id: 4,
      type: 'follow',
      user: 'Kakashi Sensei',
      avatar: 'https://picsum.photos/50/50?random=4',
      action: 'started following you',
      time: new Date(Date.now() - 172800000).toISOString(),
      unread: false
    },
    {
      id: 5,
      type: 'system',
      user: 'Ninja Network',
      avatar: 'https://picsum.photos/50/50?random=5',
      action: 'Your account has been verified',
      time: new Date(Date.now() - 259200000).toISOString(),
      unread: true
    }
  ];

  // Apply filters
  let filtered = [...notifications];
  
  if (filter !== 'all') {
    filtered = filtered.filter(n => n.type === filter);
  }

  // Apply sorting
  switch (sortBy) {
    case 'oldest':
      filtered.sort((a, b) => new Date(a.time) - new Date(b.time));
      break;
    case 'unread':
      filtered.sort((a, b) => (b.unread ? 1 : 0) - (a.unread ? 1 : 0));
      break;
    default: // newest
      filtered.sort((a, b) => new Date(b.time) - new Date(a.time));
  }

  return filtered;
};

export const groupNotificationsByDate = (notifications) => {
  const groups = {};
  
  notifications.forEach(notification => {
    const date = new Date(notification.time);
    let groupKey;

    if (isToday(date)) {
      groupKey = 'Today';
    } else if (isYesterday(date)) {
      groupKey = 'Yesterday';
    } else if (isThisWeek(date)) {
      groupKey = 'This Week';
    } else {
      groupKey = format(date, 'MMMM d, yyyy');
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(notification);
  });

  return groups;
};

export const markAsRead = (notificationId, notifications) => {
  return notifications.map(notification =>
    notification.id === notificationId
      ? { ...notification, unread: false }
      : notification
  );
};

export const getUnreadCount = (notifications) => {
  return notifications.filter(n => n.unread).length;
};

