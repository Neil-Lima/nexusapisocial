'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  VideoCallContainer,
  VideoGrid,
  VideoFrame,
  CallControls,
  ControlButton
} from './styles/MessagesStyle';
import { useTheme } from '@/context/ThemeContext';

function MessagesVideoCallComp({ contact, onEndCall }) {
  const { theme } = useTheme();

  return (
    <VideoCallContainer theme={theme}>
      <VideoGrid>
        <VideoFrame data-main="true">
          <img src={contact?.avatar} alt={contact?.name} />
          <span>{contact?.name}</span>
        </VideoFrame>
        <VideoFrame>
          <img src="/your-avatar.jpg" alt="You" />
          <span>You</span>
        </VideoFrame>
      </VideoGrid>

      <CallControls>
        <ControlButton theme={theme}>
          <FontAwesomeIcon icon={faMicrophone} />
        </ControlButton>
        <ControlButton theme={theme}>
          <FontAwesomeIcon icon={faVideo} />
        </ControlButton>
        <ControlButton onClick={onEndCall} danger theme={theme}>
          <FontAwesomeIcon icon={faPhone} />
        </ControlButton>
      </CallControls>
    </VideoCallContainer>
  );
}

export default MessagesVideoCallComp;
