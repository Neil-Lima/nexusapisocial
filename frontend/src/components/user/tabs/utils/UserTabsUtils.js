'use client';
import { useState } from 'react';
import { 
  faNewspaper, 
  faUser, 
  faUsers, 
  faImage, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import UserTabPostsComp from '../posts/components/UserTabPostsComp';
import UserTabAboutComp from '../about/components/UserTabAboutComp';
import UserTabConnectionsComp from '../connections/components/UserTabConnectionsComp';
import UserTabMediaComp from '../media/components/UserTabMediaComp';
import UserInterestsComp from '../interests/components/UserInterestsComp';


export const useUserTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', label: 'Postagens', icon: faNewspaper },
    { id: 'about', label: 'Sobre', icon: faUser },
    { id: 'connections', label: 'Conexões', icon: faUsers },
    { id: 'media', label: 'Mídia', icon: faImage },
    { id: 'interests', label: 'Interesses', icon: faHeart }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return <UserTabPostsComp />;
      case 'about':
        return <UserTabAboutComp />;
      case 'connections':
        return <UserTabConnectionsComp />;
      case 'media':
        return <UserTabMediaComp />;
      case 'interests':
        return <UserInterestsComp />;
      default:
        return <UserTabPostsComp />;
    }
  };

  return {
    activeTab,
    handleTabChange,
    tabs,
    renderTabContent
  };
};
