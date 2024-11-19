'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useDating } from './utils/DatingUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  PhotosContainer,
  PhotoGrid,
  PhotoCard,
  PhotoActions
} from './styles/DatingStyles';

function DatingPhotosComp() {
  const { theme } = useTheme();
  const {
    photos,
    handlePhotoUpload,
    handlePhotoDelete,
    handleMainPhotoSet
  } = useDating();

  return (
    <PhotosContainer theme={theme}>
      <h3>My Photos</h3>
      <PhotoGrid theme={theme}>
        {photos.map((photo, index) => (
          <PhotoCard key={index} theme={theme}>
            <img src={photo.url} alt={`Photo ${index + 1}`} />
            <PhotoActions theme={theme}>
              <button onClick={() => handleMainPhotoSet(index)}>
                <FontAwesomeIcon icon={faStar} />
              </button>
              <button onClick={() => handlePhotoDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </PhotoActions>
          </PhotoCard>
        ))}
        <PhotoCard theme={theme} className="upload-card">
          <button onClick={handlePhotoUpload}>
            <FontAwesomeIcon icon={faCamera} />
            <span>Add Photo</span>
          </button>
        </PhotoCard>
      </PhotoGrid>
    </PhotosContainer>
  );
}

export default DatingPhotosComp;
