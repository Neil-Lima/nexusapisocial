'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { Card, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faStar, faAward, faGem, faMedal } from '@fortawesome/free-solid-svg-icons';
import { AchievementCard, AchievementItem } from './styles/JobsStyles';

export default function JobsAchievementsComp() {
  const { theme } = useTheme();

  const achievements = [
    { icon: faTrophy, title: 'Master Applicant', progress: 80, total: 100, description: 'Applied to 100 matching positions' },
    { icon: faStar, title: 'Interview Pro', progress: 45, total: 50, description: 'Completed 50 successful interviews' },
    { icon: faAward, title: 'Skill Champion', progress: 25, total: 30, description: 'Verified 30 technical skills' },
    { icon: faGem, title: 'Network Builder', progress: 120, total: 150, description: 'Made 150 professional connections' },
    { icon: faMedal, title: 'Profile Perfect', progress: 90, total: 100, description: 'Profile completion score' }
  ];

  return (
    <AchievementCard theme={theme}>
      <h4>Career Achievements</h4>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} theme={theme}>
            <FontAwesomeIcon icon={achievement.icon} className="achievement-icon" />
            <div className="achievement-info">
              <h5>{achievement.title}</h5>
              <p>{achievement.description}</p>
              <ProgressBar 
                now={achievement.progress} 
                max={achievement.total}
                label={`${achievement.progress}/${achievement.total}`}
              />
            </div>
          </AchievementItem>
        ))}
      </div>
    </AchievementCard>
  );
}
