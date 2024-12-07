'use client';
import { useState } from 'react';

export const useUserTabPosts = () => {
  const [posts] = useState([
    {
      id: 1,
      authorName: 'Madara Uchiha',
      authorAvatar: 'https://example.com/avatar1.jpg',
      timestamp: '2 horas atrás',
      content: 'Wake up to reality! Nothing ever goes as planned in this world.',
      image: 'https://example.com/post1.jpg',
      likes: 1234,
      comments: 89
    },
    {
      id: 2,
      authorName: 'Madara Uchiha',
      authorAvatar: 'https://example.com/avatar1.jpg',
      timestamp: '5 horas atrás',
      content: 'The longer you live... The more you realize that reality is just made of pain, suffering and emptiness...',
      likes: 856,
      comments: 45
    }
  ]);

  const handleLike = (postId) => {
    console.log('Like post:', postId);
  };

  const handleComment = (postId) => {
    console.log('Comment post:', postId);
  };

  const handleShare = (postId) => {
    console.log('Share post:', postId);
  };

  return {
    posts,
    handleLike,
    handleComment,
    handleShare
  };
};
