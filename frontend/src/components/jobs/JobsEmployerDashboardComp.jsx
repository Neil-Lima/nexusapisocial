'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { EmployerCard, MetricBox, ActivityFeed } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faCheckCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function JobsEmployerDashboardComp() {
  const { theme } = useTheme();

  const metrics = [
    { icon: faUsers, label: 'Total Candidates', value: '1,234', trend: '+15%' },
    { icon: faFileAlt, label: 'Active Jobs', value: '45', trend: '+5%' },
    { icon: faCheckCircle, label: 'Hired', value: '28', trend: '+12%' },
    { icon: faChartLine, label: 'Response Rate', value: '85%', trend: '+8%' }
  ];

  const recentActivity = [
    { type: 'application', content: 'New application for Senior Developer position', time: '5m ago' },
    { type: 'interview', content: 'Interview scheduled with Maria Silva', time: '1h ago' },
    { type: 'hire', content: 'João Santos accepted the job offer', time: '2h ago' }
  ];

  return (
    <EmployerCard theme={theme}>
      <h4>Employer Dashboard</h4>
      <Row className="metrics-row">
        {metrics.map((metric, index) => (
          <Col md={3} key={index}>
            <MetricBox theme={theme}>
              <FontAwesomeIcon icon={metric.icon} />
              <div>
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
                <span className="trend">{metric.trend}</span>
              </div>
            </MetricBox>
          </Col>
        ))}
      </Row>
      <ActivityFeed theme={theme}>
        <h5>Recent Activity</h5>
        {recentActivity.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className={`activity-icon ${activity.type}`}>
              <FontAwesomeIcon icon={
                activity.type === 'application' ? faFileAlt :
                activity.type === 'interview' ? faUsers :
                faCheckCircle
              } />
            </div>
            <div className="activity-content">
              <p>{activity.content}</p>
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </ActivityFeed>
    </EmployerCard>
  );
}
