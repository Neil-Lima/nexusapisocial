'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { MainContainer, ContentArea } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBriefcase, 
  faChartLine, 
  faUsers, 
  faTrophy,
  faCalendar,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

import JobsSearchComp from './JobsSearchComp';
import JobsListComp from './JobsListComp';
import JobsAnalyticsComp from './JobsAnalyticsComp';
import JobsCandidatesComp from './JobsCandidatesComp';
import JobsAchievementsComp from './JobsAchievementsComp';
import JobsCalendarComp from './JobsCalendarComp';
import JobsProfileComp from './JobsProfileComp';
import JobsEmployerDashboardComp from './JobsEmployerDashboardComp';
import JobsPipelineComp from './JobsPipelineComp';
import JobsSkillsComp from './JobsSkillsComp';
import JobsStatsAdvancedComp from './JobsStatsAdvancedComp';
import JobsRadarComp from './JobsRadarComp';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function JobsMainComp() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <JobsSearchComp />
            <JobsListComp />
          </>
        );
      case 'analytics':
        return (
          <>
            <JobsStatsAdvancedComp />
            <JobsAnalyticsComp />
          </>
        );
      case 'candidates':
        return (
          <>
            <JobsCandidatesComp />
            <JobsPipelineComp />
          </>
        );
      case 'achievements':
        return (
          <>
            <JobsAchievementsComp />
            <JobsSkillsComp />
          </>
        );
      case 'calendar':
        return <JobsCalendarComp />;
      case 'employer':
        return (
          <>
            <JobsEmployerDashboardComp />
            <JobsRadarComp />
          </>
        );
      default:
        return <JobsListComp />;
    }
  };

  return (
    <>
    
      <MainContainer theme={theme}>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <JobsProfileComp />
              <Nav className="flex-column">
                <Nav.Link 
                  active={activeTab === 'dashboard'}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <FontAwesomeIcon icon={faHome} /> Dashboard
                </Nav.Link>
                <Nav.Link 
                  active={activeTab === 'analytics'}
                  onClick={() => setActiveTab('analytics')}
                >
                  <FontAwesomeIcon icon={faChartLine} /> Analytics
                </Nav.Link>
                <Nav.Link 
                  active={activeTab === 'candidates'}
                  onClick={() => setActiveTab('candidates')}
                >
                  <FontAwesomeIcon icon={faUsers} /> Candidates
                </Nav.Link>
                <Nav.Link 
                  active={activeTab === 'achievements'}
                  onClick={() => setActiveTab('achievements')}
                >
                  <FontAwesomeIcon icon={faTrophy} /> Achievements
                </Nav.Link>
                <Nav.Link 
                  active={activeTab === 'calendar'}
                  onClick={() => setActiveTab('calendar')}
                >
                  <FontAwesomeIcon icon={faCalendar} /> Calendar
                </Nav.Link>
                <Nav.Link 
                  active={activeTab === 'employer'}
                  onClick={() => setActiveTab('employer')}
                >
                  <FontAwesomeIcon icon={faUserTie} /> Employer View
                </Nav.Link>
              </Nav>
            </Col>
            <Col lg={9}>
              <ContentArea theme={theme}>
                {renderContent()}
              </ContentArea>
            </Col>
          </Row>
        </Container>
      </MainContainer>
    </>
  );
}
