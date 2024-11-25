'use client';
import { useState, useEffect } from 'react';

const initialPhotos = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${index + 1}/800/600`,
  caption: `Foto ${index + 1}`,
  date: new Date().toISOString(),
  likes: Math.floor(Math.random() * 100),
  comments: [],
  shares: Math.floor(Math.random() * 50)
}));

export const useGalleryPhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setPhotos(initialPhotos);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar as fotos');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    photos,
    loading,
    error
  };
};
