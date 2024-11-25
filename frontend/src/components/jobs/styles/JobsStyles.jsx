import styled, { keyframes } from 'styled-components';
import { Card, Button, Modal, InputGroup } from 'react-bootstrap';


// Animations
const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Base Styles
export const MainContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
`;

export const ContentArea = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid rgba(255,255,255,0.18);
  padding: 20px;
  min-height: 500px;
`;

// Card Base Styles
const BaseCard = styled(Card)`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 20px;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Achievement Components
export const AchievementCard = styled(BaseCard)`
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
`;

export const AchievementItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;

  .achievement-icon {
    font-size: 24px;
    color: ${props => props.theme.primaryColor};
  }

  .achievement-info {
    flex: 1;

    h5 {
      margin: 0;
      font-weight: 600;
    }

    p {
      margin: 5px 0;
      opacity: 0.7;
      font-size: 14px;
    }

    .progress {
      height: 8px;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
      margin-top: 10px;

      .progress-bar {
        background: ${props => props.theme.primaryColor};
        border-radius: 4px;
      }
    }
  }
`;

// Calendar Components
export const CalendarCard = styled(BaseCard)`
  .calendar-events {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const CalendarEvent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;

  .event-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.primaryColor};
    border-radius: 10px;
  }

  .event-info {
    flex: 1;

    h5 {
      margin: 0;
      font-weight: 600;
    }

    p {
      margin: 5px 0;
      opacity: 0.7;
    }

    .event-details {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 5px;
      font-size: 14px;

      .online-badge {
        background: rgba(4, 211, 97, 0.2);
        color: #04D361;
        padding: 4px 8px;
        border-radius: 10px;
      }
    }
  }
`;

// Pipeline Components
export const PipelineCard = styled(BaseCard)`
  .pipeline-stages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
`;

export const PipelineStage = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 20px;

  .stage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h5 {
      margin: 0;
      font-weight: 600;
    }

    .candidate-count {
      background: ${props => props.theme.primaryColor};
      padding: 4px 8px;
      border-radius: 10px;
      font-size: 14px;
    }
  }

  .stage-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

// Radar Components
export const RadarCard = styled(BaseCard)`
  .matches-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const JobMatch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export const MatchScore = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `linear-gradient(135deg, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
`;

// References Components
export const ReferencesCard = styled(BaseCard)`
  .references-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ReferenceItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 20px;

  .reference-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;

    .reference-info {
      display: flex;
      align-items: center;
      gap: 15px;

      .reference-avatar {
        font-size: 40px;
        color: ${props => props.theme.primaryColor};
      }
    }

    .rating {
      .star-filled {
        color: #FFD700;
        margin-left: 2px;
      }
    }
  }

  .testimonial {
    position: relative;
    padding-left: 30px;

    .quote-icon {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
  }
`;

// Skills Components
export const SkillsCard = styled(BaseCard)`
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
  }
`;

export const SkillCategory = styled.div`
  .category-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const SkillItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 15px;

  .skill-name {
    display: block;
    margin-bottom: 10px;
  }

  .skill-level {
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    position: relative;

    .level-bar {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      border-radius: 3px;
      width: ${props => props.level}%;
    }

    .level-text {
      position: absolute;
      right: 0;
      top: -20px;
      font-size: 12px;
    }
  }
`;

// Workflow Components
export const WorkflowCard = styled(BaseCard)`
  .workflow-timeline {
    position: relative;
    padding: 20px 0;
  }
`;

export const WorkflowStep = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  margin-bottom: 20px;

  .step-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => 
      props.status === 'completed' ? '#04D361' :
      props.status === 'current' ? props.theme.primaryColor :
      'rgba(255,255,255,0.2)'
    };
    border-radius: 50%;
  }

  .step-status {
    span {
      padding: 4px 8px;
      border-radius: 10px;
      font-size: 14px;

      &.completed {
        background: rgba(4, 211, 97, 0.2);
        color: #04D361;
      }

      &.current {
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }

      &.pending {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export const StepConnector = styled.div`
  position: absolute;
  left: 40px;
  width: 2px;
  height: 30px;
  background: ${props => 
    props.status === 'completed' ? '#04D361' :
    'rgba(255,255,255,0.1)'
  };
`;

// Feedback Components
export const FeedbackCard = styled(BaseCard)`
  .overall-score {
    text-align: center;
    margin-bottom: 30px;

    .score-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: ${props => props.theme.primaryColor};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      margin: 0 auto 15px;
    }

  .feedback-section {
    margin-bottom: 30px;

    h5 {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      svg {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`;

export const FeedbackItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .strength-icon {
    color: ${props => props.theme.primaryColor};
    margin-right: 10px;
  }
`;

export const SkillRating = styled.div`
  display: flex;
  gap: 2px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);

    &.filled {
      background: ${props => props.theme.primaryColor};
    }
  }
`;

// Stats Components
export const StatsCard = styled(BaseCard)`
  .time-filter {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    button {
      background: rgba(255,255,255,0.1);
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      color: #ffffff;
      transition: all 0.3s ease;

      &.active, &:hover {
        background: ${props => props.theme.primaryColor};
      }
    }
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  .stat-item {
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    padding: 20px;

    .stat-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;

      svg {
        color: ${props => props.theme.primaryColor};
        font-size: 24px;
      }

      .trend {
        color: #04D361;
        font-size: 14px;
      }
    }
  }
`;

export const StatChart = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 60px;

  .chart-bar {
    flex: 1;
    background: ${props => props.theme.primaryColor};
    border-radius: 3px 3px 0 0;
    transition: height 0.3s ease;
    position: relative;

    .tooltip {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .tooltip {
      opacity: 1;
    }
  }
`;
export const EmployerCard = styled(BaseCard)`
  padding: 25px;
`;

export const MetricBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 24px;
    color: ${props => props.theme.primaryColor};
  }

  h3 {
    margin: 0;
    font-size: 24px;
  }

  .trend {
    color: #04D361;
    font-size: 14px;
  }
`;

export const ActivityFeed = styled.div`
  margin-top: 25px;

  .activity-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;

    .activity-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.primaryColor};
    }

    .activity-content {
      flex: 1;
      p {
        margin: 0;
      }
      span {
        font-size: 12px;
        opacity: 0.7;
      }
    }
  }
`;
export const AnalyticsCard = styled(BaseCard)`
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
`;

export const MetricItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 24px;
    color: ${props => props.theme.primaryColor};
  }

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin: 5px 0 0;
    opacity: 0.7;
  }

  .growth {
    color: #04D361;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const CandidateCard = styled(BaseCard)`
  .candidates-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const CandidateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  h5 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 5px 0;
    opacity: 0.7;
  }

  .actions {
    display: flex;
    gap: 10px;
    margin-top: 5px;

    svg {
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
export const JobCard = styled(BaseCard)`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const JobHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
`;

export const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const JobInfo = styled.div`
  flex: 1;

  h5 {
    margin: 0;
    font-weight: 600;
  }

  .company-name {
    color: ${props => props.theme.primaryColor};
    margin: 5px 0;
  }

  .job-meta {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    font-size: 14px;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0.8;
    }
  }
`;
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ProfileCard = styled(BaseCard)`
  text-align: center;
  margin-bottom: 20px;

  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 15px;
    border: 4px solid ${props => props.theme.primaryColor};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-info {
    h4 {
      margin: 0;
      font-weight: 600;
    }

    .location, .position {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin: 5px 0;
      opacity: 0.8;
    }
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 15px;

  .skill-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
  }
`;
export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled(InputGroup)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  overflow: hidden;

  input {
    background: transparent;
    border: none;
    color: #ffffff;
    padding: 15px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      box-shadow: none;
      background: transparent;
      color: #ffffff;
    }
  }

  .input-group-text {
    background: transparent;
    border: none;
    color: ${props => props.theme.primaryColor};
  }
`;
export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  color: #ffffff;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;


export default {
    StyledButton,
  MainContainer,
  ContentArea,
  BaseCard,
  AchievementCard,
  AchievementItem,
  CalendarCard,
  CalendarEvent,
  PipelineCard,
  PipelineStage,
  RadarCard,
  JobMatch,
  MatchScore,
  ReferencesCard,
  ReferenceItem,
  SkillsCard,
  SkillCategory,
  SkillItem,
  WorkflowCard,
  WorkflowStep,
  StepConnector,
  FeedbackCard,
  FeedbackItem,
  SkillRating,
  StatsCard,
  StatGrid,
  StatChart
};

