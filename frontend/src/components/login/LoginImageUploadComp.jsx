'use client'

import React from 'react';
import { Form, Image } from 'react-bootstrap';
import { RiImageAddLine, RiImageEditLine } from 'react-icons/ri';
import { ImagePreviewContainer, CoverImageWrapper, ProfileImageWrapper, StyledButton } from './styles/LoginStyles';
import { useTheme } from '@/context/theme/ThemeContext';

function LoginImageUploadComp({ 
  profileImage, 
  coverImage, 
  handleImageUpload, 
  setProfileImage, 
  setCoverImage 
}) {
  const { theme } = useTheme();

  return (
    <ImagePreviewContainer>
      <CoverImageWrapper>
        <Image src={coverImage || '/default_cover.jpg'} fluid />
        <Form.Group>
          <StyledButton as="label" htmlFor="coverImageUpload" theme={theme}>
            <RiImageAddLine />
          </StyledButton>
          <Form.Control
            id="coverImageUpload"
            type="file"
            onChange={(event) => handleImageUpload(event, setCoverImage)}
            accept="image/*"
            hidden
          />
        </Form.Group>
      </CoverImageWrapper>
      <ProfileImageWrapper>
        <Image src={profileImage || '/default_profile.jpg'} roundedCircle />
        <Form.Group>
          <StyledButton as="label" htmlFor="profileImageUpload" theme={theme}>
            <RiImageEditLine />
          </StyledButton>
          <Form.Control
            id="profileImageUpload"
            type="file"
            onChange={(event) => handleImageUpload(event, setProfileImage)}
            accept="image/*"
            hidden
          />
        </Form.Group>
      </ProfileImageWrapper>
    </ImagePreviewContainer>
  );
}

export default LoginImageUploadComp;
