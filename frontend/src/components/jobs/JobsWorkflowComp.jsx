'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { WorkflowCard, WorkflowStep, StepConnector } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUserCheck, faCode, faComments, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function JobsWorkflowComp() {
  const { theme } = useTheme();

  const workflowSteps = [
    { icon: faFileAlt, title: 'Application Review', status: 'completed', date: '15/03/2024' },
    { icon: faUserCheck, title: 'HR Screening', status: 'completed', date: '17/03/2024' },
    { icon: faCode, title: 'Technical Test', status: 'current', date: '20/03/2024' },
    { icon: faComments, title: 'Technical Interview', status: 'pending', date: '22/03/2024' },
    { icon: faHandshake, title: 'Final Interview', status: 'pending', date: '25/03/2024' }
  ];

  return (
    <WorkflowCard theme={theme}>
      <h4>Application Workflow</h4>
      <div className="workflow-timeline">
        {workflowSteps.map((step, index) => (
          <React.Fragment key={index}>
            <WorkflowStep theme={theme} status={step.status}>
              <div className="step-icon">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <div className="step-info">
                <h5>{step.title}</h5>
                <span>{step.date}</span>
              </div>
              <div className="step-status">
                {step.status === 'completed' && <span className="completed">Completed</span>}
                {step.status === 'current' && <span className="current">In Progress</span>}
                {step.status === 'pending' && <span className="pending">Pending</span>}
              </div>
            </WorkflowStep>
            {index < workflowSteps.length - 1 && (
              <StepConnector theme={theme} status={step.status} />
            )}
          </React.Fragment>
        ))}
      </div>
    </WorkflowCard>
  );
}
