'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faImages,
  faEdit,
  faTrash,
  faLock,
  faGlobe,
  faShare,
  faDownload,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { 
  PhotoGrid,
  PhotoCard,
  PhotoImage,
  PhotoOverlay,
  PhotoInfo,
  PhotoActions,
  IconButton
} from '../styles/GalleryPhotoStyles';

function GalleryAlbumGrid({ 
  albums, 
  onEdit, 
  onDelete, 
  onShare,
  onDownload,
  onTogglePrivacy,
  onAlbumSelect 
}) {
  const { theme } = useTheme();

  return (
    <PhotoGrid theme={theme}>
      {albums?.map((album) => (
        <PhotoCard key={album.id} theme={theme} onClick={() => onAlbumSelect(album)}>
          <PhotoImage src={album.image} alt={album.name} />
          <PhotoOverlay className="photo-overlay">
            <PhotoInfo>
              <h4>{album.name}</h4>
              <p>{album.description}</p>
              <span>
                <FontAwesomeIcon icon={faImages} /> {album.photos?.length || 0} fotos
              </span>
            </PhotoInfo>
            <PhotoActions>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePrivacy(album.id);
                }}
                theme={theme}
              >
                <FontAwesomeIcon icon={album.isPrivate ? faLock : faGlobe} />
              </IconButton>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  onShare(album.id);
                }}
                theme={theme}
              >
                <FontAwesomeIcon icon={faShare} />
              </IconButton>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload(album.id);
                }}
                theme={theme}
              >
                <FontAwesomeIcon icon={faDownload} />
              </IconButton>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(album.id);
                }}
                theme={theme}
              >
                <FontAwesomeIcon icon={faEdit} />
              </IconButton>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(album.id);
                }}
                theme={theme}
              >
                <FontAwesomeIcon icon={faTrash} />
              </IconButton>
              <IconButton theme={theme}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </IconButton>
            </PhotoActions>
          </PhotoOverlay>
        </PhotoCard>
      ))}
    </PhotoGrid>
  );
}

export default GalleryAlbumGrid;
