'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFolderPlus, 
  faSort, 
  faGripVertical,
  faImages,
  faBookmark,
  faFolderOpen 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { useGalleryPhoto } from '../utils/GalleryPhotoUtils';
import { ActionButtonsContainer, ActionButton, ViewOptionsContainer } from '../styles/GalleryPhotoStyles';

function GalleryActionButtons() {
  const { theme } = useTheme();
  const { 
    currentView,
    handleViewChange,
    handleCreateAlbum,
    handleOrganize,
    handleSort
  } = useGalleryPhoto();

  return (
    <>
      <ViewOptionsContainer theme={theme}>
        <ActionButton 
          onClick={() => handleViewChange('all')}
          $active={currentView === 'all'}
          theme={theme}
        >
          <FontAwesomeIcon icon={faImages} /> Todas as Fotos
        </ActionButton>
        <ActionButton 
          onClick={() => handleViewChange('albums')}
          $active={currentView === 'albums'}
          theme={theme}
        >
          <FontAwesomeIcon icon={faFolderOpen} /> Álbuns
        </ActionButton>
        <ActionButton 
          onClick={() => handleViewChange('bookmarked')}
          $active={currentView === 'bookmarked'}
          theme={theme}
        >
          <FontAwesomeIcon icon={faBookmark} /> Marcadas
        </ActionButton>
      </ViewOptionsContainer>

      <ActionButtonsContainer>
        <ActionButton onClick={handleCreateAlbum} theme={theme}>
          <FontAwesomeIcon icon={faFolderPlus} /> Criar Álbum
        </ActionButton>
        <ActionButton onClick={handleOrganize} theme={theme}>
          <FontAwesomeIcon icon={faGripVertical} /> Organizar
        </ActionButton>
        <ActionButton onClick={handleSort} theme={theme}>
          <FontAwesomeIcon icon={faSort} /> Ordenar
        </ActionButton>
      </ActionButtonsContainer>
    </>
  );
}

export default GalleryActionButtons;
