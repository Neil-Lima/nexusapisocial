// DatingProfileComp.jsx
'use client';
import React from 'react';
import { Card, Button, ProgressBar, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCamera, faCheckCircle, faMapMarker, faCog } from '@fortawesome/free-solid-svg-icons';

function DatingProfileComp() {
  return (
    <Card className="profile-card">
      <div className="profile-header">
        <div className="profile-photo-container">
          <img src="/profile-photo.jpg" alt="Profile" className="profile-photo" />
          <Button className="edit-photo">
            <FontAwesomeIcon icon={faCamera} />
          </Button>
          <Badge className="verification-badge">
            <FontAwesomeIcon icon={faCheckCircle} />
          </Badge>
        </div>
        <h3>João Silva</h3>
        <p>
          <FontAwesomeIcon icon={faMapMarker} /> São Paulo, SP
        </p>
      </div>

      <Card.Body>
        <div className="profile-completion">
          <p>Perfil completo em 85%</p>
          <ProgressBar now={85} variant="success" />
        </div>

        <div className="profile-stats">
          <div className="stat">
            <h4>286</h4>
            <p>Matches</p>
          </div>
          <div className="stat">
            <h4>45</h4>
            <p>Conversas</p>
          </div>
          <div className="stat">
            <h4>892</h4>
            <p>Visitas</p>
          </div>
        </div>

        <Button variant="outline-primary" className="edit-profile-btn">
          <FontAwesomeIcon icon={faEdit} /> Editar Perfil
        </Button>
        <Button variant="outline-secondary" className="settings-btn">
          <FontAwesomeIcon icon={faCog} /> Configurações
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DatingProfileComp;
