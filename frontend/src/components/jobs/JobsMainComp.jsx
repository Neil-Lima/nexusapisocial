'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import io from 'socket.io-client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import JobsSearchComp from './JobsSearchComp';
import JobsFilterComp from './JobsFilterComp';
import JobsListComp from './JobsListComp';
import JobsModalComp from './JobsModalComp';
import JobsProfileComp from './JobsProfileComp';
import JobsPostComp from './JobsPostComp';
import JobsFeedComp from './JobsFeedComp';
import JobsNetworkComp from './JobsNetworkComp';
import JobsInsightsComp from './JobsInsightsComp';
import JobsLearningComp from './JobsLearningComp';
import { mockJobs, initialStates, defaultChartData } from './utils/JobsUtils';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const socket = io('http://localhost:3001');

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#ffffff'
      }
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#ffffff'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#ffffff'
      }
    }
  }
};

const conexoesIniciais = [
  {
    id: 1,
    name: 'Ana Silva',
    avatar: 'https://via.placeholder.com/50',
    update: 'Começou um novo trabalho na TechCorp',
    role: 'Desenvolvedora Frontend',
    company: 'TechCorp',
    connections: 500,
    mutual: 25
  },
  {
    id: 2,
    name: 'João Santos',
    avatar: 'https://via.placeholder.com/50',
    update: 'Compartilhou uma nova vaga',
    role: 'Tech Lead',
    company: 'InnovaTech',
    connections: 850,
    mutual: 40
  },
  {
    id: 3,
    name: 'Maria Costa',
    avatar: 'https://via.placeholder.com/50',
    update: 'Conquistou uma nova certificação',
    role: 'DevOps Engineer',
    company: 'CloudTech',
    connections: 650,
    mutual: 30
  }
];

const eventosIniciais = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: '15 de Janeiro',
    format: 'Online',
    description: 'Conferência sobre as últimas tendências em tecnologia',
    participants: 1500,
    speakers: ['Ana Silva', 'João Santos'],
    topics: ['IA', 'Cloud Computing', 'DevOps']
  },
  {
    id: 2,
    title: 'Workshop de React',
    date: '20 de Janeiro',
    format: 'Presencial',
    description: 'Aprenda React na prática com especialistas',
    participants: 50,
    speakers: ['Maria Costa'],
    topics: ['React', 'Frontend', 'JavaScript']
  }
];

function JobsMainComp() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('feed');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [userProfile, setUserProfile] = useState(initialStates.userProfile);
  const [careerInsights, setCareerInsights] = useState(initialStates.careerInsights);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(initialStates.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  
  const [showModal, setShowModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [skillMatchPercentage, setSkillMatchPercentage] = useState(0);
  
  const [connections, setConnections] = useState(conexoesIniciais);
  const [events, setEvents] = useState(eventosIniciais);
  const [learningPaths, setLearningPaths] = useState([]);

  useEffect(() => {
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);

    socket.on('connect', () => {
      console.log('Conectado ao servidor');
    });

    socket.on('jobsUpdate', (updatedJobs) => {
      setJobs(updatedJobs);
      setFilteredJobs(updatedJobs);
    });

    return () => {
      socket.off('connect');
      socket.off('jobsUpdate');
    };
  }, []);

  return (
    <>
    
     <GradientBackground theme={theme}>    
      <Container fluid>
        <Row>
          <Col md={3}>
            <JobsProfileComp 
              userProfile={userProfile}
              savedJobs={savedJobs}
              appliedJobs={appliedJobs}
              careerInsights={careerInsights}
              chartOptions={chartOptions}
              defaultChartData={defaultChartData}
            />
          </Col>

          <Col md={6}>
            <JobsSearchComp 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              jobs={jobs}
              setFilteredJobs={setFilteredJobs}
              setCurrentPage={setCurrentPage}
            />

            {activeTab === 'feed' && (
              <JobsFeedComp 
                userProfile={userProfile}
                connections={connections}
                events={events}
                recommendedJobs={filteredJobs}
                chartOptions={chartOptions}
                defaultChartData={defaultChartData}
              />
            )}

            {activeTab === 'jobs' && (
              <JobsListComp 
                filteredJobs={filteredJobs}
                currentPage={currentPage}
                jobsPerPage={jobsPerPage}
                setSelectedJob={setSelectedJob}
                setShowModal={setShowModal}
                setSkillMatchPercentage={setSkillMatchPercentage}
                setSavedJobs={setSavedJobs}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'network' && (
              <JobsNetworkComp 
                connections={connections}
                events={events}
                userProfile={userProfile}
              />
            )}

            {activeTab === 'learning' && (
              <JobsLearningComp 
                learningPaths={learningPaths}
                userProfile={userProfile}
                careerInsights={careerInsights}
                chartOptions={chartOptions}
                defaultChartData={defaultChartData}
              />
            )}
          </Col>

          <Col md={3}>
            <JobsPostComp 
              setShowPostJobModal={setShowPostJobModal}
              showPostJobModal={showPostJobModal}
              jobs={jobs}
              setJobs={setJobs}
              setFilteredJobs={setFilteredJobs}
            />

            <JobsFilterComp 
              filters={filters}
              setFilters={setFilters}
              jobs={jobs}
              setFilteredJobs={setFilteredJobs}
              setCurrentPage={setCurrentPage}
              userProfile={userProfile}
            />

            <JobsInsightsComp 
              careerInsights={careerInsights}
              userProfile={userProfile}
              industry={filters.industry}
              chartOptions={chartOptions}
              defaultChartData={defaultChartData}
            />
          </Col>
        </Row>

        <JobsModalComp 
          showModal={showModal}
          setShowModal={setShowModal}
          selectedJob={selectedJob}
          skillMatchPercentage={skillMatchPercentage}
          setAppliedJobs={setAppliedJobs}
          userProfile={userProfile}
          careerInsights={careerInsights}
          chartOptions={chartOptions}
          defaultChartData={defaultChartData}
        />
      </Container>
    </GradientBackground>
    </>
   
  );
}

export default JobsMainComp;
