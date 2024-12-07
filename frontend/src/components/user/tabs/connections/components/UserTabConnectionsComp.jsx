'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faComment } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ConnectionsContainer,
  ConnectionsGrid,
  ConnectionCard,
  ConnectionAvatar,
  ConnectionInfo,
  ConnectionName,
  ConnectionMeta,
  ConnectionActions,
  ActionButton
} from '../styles/UserTabConnectionsStyles';
import { useUserTabConnections } from '../utils/UserTabConnectionsUtils';

export default function UserTabConnectionsComp() {
  const { theme } = useTheme();
  const { connections, handleMessage, handleViewProfile } = useUserTabConnections();

  return (
    <ConnectionsContainer>
      <ConnectionsGrid>
        {connections.map((connection) => (
          <ConnectionCard key={connection.id} theme={theme}>
            <ConnectionAvatar src={connection.avatar} alt={connection.name} />
            <ConnectionInfo>
              <ConnectionName>{connection.name}</ConnectionName>
              <ConnectionMeta>
                <FontAwesomeIcon icon={faUserFriends} />
                {connection.mutualFriends} amigos em comum
              </ConnectionMeta>
              <ConnectionActions>
                <ActionButton onClick={() => handleMessage(connection.id)}>
                  <FontAwesomeIcon icon={faComment} /> Mensagem
                </ActionButton>
                <ActionButton onClick={() => handleViewProfile(connection.id)}>
                  Ver Perfil
                </ActionButton>
              </ConnectionActions>
            </ConnectionInfo>
          </ConnectionCard>
        ))}
      </ConnectionsGrid>
    </ConnectionsContainer>
  );
}
