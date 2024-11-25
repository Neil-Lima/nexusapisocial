"use client";
import { useTheme } from "@/context/ThemeContext";
import JobsMainComp from "@/components/jobs/JobsMainComp";
import { GradientBackground } from "@/styles/GlobalStyles";
import NavMenuComp from "@/shared/navbar/NavMenuComp";

export default function JobsPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <JobsMainComp />
      </GradientBackground>
    </>
  );
}
