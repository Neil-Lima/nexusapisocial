'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import JobsCardComp from './JobsCardComp';
import { ListContainer } from './styles/JobsStyles';
import { useTheme } from '@/context/theme/ThemeContext';

export default function JobsListComp() {
  const { theme } = useTheme();

  return (
    <ListContainer theme={theme}>
      <Row>
        {[1,2,3,4].map((job) => (
          <Col key={job} lg={6} className="mb-4">
            <JobsCardComp />
          </Col>
        ))}
      </Row>
    </ListContainer>
  );
}
