'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { ApplicationCard, ApplicationItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function JobsApplicationsComp() {
  const { theme } = useTheme();

  return (
    <ApplicationCard theme={theme}>
      <h4>Minhas Candidaturas</h4>
      {[1,2,3].map(app => (
        <ApplicationItem key={app} theme={theme}>
          <div className="company-info">
            <FontAwesomeIcon icon={faBuilding} />
            <div>
              <h5>Desenvolvedor Frontend</h5>
              <p>TechCorp</p>
            </div>
          </div>
          <div className="application-status">
            <Badge bg="primary">Em Análise</Badge>
            <span><FontAwesomeIcon icon={faCalendar} /> 15/03/2024</span>
          </div>
        </ApplicationItem>
      ))}
    </ApplicationCard>
  );
}
