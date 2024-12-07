'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@/context/theme/ThemeContext';
import { TabsContainer, TabButton, TabContent } from '../styles/UserTabsStyles';
import { useUserTabs } from '../utils/UserTabsUtils';

function UserTabsComp() {
  const { theme } = useTheme();
  const { activeTab, tabs, handleTabChange, renderTabContent } = useUserTabs();

  return (
    <div>
      <TabsContainer theme={theme}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            theme={theme}
          >
            <FontAwesomeIcon icon={tab.icon} />
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>
      <TabContent>
        {renderTabContent()}
      </TabContent>
    </div>
  );
}

export default UserTabsComp;
