'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { JobCard, JobHeader, CompanyLogo, JobInfo } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faClock, faDollarSign, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function JobsCardComp({ job }) {
  const { theme } = useTheme();

  return (
    <JobCard theme={theme}>
      <JobHeader theme={theme}>
        <div className="d-flex align-items-center">
          <CompanyLogo src="/company-logo.png" alt="Company Logo" />
          <JobInfo theme={theme}>
            <h4>Desenvolvedor Frontend</h4>
            <p>TechCorp</p>
            <div className="d-flex gap-3">
              <span><FontAwesomeIcon icon={faMapMarker} /> São Paulo, SP</span>
              <span><FontAwesomeIcon icon={faClock} /> Full-time</span>
              <span><FontAwesomeIcon icon={faDollarSign} /> R$ 8-12k</span>
            </div>
          </JobInfo>
        </div>
        <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
      </JobHeader>
      <div className="p-3">
        <div className="d-flex gap-2 flex-wrap">
          <Badge bg="primary">React</Badge>
          <Badge bg="primary">TypeScript</Badge>
          <Badge bg="primary">Node.js</Badge>
        </div>
      </div>
    </JobCard>
  );
}
