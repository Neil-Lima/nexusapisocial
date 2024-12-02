'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { DetailCard, CompanyInfo, JobDescription } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarker, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function JobsDetailsComp() {
  const { theme } = useTheme();

  return (
    <DetailCard theme={theme}>
      <CompanyInfo theme={theme}>
        <img src="/company-logo.png" alt="Company Logo" />
        <div>
          <h3>Desenvolvedor Frontend</h3>
          <p><FontAwesomeIcon icon={faBuilding} /> TechCorp</p>
          <div className="d-flex gap-3">
            <span><FontAwesomeIcon icon={faMapMarker} /> São Paulo, SP</span>
            <span><FontAwesomeIcon icon={faClock} /> Full-time</span>
            <span><FontAwesomeIcon icon={faDollarSign} /> R$ 8-12k</span>
          </div>
        </div>
      </CompanyInfo>

      <JobDescription theme={theme}>
        <h4>Descrição da Vaga</h4>
        <p>Estamos procurando um desenvolvedor frontend experiente...</p>
        
        <h4>Requisitos</h4>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>

        <h4>Benefícios</h4>
        <div className="d-flex gap-2 flex-wrap">
          <Badge bg="secondary">Vale Refeição</Badge>
          <Badge bg="secondary">Plano de Saúde</Badge>
          <Badge bg="secondary">Gympass</Badge>
        </div>
      </JobDescription>
    </DetailCard>
  );
}
