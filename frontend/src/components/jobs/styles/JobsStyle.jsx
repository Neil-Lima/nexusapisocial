import styled from 'styled-components';
import { Button, Card, Form, Modal, Pagination, ListGroup, Tabs, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';

// Base Styles
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

export const StyledCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  margin-bottom: 20px;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledModal = styled(Modal)`
  .modal-content {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: #ffffff;
    border-radius: 20px;
  }

  .modal-header, .modal-footer {
    border-color: rgba(255, 255, 255, 0.1);
  }

  .close {
    color: #ffffff;
  }
`;

// Feed Styles
export const FeedSection = styled.div`
  padding: 20px;
`;

export const FeedCard = styled(StyledCard)`
  h4 {
    color: #ffffff;
    margin-bottom: 20px;
  }

  .trend-stat {
    text-align: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    
    h5 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }
  }
`;

// Filter Styles
export const FilterSection = styled(StyledCard)`
  .accordion {
    background: transparent;

    .accordion-item {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 10px;

      .accordion-button {
        background: transparent;
        color: #ffffff;

        &:not(.collapsed) {
          background: rgba(255, 255, 255, 0.05);
        }
      }

      .accordion-body {
        background: transparent;
      }
    }
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 15px;

  .form-check {
    margin-bottom: 8px;
    color: #ffffff;
  }
`;

// Insights Styles
export const InsightsSection = styled(StyledCard)`
  h4, h5 {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

export const InsightCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;

  .insight-item {
    margin-bottom: 15px;
    
    svg {
      margin-right: 10px;
      color: ${props => props.theme.highlightColor};
    }
  }
`;

// Learning Styles
export const LearningSection = styled(StyledCard)`
  h4, h5 {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

export const CourseCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  margin-bottom: 20px;
  color: #ffffff;

  .card-body {
    padding: 15px;
  }
`;

// List Styles
export const JobList = styled.div`
  .company-logo {
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 10px;
  }
`;

export const JobCard = styled(StyledCard)`
  padding: 20px;
`;

export const JobTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

export const JobInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #ffffff;

  svg {
    margin-right: 10px;
    color: ${props => props.theme.highlightColor};
  }
`;

// Modal Styles
export const StyledTabs = styled(Tabs)`
  .nav-link {
    color: #ffffff;
    
    &.active {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: transparent;
    }
  }
`;

export const CompanyInsights = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;

  .insight-item {
    text-align: center;
    
    svg {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: ${props => props.theme.highlightColor};
    }
  }
`;

// Network Styles
export const NetworkSection = styled(StyledCard)`
  h4, h5 {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

export const ConnectionCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const EventCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  color: #ffffff;

  .event-date {
    text-align: center;
    margin-bottom: 15px;

    .day {
      font-size: 1.5rem;
      font-weight: bold;
      display: block;
    }

    .month {
      text-transform: uppercase;
    }
  }
`;

// Profile Styles
export const ProfileSection = styled(StyledCard)`
  text-align: center;
  padding: 30px;
`;

export const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid ${props => props.theme.highlightColor};
`;

export const StatisticCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;

  svg {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${props => props.theme.highlightColor};
  }
`;

export const AchievementCard = styled(StatisticCard)`
  .achievement-item {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

// Search Styles
export const SearchBar = styled(Form)`
  margin-bottom: 30px;
  position: relative;

  .form-control {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 15px;
    border-radius: 30px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const SearchSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin-top: 10px;
  z-index: 1000;

  .suggestion-section {
    margin-bottom: 15px;

    h6 {
      color: #ffffff;
      margin-bottom: 10px;
    }

    .suggestion-item {
      padding: 8px;
      cursor: pointer;
      color: #ffffff;
      border-radius: 5px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

// Common Form Styles
export const StyledForm = styled(Form)`
  .form-label {
    color: #ffffff;
  }

  .form-control {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;

    &:focus {
      background: rgba(255, 255, 255, 0.15);
      box-shadow: none;
      border-color: ${props => props.theme.highlightColor};
    }
  }
`;

export const StyledSelect = styled(Form.Select)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;

  option {
    background: ${props => props.theme.primaryColor};
    color: #ffffff;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`;

export const StyledBadge = styled(Badge)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 8px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 15px;
`;

export const StyledPagination = styled(Pagination)`
  .page-item {
    .page-link {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      color: #ffffff;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &.active .page-link {
      background: ${props => props.theme.highlightColor};
      border-color: ${props => props.theme.highlightColor};
    }
  }
`;

export const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    margin-bottom: 5px;
    border-radius: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
