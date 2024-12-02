'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faClock,
  faUsers,
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  CardContainer,
  CardImage,
  CardBadge,
  CardContent,
  CardTitle,
  CardInfo,
  CardInfoItem,
  CardFooter,
  AttendeesList,
  AttendeeAvatar,
  InterestButton
} from '../styles/EventsCardStyles';
import { useEventsCard } from '../utils/EventsCardUtils';

export default function EventsCardComp({ event, onSelect }) {
  const { theme } = useTheme();
  const { handleInterest } = useEventsCard();

  return (
    <CardContainer theme={theme} onClick={() => onSelect(event)}>
      <CardImage>
        <img src={event.image} alt={event.title} />
        {event.isOnline && <CardBadge>Online</CardBadge>}
      </CardImage>
      
      <CardContent>
        <CardTitle theme={theme}>{event.title}</CardTitle>
        
        <CardInfo>
          <CardInfoItem>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {event.date}
          </CardInfoItem>
          <CardInfoItem>
            <FontAwesomeIcon icon={faClock} />
            {event.time}
          </CardInfoItem>
          <CardInfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {event.location}
          </CardInfoItem>
        </CardInfo>

        <CardFooter>
          <AttendeesList>
            {event.attendees > 0 && (
              <>
                <AttendeeAvatar>+{event.attendees}</AttendeeAvatar>
                <span>participantes</span>
              </>
            )}
          </AttendeesList>
          
          <InterestButton 
            onClick={(e) => {
              e.stopPropagation();
              handleInterest(event.id);
            }}
            theme={theme}
          >
            <FontAwesomeIcon icon={faHeart} />
            Interessado
          </InterestButton>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
}
