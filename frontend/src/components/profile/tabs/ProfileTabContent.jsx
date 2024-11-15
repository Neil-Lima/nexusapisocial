'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import ProfileAboutComp from './about/ProfileAboutComp';
import ProfilePostsComp from './posts/ProfilePostsComp';
import ProfileGalleryComp from './gallery/ProfileGalleryComp';
import ProfileConnectionsComp from './connections/ProfileConnectionsComp';
import ProfileAchievementsComp from './achievements/ProfileAchievementsComp';
import ProfileEventsComp from './events/ProfileEventsComp';

const ProfileTabContent = ({ activeTab, profileData }) => {
  const { theme } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <ProfileAboutComp profile={profileData} />;
      case 'posts':
        return <ProfilePostsComp posts={profileData.posts} />;
      case 'gallery':
        return <ProfileGalleryComp photos={profileData.photos} videos={profileData.videos} />;
      case 'connections':
        return <ProfileConnectionsComp connections={profileData.connections} />;
      case 'achievements':
        return <ProfileAchievementsComp achievements={profileData.achievements} />;
      case 'events':
        return <ProfileEventsComp events={profileData.events} />;
      default:
        return null;
    }
  };

  return renderContent();
};

export default ProfileTabContent;
