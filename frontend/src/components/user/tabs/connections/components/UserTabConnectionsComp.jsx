'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faComment } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ConnectionsContainer,
} from '../styles/UserTabConnectionsStyles';
import { useUserTabConnections } from '../utils/UserTabConnectionsUtils';
import FriendsListComp from '@/components/friends/list/components/FriendsListComp';

export default function UserTabConnectionsComp() {
  const { theme } = useTheme();
  const { connections, handleMessage, handleViewProfile } = useUserTabConnections();

  return (
    <ConnectionsContainer>
      <FriendsListComp/>
    </ConnectionsContainer>
  );
}
