'use client';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import {StyledCard, StatValue, StatLabel} from '@/shared/profile/styles/ProfileStatsCardCompStyles';


function ProfileStatsCardComp() {
  const { theme } = useTheme();

  const stats = [
    { label: 'Posts', value: '30' },
    { label: 'Seguidores', value: '3000' },
    { label: 'Seguindo', value: '30' }
  ];

  return (
    <StyledCard theme={theme}>
      <Card.Body>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index}>
              <StatLabel theme={theme}>{stat.label}</StatLabel>
              <StatValue theme={theme}>{stat.value}</StatValue>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledCard>
  );
}

export default ProfileStatsCardComp;
