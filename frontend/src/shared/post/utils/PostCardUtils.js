'use client';
import { useState } from 'react';

export const usePostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [posts] = useState([
    {
      id: 1,
      userName: 'Naruto Uzumaki',
      userAvatar: 'https://picsum.photos/50/50?random=1',
      content: 'Mais um dia de treino para me tornar Hokage! 🍜',
      image: 'https://picsum.photos/600/400?random=1',
      timestamp: '2h atrás',
      likes: 234,
      comments: [
        {
          id: 1,
          userName: 'Sasuke Uchiha',
          userAvatar: 'https://picsum.photos/50/50?random=2',
          content: 'Continua sonhando, perdedor.',
          timestamp: '1h atrás'
        }
      ]
    },
    {
      id: 2,
      userName: 'Sakura Haruno',
      userAvatar: 'https://picsum.photos/50/50?random=3',
      content: 'Novo jutsu médico desenvolvido! 💚',
      image: 'https://picsum.photos/600/400?random=2',
      timestamp: '4h atrás',
      likes: 156,
      comments: []
    }
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      userName: 'Você',
      userAvatar: 'https://picsum.photos/50/50?random=3',
      content: commentText,
      timestamp: 'Agora'
    };

    console.log('Novo comentário:', newComment);
    setCommentText('');
  };

  const handleShare = () => {
    console.log('Compartilhando post');
  };

  const handlePostOptions = () => {
    console.log('Opções do post');
  };

  return {
    posts,
    isLiked,
    commentText,
    setCommentText,
    showComments,
    setShowComments,
    handleLike,
    handleComment,
    handleShare,
    handlePostOptions
  };
};
