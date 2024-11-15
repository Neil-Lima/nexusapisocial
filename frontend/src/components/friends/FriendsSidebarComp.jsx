'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGlobeAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { 
  StyledCard, 
  IconWrapper, 
  GradientText,
  SidebarWrapper,
  Overlay 
} from './styles/friendsStyle';

function FriendsSidebarComp({ show, onHide }) {
  const { theme } = useTheme();

  return (
    <>
      <Overlay show={show} onClick={onHide} />
      <SidebarWrapper show={show}>
        <StyledCard className="text-center">
          <Card.Img 
            variant="top" 
            src="https://3.bp.blogspot.com/-SKgOrjUtWhE/UY2-87zw1PI/AAAAAAAAAH4/oSSr-Zh-6-8/s1600/Madara+Uchiha.jpg" 
            style={{borderRadius: '20px 20px 0 0'}} 
          />
          <Card.Body>
            <Card.Title style={{fontSize: '24px', fontWeight: 'bold'}}>
              <GradientText theme={theme}>Madara Uchiha</GradientText>
            </Card.Title>
            <Card.Text>
              Líder do <a href="#" style={{color: '#FF0080'}}>clã Uchiha</a>, 
              fundador da aldeia da folha, segundo sábio dos seis caminhos.
            </Card.Text>
          </Card.Body>
        </StyledCard>
        
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
              style={{backgroundColor: 'transparent', color: '#ffffff', padding: '15px 0'}}
            >
              <IconWrapper theme={theme}>
                <FontAwesomeIcon icon={item.icon} style={{fontSize: '20px', color: '#ffffff'}} />
              </IconWrapper>
              <span style={{fontSize: '18px'}}>{item.text}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </SidebarWrapper>
    </>
  );
}

export default FriendsSidebarComp;
