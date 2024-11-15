'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGlobeAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, IconWrapper, GradientText } from './styles/friendsStyle';
import { useTheme } from '@/context/ThemeContext';

function FriendsNavComp() {
  const { theme } = useTheme();

  return (
    <StyledCard className="mb-4">
      <div className="text-center p-4">
        <img 
          src="https://3.bp.blogspot.com/-SKgOrjUtWhE/UY2-87zw1PI/AAAAAAAAAH4/oSSr-Zh-6-8/s1600/Madara+Uchiha.jpg"
          alt="Profile"
          className="rounded-circle mb-3"
          style={{width: '100px', height: '100px'}}
        />
        <h4><GradientText theme={theme}>Madara Uchiha</GradientText></h4>
        <p>Líder do clã Uchiha</p>
      </div>

      <ListGroup className="mb-4">
        {[
          { icon: faHome, text: 'Feed', color: '#FF0080' },
          { icon: faUser, text: 'Conexões', color: '#7928CA' },
          { icon: faGlobeAmericas, text: 'Ultimas noticias', color: '#4a00e0' },
          { icon: faUsers, text: 'Grupos', color: '#8e2de2' }
        ].map((item, index) => (
          <ListGroup.Item 
            key={index} 
            className="border-0 d-flex align-items-center" 
            style={{backgroundColor: 'transparent', color: '#ffffff', padding: '15px 20px'}}
          >
            <IconWrapper theme={theme}>
              <FontAwesomeIcon icon={item.icon} style={{fontSize: '20px', color: '#ffffff'}} />
            </IconWrapper>
            <span style={{fontSize: '16px'}}>{item.text}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </StyledCard>
  );
}

export default FriendsNavComp;
