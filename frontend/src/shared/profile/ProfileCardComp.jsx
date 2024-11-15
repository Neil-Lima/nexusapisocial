'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { StyledProfileCard, GradientText, ProfileImage, ProfileDescription, ProfileLink } from './styles/ProfileCardStyles';
import { profileData } from './utils/ProfileCardUtils';

function ProfileCardComp() {
  const { theme } = useTheme();

  return (
    <StyledProfileCard className="text-center">
      <ProfileImage 
        variant="top" 
        src={profileData.imageUrl}
        alt={profileData.name}
      />
      <Card.Body>
        <Card.Title>
          <GradientText theme={theme}>{profileData.name}</GradientText>
        </Card.Title>
        <ProfileDescription>
          {profileData.description.prefix} <ProfileLink href={profileData.description.linkUrl}>{profileData.description.linkText}</ProfileLink>{profileData.description.suffix}
        </ProfileDescription>
      </Card.Body>
    </StyledProfileCard>
  );
}

export default ProfileCardComp;
