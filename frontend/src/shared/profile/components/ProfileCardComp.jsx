"use client";
import React from "react";
import { Card } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import {
  StyledProfileCard,
  ProfileImage,
  ProfileDescription,
  ProfileLink
} from "../styles/ProfileCardStyles";
import { profileData } from "../utils/ProfileCardUtils";

function ProfileCardComp() {
  const { theme } = useTheme();

  return (
    <StyledProfileCard theme={theme}>
      <img style={{width: 336}} src={profileData.coverUrl} />
      <Card.Body>
        <img 
          style={{marginTop: -80, width: '55%', border: '6px solid rgb(255,255,255)'}} 
          src={profileData.imageUrl}
          alt={profileData.name}
        />
        <h4>{profileData.name}</h4>
        <ProfileDescription theme={theme}>
          {profileData.description.prefix} <ProfileLink href={profileData.description.linkUrl}>{profileData.description.linkText}</ProfileLink>{profileData.description.suffix}
        </ProfileDescription>
      </Card.Body>
    </StyledProfileCard>
  );
}

export default ProfileCardComp;
