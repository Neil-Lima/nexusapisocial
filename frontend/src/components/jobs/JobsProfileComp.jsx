'use client';
import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBookmark, faBriefcase, faChartLine, faNetworkWired, faBell, faTrophy, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { ProfileSection, ProfilePicture, StyledButton, StatisticCard, AchievementCard } from './styles/JobsStyle';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dadosGrafico = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [{
    label: 'Atividade',
    data: [0, 10, 5, 15, 8, 12],
    borderColor: '#4a00e0',
    fill: false
  }]
};

const opcoesGrafico = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    }
  },
  scales: {
    y: {
      ticks: { color: '#ffffff' },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    x: {
      ticks: { color: '#ffffff' },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
};

function JobsProfileComp({ savedJobs, appliedJobs, userProfile }) {
  const { theme } = useTheme();

  return (
    <ProfileSection theme={theme}>
      <div className="text-center mb-4">
        <ProfilePicture src={userProfile?.avatar || "https://via.placeholder.com/100"} alt="Foto de Perfil" theme={theme} />
        <h4 style={{color: '#ffffff'}}>{userProfile?.name}</h4>
        <p style={{color: '#ffffff'}}>{userProfile?.title}</p>
        <p style={{color: '#ffffff'}}>{userProfile?.location}</p>
        <StyledButton theme={theme}>
          <FontAwesomeIcon icon={faEdit} /> Editar Perfil
        </StyledButton>
      </div>

      <StatisticCard theme={theme}>
        <h5 style={{color: '#ffffff'}}>Perfil</h5>
        <ProgressBar now={userProfile?.profileCompletion} variant="success" />
        <small style={{color: '#ffffff'}}>{userProfile?.profileCompletion}% completo</small>
      </StatisticCard>

      <Row className="mt-4">
        <Col md={6}>
          <StatisticCard theme={theme}>
            <FontAwesomeIcon icon={faBookmark} />
            <h5 style={{color: '#ffffff'}}>{savedJobs?.length || 0}</h5>
            <p style={{color: '#ffffff'}}>Vagas Salvas</p>
          </StatisticCard>
        </Col>
        <Col md={6}>
          <StatisticCard theme={theme}>
            <FontAwesomeIcon icon={faBriefcase} />
            <h5 style={{color: '#ffffff'}}>{appliedJobs?.length || 0}</h5>
            <p style={{color: '#ffffff'}}>Candidaturas</p>
          </StatisticCard>
        </Col>
      </Row>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faChartLine} /> Atividade
        </h5>
        <div style={{height: '200px', padding: '20px'}}>
          <Line data={dadosGrafico} options={opcoesGrafico} />
        </div>
      </div>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faNetworkWired} /> Networking
        </h5>
        <StatisticCard theme={theme}>
          <Row>
            <Col md={6}>
              <div className="text-center">
                <h6 style={{color: '#ffffff'}}>{userProfile?.networkStats?.connections}</h6>
                <p style={{color: '#ffffff'}}>Conexões</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <h6 style={{color: '#ffffff'}}>{userProfile?.networkStats?.views}</h6>
                <p style={{color: '#ffffff'}}>Visualizações</p>
              </div>
            </Col>
          </Row>
        </StatisticCard>
      </div>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faTrophy} /> Conquistas
        </h5>
        <AchievementCard theme={theme}>
          {userProfile?.achievements?.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <FontAwesomeIcon icon={achievement.icon} />
              <h6 style={{color: '#ffffff'}}>{achievement.title}</h6>
              <p style={{color: '#ffffff'}}>{achievement.description}</p>
            </div>
          ))}
        </AchievementCard>
      </div>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faGraduationCap} /> Certificações
        </h5>
        <StatisticCard theme={theme}>
          {userProfile?.certifications?.map((cert, index) => (
            <div key={index} className="certification-item">
              <h6 style={{color: '#ffffff'}}>{cert.name}</h6>
              <p style={{color: '#ffffff'}}>{cert.institution} • {cert.year}</p>
            </div>
          ))}
        </StatisticCard>
      </div>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faHandshake} /> Recomendações
        </h5>
        <StatisticCard theme={theme}>
          {userProfile?.recommendations?.map((rec, index) => (
            <div key={index} className="recommendation-item">
              <p style={{color: '#ffffff'}}>"{rec.text}"</p>
              <small style={{color: '#ffffff'}}>- {rec.author}, {rec.role}</small>
            </div>
          ))}
        </StatisticCard>
      </div>

      <div className="mt-4">
        <h5 style={{color: '#ffffff'}}>
          <FontAwesomeIcon icon={faBell} /> Alertas de Vagas
        </h5>
        <StyledButton theme={theme} className="w-100">
          Configurar Alertas
        </StyledButton>
      </div>
    </ProfileSection>
  );
}

export default JobsProfileComp;
