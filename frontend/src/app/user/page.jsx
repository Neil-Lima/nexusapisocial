'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';
import UserMainComp from '@/components/user/main/components/UserMainComp';

export default function UserPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <UserMainComp />
      </GradientBackground>
    </>
  );
}
