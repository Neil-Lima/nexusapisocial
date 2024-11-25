'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { CandidateCard, CandidateItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function JobsCandidatesComp() {
  const { theme } = useTheme();

  return (
    <CandidateCard theme={theme}>
      <h4>Candidatos</h4>
      {[1,2,3].map(candidate => (
        <CandidateItem key={candidate} theme={theme}>
          <img src={`/candidate-${candidate}.jpg`} alt="Candidate" />
          <div>
            <h5>João Silva</h5>
            <p>Desenvolvedor Frontend • 5 anos</p>
            <div className="actions">
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faComment} className="text-primary" />
              <FontAwesomeIcon icon={faCheck} className="text-success" />
            </div>
          </div>
          <Badge bg="primary">95% Match</Badge>
        </CandidateItem>
      ))}
    </CandidateCard>
  );
}
