'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import DatingMainComp from '@/components/dating/DatingMainComp';
import { GradientBackground, Container } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function DatingPage() {
  const { theme } = useTheme();

  return (
    <GradientBackground theme={theme}>
      <NavMenuComp />
      <Container theme={theme}>
        <DatingMainComp />
      </Container>
    </GradientBackground>
  );
}
