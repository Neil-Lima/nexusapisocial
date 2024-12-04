"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { GradientBackground } from "@/styles/GlobalStyles";
import NotificationsMainComp from "@/components/notifications/components/NotificationsMainComp";
import NavMenuComp from "@/shared/navbar/NavMenuComp";

export default function NotificationsPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <NotificationsMainComp />
      </GradientBackground>
    </>
  );
}
