'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { useUserHeader } from '../utils/UserHeaderUtils';
import {
  HeaderCard,
  HeaderBanner,
  ProfileImage,
  ProfileTitle,
  ProfileDescription
} from '../styles/UserHeaderStyles';

export default function UserHeaderComp() {
  const { theme } = useTheme();
  const { headerData } = useUserHeader();
  
  return (
    <HeaderCard theme={theme}>
      <HeaderBanner src={headerData.bannerUrl} alt="Banner" />
      <Card.Body>
        <ProfileImage src={headerData.profileUrl} alt={headerData.name} />
        <ProfileTitle>{headerData.name}</ProfileTitle>
        <ProfileDescription theme={theme}>
          {headerData.description}
        </ProfileDescription>
      </Card.Body>
    </HeaderCard>
  );
}
