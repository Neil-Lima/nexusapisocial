'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/NavMenuComp';
import GalleryPhotoMainComp from '@/shared/gallery/photos/components/GalleryPhotoMainComp';

export default function GalleryPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <GalleryPhotoMainComp />
      </GradientBackground>
    </>
  );
}
