'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { CalendarCard, CalendarEvent } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBuilding, faUser, faCode } from '@fortawesome/free-solid-svg-icons';

export default function JobsCalendarComp() {
  const { theme } = useTheme();

  const interviews = [
    {
      id: 1,
      company: 'TechCorp',
      type: 'Technical Interview',
      date: '2024-03-20',
      time: '14:00',
      icon: faCode,
      isOnline: true
    },
    {
      id: 2,
      company: 'InnovateLabs',
      type: 'HR Interview',
      date: '2024-03-21',
      time: '10:00',
      icon: faUser,
      isOnline: false
    },
    {
      id: 3,
      company: 'DevStudio',
      type: 'Final Interview',
      date: '2024-03-22',
      time: '15:30',
      icon: faBuilding,
      isOnline: true
    }
  ];

  return (
    <CalendarCard theme={theme}>
      <h4>Interview Schedule</h4>
      <div className="calendar-events">
        {interviews.map(interview => (
          <CalendarEvent key={interview.id} theme={theme}>
            <div className="event-icon">
              <FontAwesomeIcon icon={interview.icon} />
            </div>
            <div className="event-info">
              <h5>{interview.company}</h5>
              <p>{interview.type}</p>
              <div className="event-details">
                <span>{interview.date} - {interview.time}</span>
                {interview.isOnline && (
                  <span className="online-badge">
                    <FontAwesomeIcon icon={faVideo} /> Online
                  </span>
                )}
              </div>
            </div>
          </CalendarEvent>
        ))}
      </div>
    </CalendarCard>
  );
}
