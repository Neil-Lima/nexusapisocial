'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { MatchCard, MatchList } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function JobsMatchesComp() {
  const { theme } = useTheme();

  return (
    <MatchList theme={theme}>
      {[1,2,3].map(match => (
        <MatchCard key={match} theme={theme}>
          <div className="match-info">
            <img src="/company-logo.png" alt="Company" />
            <div>
              <h5>Desenvolvedor Frontend</h5>
              <p>TechCorp</p>
              <Badge bg="success">95% Match</Badge>
            </div>
          </div>
          <div className="match-actions">
            <button className="accept">
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="reject">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </MatchCard>
      ))}
    </MatchList>
  );
}
