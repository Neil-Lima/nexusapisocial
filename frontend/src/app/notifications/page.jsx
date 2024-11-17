'use client';
import React from 'react';
import NotificationsMainComp from '@/components/notifications/NotificationsMainComp';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function NotificationsPage() {
  return (
    <>
      <NavMenuComp />
      <NotificationsMainComp />
    </>
  );
}
