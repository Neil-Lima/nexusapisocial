'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faGraduationCap, faEnvelope, faPhone, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { StyledCard, InfoItem } from './styles/ProfileuserStyle';
import { userInfo } from './utils/ProfileuserUtils';

export function ProfileuserAboutComp() {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <Card.Body>
        <h4 className="mb-4">Informações Pessoais</h4>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className="info-content">
            <div className="info-title">Localização</div>
            <div className="info-detail">{userInfo.location}</div>
          </div>
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faBriefcase} />
          <div className="info-content">
            <div className="info-title">Profissão</div>
            <div className="info-detail">{userInfo.profession}</div>
          </div>
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="info-content">
            <div className="info-title">Educação</div>
            <div className="info-detail">{userInfo.education}</div>
          </div>
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="info-content">
            <div className="info-title">Email</div>
            <div className="info-detail">{userInfo.email}</div>
          </div>
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faPhone} />
          <div className="info-content">
            <div className="info-title">Telefone</div>
            <div className="info-detail">{userInfo.phone}</div>
          </div>
        </InfoItem>
        <InfoItem theme={theme}>
          <FontAwesomeIcon icon={faBirthdayCake} />
          <div className="info-content">
            <div className="info-title">Aniversário</div>
            <div className="info-detail">{userInfo.birthday}</div>
          </div>
        </InfoItem>
      </Card.Body>
    </StyledCard>
  );
}
