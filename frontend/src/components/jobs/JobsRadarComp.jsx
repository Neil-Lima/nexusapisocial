'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { RadarCard, JobMatch, MatchScore } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBuilding, faBriefcase, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function JobsRadarComp() {
  const { theme } = useTheme();

  const matchedJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      matchScore: 95,
      skills: ['React', 'TypeScript', 'Node.js'],
      salary: 'R$ 15-20k',
      location: 'Remote'
    },
    {
      id: 2,
      title: 'Tech Lead',
      company: 'InnovateLabs',
      matchScore: 92,
      skills: ['React', 'AWS', 'Team Leadership'],
      salary: 'R$ 18-25k',
      location: 'São Paulo'
    },
    {
      id: 3,
      title: 'Frontend Architect',
      company: 'DevStudio',
      matchScore: 88,
      skills: ['React', 'System Design', 'Architecture'],
      salary: 'R$ 20-30k',
      location: 'Hybrid'
    }
  ];

  return (
    <RadarCard theme={theme}>
      <h4><FontAwesomeIcon icon={faBullseye} /> Job Radar</h4>
      <div className="matches-container">
        {matchedJobs.map(job => (
          <JobMatch key={job.id} theme={theme}>
            <MatchScore score={job.matchScore}>
              {job.matchScore}%
            </MatchScore>
            <div className="job-info">
              <h5>{job.title}</h5>
              <p><FontAwesomeIcon icon={faBuilding} /> {job.company}</p>
              <div className="job-details">
                <span><FontAwesomeIcon icon={faBriefcase} /> {job.salary}</span>
                <span><FontAwesomeIcon icon={faChartLine} /> {job.location}</span>
              </div>
              <div className="skills">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </JobMatch>
        ))}
      </div>
    </RadarCard>
  );
}
