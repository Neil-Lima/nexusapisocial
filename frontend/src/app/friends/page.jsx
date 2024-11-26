'use client';
import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import FriendsMainComp from '@/components/friends/components/FriendsMainComp';

export default function FriendsPage() {
  return (
    <ThemeProvider>
      <FriendsMainComp />
    </ThemeProvider>
  );
}
