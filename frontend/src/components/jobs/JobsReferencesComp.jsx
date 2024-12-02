'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ReferencesCard, ReferenceItem } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBuilding, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function JobsReferencesComp() {
  const { theme } = useTheme();

  const references = [
    {
      id: 1,
      name: 'Carlos Mendes',
      position: 'Tech Lead',
      company: 'TechCorp',
      relationship: 'Former Manager',
      rating: 5,
      testimonial: 'Exceptional developer with strong leadership skills.'
    },
    {
      id: 2,
      name: 'Ana Paula',
      position: 'CTO',
      company: 'InnovateLabs',
      relationship: 'Project Lead',
      rating: 5,
      testimonial: 'Outstanding problem-solver and team player.'
    },
    {
      id: 3,
      name: 'Ricardo Santos',
      position: 'Senior Developer',
      company: 'DevStudio',
      relationship: 'Colleague',
      rating: 4,
      testimonial: 'Great technical skills and communication abilities.'
    }
  ];

  return (
    <ReferencesCard theme={theme}>
      <h4>Professional References</h4>
      <div className="references-container">
        {references.map(ref => (
          <ReferenceItem key={ref.id} theme={theme}>
            <div className="reference-header">
              <div className="reference-info">
                <FontAwesomeIcon icon={faUserTie} className="reference-avatar" />
                <div>
                  <h5>{ref.name}</h5>
                  <p><FontAwesomeIcon icon={faBuilding} /> {ref.position} at {ref.company}</p>
                  <small>{ref.relationship}</small>
                </div>
              </div>
              <div className="rating">
                {[...Array(ref.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star-filled" />
                ))}
              </div>
            </div>
            <div className="testimonial">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p>{ref.testimonial}</p>
            </div>
          </ReferenceItem>
        ))}
      </div>
    </ReferencesCard>
  );
}
