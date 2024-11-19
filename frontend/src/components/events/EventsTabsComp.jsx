// EventsTabsComp.jsx
'use client';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarker, faCalendarWeek, faCircle, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';

function EventsTabsComp({ activeTab, onTabChange }) {
  const tabs = [
    { key: 'principal', icon: faHome, label: 'Principal' },
    { key: 'local', icon: faMapMarker, label: 'Local' },
    { key: 'semana', icon: faCalendarWeek, label: 'Essa Semana' },
    { key: 'online', icon: faCircle, label: 'On-line' },
    { key: 'amigos', icon: faUsers, label: 'Amigos' },
    { key: 'seguindo', icon: faHeart, label: 'Seguindo' }
  ];

  return (
    <Nav variant="pills" className="events-tabs">
      {tabs.map(tab => (
        <Nav.Item key={tab.key}>
          <Nav.Link 
            active={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
          >
            <FontAwesomeIcon icon={tab.icon} /> {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default EventsTabsComp;
