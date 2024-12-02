'use client';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { ProfileCard, SkillsList, StyledButton } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMapMarker, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function JobsProfileComp() {
  const { theme } = useTheme();

  return (
    <ProfileCard theme={theme}>
      <div className="profile-header">
        <img src="/profile-pic.jpg" alt="Profile" />
        <h4>João Silva</h4>
        <p><FontAwesomeIcon icon={faBriefcase} /> Desenvolvedor Frontend</p>
        <p><FontAwesomeIcon icon={faMapMarker} /> São Paulo, SP</p>
      </div>
      <SkillsList theme={theme}>
        <h5>Habilidades</h5>
        <div className="skills-grid">
          <Badge bg="primary">React</Badge>
          <Badge bg="primary">TypeScript</Badge>
          <Badge bg="primary">Node.js</Badge>
        </div>
      </SkillsList>
      <StyledButton theme={theme}>
        <FontAwesomeIcon icon={faEdit} /> Editar Perfil
      </StyledButton>
    </ProfileCard>
  );
}
