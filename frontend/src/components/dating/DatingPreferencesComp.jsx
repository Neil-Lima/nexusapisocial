"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useDating } from "./utils/DatingUtils";
import {
  PreferencesContainer,
  PreferenceSection,
  PreferenceToggle,
  PreferenceSlider,
} from "./styles/DatingStyles";

function DatingPreferencesComp() {
  const { theme } = useTheme();
  const {
    preferences,
    handlePreferenceChange,
    handlePrivacyToggle,
    handleNotificationToggle,
  } = useDating();

  return (
    <PreferencesContainer theme={theme}>
      <PreferenceSection theme={theme}>
        <h3>Discovery Settings</h3>
        <PreferenceToggle
          checked={preferences.showMe}
          onChange={() => handlePreferenceChange("showMe")}
          theme={theme}
        >
          Show me on Dating
        </PreferenceToggle>
        <PreferenceSlider
          value={preferences.maxDistance}
          onChange={(e) =>
            handlePreferenceChange("maxDistance", e.target.value)
          }
          theme={theme}
        />
        <PreferenceSlider
          label="Age Range"
          value={preferences.ageRange}
          onChange={(value) => handlePreferenceChange("ageRange", value)}
          min={18}
          max={100}
          theme={theme}
        />
      </PreferenceSection>

      <PreferenceSection theme={theme}>
        <h3>Privacy Settings</h3>
        <PreferenceToggle
          checked={preferences.showOnline}
          onChange={handlePrivacyToggle}
          theme={theme}
        >
          Show Online Status
        </PreferenceToggle>
        <PreferenceToggle
          checked={preferences.showLastSeen}
          onChange={handlePrivacyToggle}
          theme={theme}
        >
          Show Last Seen
        </PreferenceToggle>
      </PreferenceSection>

      <PreferenceSection theme={theme}>
        <h3>Notifications</h3>
        <PreferenceToggle
          checked={preferences.newMatches}
          onChange={handleNotificationToggle}
          theme={theme}
        >
          New Matches
        </PreferenceToggle>
        <PreferenceToggle
          checked={preferences.messages}
          onChange={handleNotificationToggle}
          theme={theme}
        >
          Messages
        </PreferenceToggle>
        <PreferenceToggle
          checked={preferences.superLikes}
          onChange={handleNotificationToggle}
          theme={theme}
        >
          Super Likes
        </PreferenceToggle>
      </PreferenceSection>
    </PreferencesContainer>
  );
}

export default DatingPreferencesComp;
