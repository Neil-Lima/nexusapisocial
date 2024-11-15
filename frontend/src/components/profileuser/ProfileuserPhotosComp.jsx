import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, PhotoGrid, PhotoItem } from './styles/ProfileuserStyle';

export function ProfileuserPhotosComp() {
  return (
    <StyledCard>
      <Card.Body>
        <h4>Fotos</h4>
        <PhotoGrid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photo) => (
            <PhotoItem key={photo}>
              <img src={`https://picsum.photos/300/300?random=${photo + 20}`} alt={`Photo ${photo}`} />
              <div className="overlay">
                <FontAwesomeIcon icon={faImages} size="2x" color="white" />
              </div>
            </PhotoItem>
          ))}
        </PhotoGrid>
      </Card.Body>
    </StyledCard>
  );
}
