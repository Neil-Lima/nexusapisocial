'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import MessagesMainComp from '@/components/messages/main/components/MessagesMainComp';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function MessagesPage() {
  const { theme } = useTheme();
  
  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <MessagesMainComp />
      </GradientBackground>
    </>
  );
}
