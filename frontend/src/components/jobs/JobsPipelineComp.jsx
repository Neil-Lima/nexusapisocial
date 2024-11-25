'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { PipelineCard, PipelineStage, CandidateCard } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCheck, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function JobsPipelineComp() {
  const { theme } = useTheme();

  const stages = [
    {
      title: 'Applied',
      candidates: [
        { id: 1, name: 'João Silva', role: 'Frontend Developer', matchScore: 95 },
        { id: 2, name: 'Maria Santos', role: 'UX Designer', matchScore: 88 }
      ]
    },
    {
      title: 'Screening',
      candidates: [
        { id: 3, name: 'Pedro Costa', role: 'Backend Developer', matchScore: 92 }
      ]
    },
    {
      title: 'Interview',
      candidates: [
        { id: 4, name: 'Ana Lima', role: 'Full Stack Developer', matchScore: 97 }
      ]
    },
    {
      title: 'Offer',
      candidates: [
        { id: 5, name: 'Lucas Mendes', role: 'DevOps Engineer', matchScore: 94 }
      ]
    }
  ];

  return (
    <PipelineCard theme={theme}>
      <h4>Hiring Pipeline</h4>
      <div className="pipeline-stages">
        {stages.map((stage, index) => (
          <PipelineStage key={index} theme={theme}>
            <div className="stage-header">
              <h5>{stage.title}</h5>
              <span className="candidate-count">{stage.candidates.length}</span>
            </div>
            <div className="stage-content">
              {stage.candidates.map(candidate => (
                <CandidateCard key={candidate.id} theme={theme}>
                  <div className="candidate-info">
                    <FontAwesomeIcon icon={faUserCircle} className="candidate-avatar" />
                    <div>
                      <h6>{candidate.name}</h6>
                      <p>{candidate.role}</p>
                      <span className="match-score">{candidate.matchScore}% Match</span>
                    </div>
                  </div>
                  <div className="candidate-actions">
                    <button className="approve">
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="reject">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <button className="more">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                  </div>
                </CandidateCard>
              ))}
            </div>
          </PipelineStage>
        ))}
      </div>
    </PipelineCard>
  );
}
