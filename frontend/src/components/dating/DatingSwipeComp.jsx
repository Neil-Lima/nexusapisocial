// DatingSwipeComp.jsx
'use client';
import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faStar, faLocationDot, faMusic, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function DatingSwipeComp() {
  return (
    <div className="swipe-container">
      <Card className="swipe-card">
        <div className="photo-carousel">
          <img src="/profile-photo.jpg" alt="Profile" />
          <div className="photo-indicators">
            <ProgressBar now={33} />
          </div>
        </div>
        <Card.Body>
          <div className="profile-header">
            <h2>Maria, 28</h2>
            <span className="location">
              <FontAwesomeIcon icon={faLocationDot} /> 5km
            </span>
          </div>
          <div className="profile-info">
            <p><FontAwesomeIcon icon={faGraduationCap} /> USP</p>
            <p><FontAwesomeIcon icon={faMusic} /> Rock, Pop</p>
          </div>
          <div className="interests">
            <span>Viagens</span>
            <span>Fotografia</span>
            <span>Música</span>
          </div>
        </Card.Body>
        <div className="action-buttons">
          <Button variant="outline-danger" size="lg">
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <Button variant="outline-warning" size="lg">
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button variant="outline-success" size="lg">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default DatingSwipeComp;
