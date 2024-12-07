'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faHeart, 
  faEnvelope,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  AboutContainer,
  OverviewCard,
  InfoCard,
  InfoIcon,
  InfoText
} from '../styles/UserTabAboutStyles';
import { useUserTabAbout } from '../utils/UserTabAboutUtils';

export default function UserTabAboutComp() {
  const { theme } = useTheme();
  const { userInfo } = useUserTabAbout();

  return (
    <AboutContainer>
      <OverviewCard theme={theme}>
        <h4>Visão Geral</h4>
        <p>{userInfo.overview}</p>
      </OverviewCard>

      <Row>
        <Col>
          <InfoCard theme={theme}>
            <div className="card-body">
              <InfoText>
                <FontAwesomeIcon icon={faCalendarAlt} />
                Nascido: <strong>{userInfo.birthDate}</strong>
              </InfoText>
            </div>
          </InfoCard>
        </Col>
        <Col>
          <InfoCard theme={theme}>
            <div className="card-body">
              <InfoText>
                <FontAwesomeIcon icon={faHeart} />
                Situação: <strong>{userInfo.relationship}</strong>
              </InfoText>
            </div>
          </InfoCard>
        </Col>
      </Row>

      <Row>
        <Col>
          <InfoCard theme={theme}>
            <div className="card-body">
              <InfoText>
                <FontAwesomeIcon icon={faBriefcase} />
                <strong>{userInfo.occupation}</strong>
              </InfoText>
            </div>
          </InfoCard>
        </Col>
        <Col>
          <InfoCard theme={theme}>
            <div className="card-body">
              <InfoText>
                <FontAwesomeIcon icon={faEnvelope} />
                E-mail: <strong>{userInfo.email}</strong>
              </InfoText>
            </div>
          </InfoCard>
        </Col>
      </Row>
    </AboutContainer>
  );
}
