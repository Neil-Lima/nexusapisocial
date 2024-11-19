// DatingMatchesListComp.jsx
'use client';
import React from 'react';
import { ListGroup, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faComment } from '@fortawesome/free-solid-svg-icons';

function DatingMatchesListComp() {
  return (
    <div className="matches-container">
      <div className="matches-header">
        <h4>Seus Matches</h4>
        <div className="filters">
          <span className="active">Todos</span>
          <span>Online</span>
          <span>Novos</span>
        </div>
      </div>
      <ListGroup>
        {[1,2,3].map(match => (
          <ListGroup.Item key={match} className="match-item">
            <div className="match-photo">
              <Image src={`/match-${match}.jpg`} roundedCircle />
              <span className="online-status">
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </div>
            <div className="match-info">
              <h5>Ana Silva</h5>
              <p>Olá, como vai?</p>
            </div>
            <div className="match-actions">
              <Badge bg="primary">95%</Badge>
              <FontAwesomeIcon icon={faComment} />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default DatingMatchesListComp;
