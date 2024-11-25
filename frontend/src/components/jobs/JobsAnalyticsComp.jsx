'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { AnalyticsCard, MetricItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserCheck, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function JobsAnalyticsComp() {
  const { theme } = useTheme();

  const metrics = [
    { icon: faEye, label: 'Visualizações', value: '2.5K', growth: '+15%' },
    { icon: faUserCheck, label: 'Candidaturas', value: '456', growth: '+23%' },
    { icon: faCalendarCheck, label: 'Entrevistas', value: '48', growth: '+8%' }
  ];

  return (
    <AnalyticsCard theme={theme}>
      <h4>Analytics</h4>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricItem key={index} theme={theme}>
            <FontAwesomeIcon icon={metric.icon} />
            <div>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
              <span className="growth">{metric.growth}</span>
            </div>
          </MetricItem>
        ))}
      </div>
    </AnalyticsCard>
  );
}
