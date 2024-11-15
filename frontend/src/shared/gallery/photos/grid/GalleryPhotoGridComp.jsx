'use client';
import React from 'react';
import { PhotoGrid, PhotoItem } from '../styles/GalleryPhotoStyles';

const GalleryPhotoGridComp = ({ photos, onPhotoSelect, uploadedImage }) => {
  return (
    <PhotoGrid>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} onClick={() => onPhotoSelect(photo)}>
          <img src={photo.url} alt={photo.caption} />
        </PhotoItem>
      ))}
      {uploadedImage && (
        <PhotoItem onClick={() => onPhotoSelect({ 
          id: 'uploaded', 
          url: uploadedImage, 
          caption: 'Uploaded Image', 
          likes: 0, 
          comments: [], 
          shares: 0 
        })}>
          <img src={uploadedImage} alt="Uploaded" />
        </PhotoItem>
      )}
    </PhotoGrid>
  );
};

export default GalleryPhotoGridComp;
