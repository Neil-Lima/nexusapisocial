'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { StatsCard, StatGrid, StatChart } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export default function JobsStatsAdvancedComp() {
  const { theme } = useTheme();

  const stats = {
    applications: {
      total: 156,
      trend: '+23%',
      data: [30, 45, 28, 53]
    },
    interviews: {
      total: 42,
      trend: '+15%',
      data: [8, 12, 10, 12]
    },
    offers: {
      total: 8,
      trend: '+33%',
      data: [1, 2, 2, 3]
    },
    responseRate: {
      total: '85%',
      trend: '+5%',
      data: [75, 80, 82, 85]
    }
  };

  return (
    <StatsCard theme={theme}>
      <h4>Advanced Analytics</h4>
      <StatGrid theme={theme}>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="stat-item">
            <div className="stat-header">
              <FontAwesomeIcon icon={
                key === 'applications' ? faUsers :
                key === 'interviews' ? faClock :
                key === 'offers' ? faCheckCircle :
                faChartLine
              } />
              <div className="stat-info">
                <h3>{value.total}</h3>
                <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <span className="trend">{value.trend}</span>
              </div>
            </div>
            <StatChart theme={theme}>
              {value.data.map((point, index) => (
                <div 
                  key={index}
                  className="chart-bar"
                  style={{ height: `${(point/Math.max(...value.data))*100}%` }}
                >
                  <span className="tooltip">{point}</span>
                </div>
              ))}
            </StatChart>
          </div>
        ))}
      </StatGrid>
      <div className="time-filter">
        <button className="active">Week</button>
        <button>Month</button>
        <button>Quarter</button>
        <button>Year</button>
      </div>
    </StatsCard>
  );
}
