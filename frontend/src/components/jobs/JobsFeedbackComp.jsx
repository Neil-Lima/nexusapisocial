'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FeedbackCard, FeedbackItem, SkillRating } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faLightbulb, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function JobsFeedbackComp() {
  const { theme } = useTheme();

  const feedback = {
    overallScore: 85,
    technicalSkills: [
      { name: 'React', rating: 9, feedback: 'Strong understanding of React concepts' },
      { name: 'TypeScript', rating: 8, feedback: 'Good TypeScript knowledge' },
      { name: 'System Design', rating: 7, feedback: 'Solid architectural understanding' }
    ],
    strengths: [
      'Excellent problem-solving approach',
      'Strong communication skills',
      'Good team collaboration'
    ],
    improvements: [
      'Could improve testing strategies',
      'Consider learning more about CI/CD',
      'Enhance documentation practices'
    ],
    nextSteps: [
      'Technical interview scheduled',
      'Complete coding challenge',
      'Reference check pending'
    ]
  };

  return (
    <FeedbackCard theme={theme}>
      <h4>Interview Feedback</h4>
      <div className="overall-score">
        <div className="score-circle">
          {feedback.overallScore}%
        </div>
        <p>Overall Performance</p>
      </div>

      <div className="feedback-section">
        <h5><FontAwesomeIcon icon={faStar} /> Technical Assessment</h5>
        {feedback.technicalSkills.map((skill, index) => (
          <FeedbackItem key={index} theme={theme}>
            <div className="skill-header">
              <h6>{skill.name}</h6>
              <SkillRating theme={theme}>
                {[...Array(10)].map((_, i) => (
                  <span key={i} className={i < skill.rating ? 'filled' : ''} />
                ))}
              </SkillRating>
            </div>
            <p>{skill.feedback}</p>
          </FeedbackItem>
        ))}
      </div>

      <div className="feedback-section">
        <h5><FontAwesomeIcon icon={faThumbsUp} /> Key Strengths</h5>
        {feedback.strengths.map((strength, index) => (
          <FeedbackItem key={index} theme={theme}>
            <FontAwesomeIcon icon={faLightbulb} className="strength-icon" />
            <p>{strength}</p>
          </FeedbackItem>
        ))}
      </div>

      <div className="feedback-section">
        <h5><FontAwesomeIcon icon={faExclamationCircle} /> Areas for Improvement</h5>
        {feedback.improvements.map((improvement, index) => (
          <FeedbackItem key={index} theme={theme}>
            <p>{improvement}</p>
          </FeedbackItem>
        ))}
      </div>

      <div className="next-steps">
        <h5>Next Steps</h5>
        <ul>
          {feedback.nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </FeedbackCard>
  );
}
