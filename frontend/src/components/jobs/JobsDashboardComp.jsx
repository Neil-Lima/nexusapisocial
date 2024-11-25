'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { DashboardCard, StatItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBriefcase, faUsers, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function JobsDashboardComp() {
  const { theme } = useTheme();

  const stats = [
    { icon: faBriefcase, label: 'Vagas Ativas', value: '24' },
    { icon: faUsers, label: 'Candidaturas', value: '156' },
    { icon: faBookmark, label: 'Vagas Salvas', value: '12' },
    { icon: faChartLine, label: 'Visualizações', value: '1.2K' }
  ];

  return (
    <DashboardCard theme={theme}>
      <h4>Dashboard</h4>
      <Row>
        {stats.map((stat, index) => (
          <Col md={3} key={index}>
            <StatItem theme={theme}>
              <div className="icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </StatItem>
          </Col>
        ))}
      </Row>
    </DashboardCard>
  );
}
