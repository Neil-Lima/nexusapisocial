'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ScreeningCard, CandidateScreening } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function JobsScreeningComp() {
  const { theme } = useTheme();

  const screeningCriteria = [
    {
      candidate: {
        name: 'João Silva',
        role: 'Senior Frontend Developer'
      },
      criteria: [
        { name: 'Experience', status: 'pass', value: '8 years' },
        { name: 'Technical Skills', status: 'pass', value: '95% match' },
        { name: 'Education', status: 'pass', value: 'Computer Science' },
        { name: 'Location', status: 'warning', value: 'Different city' },
        { name: 'Salary Range', status: 'pass', value: 'Within range' }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pass':
        return <FontAwesomeIcon icon={faCheckCircle} className="status-pass" />;
      case 'fail':
        return <FontAwesomeIcon icon={faTimesCircle} className="status-fail" />;
      default:
        return <FontAwesomeIcon icon={faQuestionCircle} className="status-warning" />;
    }
  };

  return (
    <ScreeningCard theme={theme}>
      <h4>Candidate Screening</h4>
      {screeningCriteria.map((screening, index) => (
        <CandidateScreening key={index} theme={theme}>
          <div className="candidate-header">
            <h5>{screening.candidate.name}</h5>
            <p>{screening.candidate.role}</p>
          </div>
          <div className="criteria-list">
            {screening.criteria.map((criterion, idx) => (
              <div key={idx} className="criterion-item">
                <div className="criterion-name">
                  {criterion.name}
                </div>
                <div className="criterion-value">
                  {criterion.value}
                </div>
                <div className="criterion-status">
                  {getStatusIcon(criterion.status)}
                </div>
              </div>
            ))}
          </div>
        </CandidateScreening>
      ))}
    </ScreeningCard>
  );
}
