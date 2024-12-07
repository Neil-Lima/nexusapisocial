'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MediaContainer,
  MediaTabs,
  MediaTab,
  MediaContent
} from '../styles/UserTabMediaStyles';
import { useUserTabMedia } from '../utils/UserTabMediaUtils';
import GalleryPhotoGridComp from '@/shared/gallery/photos/components/GalleryPhotoGridComp';
import GalleryPhotoModalComp from '@/shared/gallery/photos/components/GalleryPhotoModalComp';
import GalleryPhotoSearchComp from '@/shared/gallery/photos/components/GalleryPhotoSearchComp';
import GalleryPhotoFilterComp from '@/shared/gallery/photos/components/GalleryPhotoFilterComp';

export default function UserTabMediaComp() {
  const { theme } = useTheme();
  const { activeTab, handleTabChange } = useUserTabMedia();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  return (
    <MediaContainer>
      <MediaTabs>
        <MediaTab 
          active={activeTab === 'photos'} 
          onClick={() => handleTabChange('photos')}
          theme={theme}
        >
          <FontAwesomeIcon icon={faImage} /> Fotos
        </MediaTab>
        <MediaTab 
          active={activeTab === 'videos'} 
          onClick={() => handleTabChange('videos')}
          theme={theme}
        >
          <FontAwesomeIcon icon={faVideo} /> Vídeos
        </MediaTab>
      </MediaTabs>

      <MediaContent>
        {activeTab === 'photos' && (
          <>
            <GalleryPhotoSearchComp />
            <GalleryPhotoFilterComp />
            <GalleryPhotoGridComp 
              onPhotoSelect={handlePhotoSelect}
            />
            <GalleryPhotoModalComp 
              show={showModal}
              photo={selectedPhoto}
              onHide={handleModalClose}
            />
          </>
        )}
        {activeTab === 'videos' && (
          <div>Conteúdo de Vídeos</div>
        )}
      </MediaContent>
    </MediaContainer>
  );
}
