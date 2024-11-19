// DatingMainComp.jsx
'use client';
import React from 'react';
import { Container, Row, Col, Nav, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faUser, faSearch, faUsers, faBell, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import DatingSwipeComp from './DatingSwipeComp';
import DatingMatchesListComp from './DatingMatchesListComp';
import DatingChatComp from './DatingChatComp';
import DatingProfileComp from './DatingProfileComp';

function DatingMainComp() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <DatingProfileComp />
        </Col>
        <Col md={6}>
          <Nav variant="pills" defaultActiveKey="discover">
            <Nav.Item>
              <Nav.Link eventKey="discover">
                <FontAwesomeIcon icon={faSearch} /> Descobrir
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="matches">
                <FontAwesomeIcon icon={faHeart} /> Matches
                <Badge>12</Badge>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="messages">
                <FontAwesomeIcon icon={faComment} /> Mensagens
                <Badge>3</Badge>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="nearby">
                <FontAwesomeIcon icon={faUsers} /> Próximos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="content-area">
            <DatingSwipeComp />
          </div>
        </Col>
        <Col md={3}>
          <DatingMatchesListComp />
        </Col>
      </Row>
    </Container>
  );
}

export default DatingMainComp;
