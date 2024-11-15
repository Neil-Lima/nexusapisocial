'use client';
import { useState } from 'react';

export const useCreatePost = () => {
  const [postText, setPostText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [userAvatar] = useState('https://picsum.photos/50/50?random=1');

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedMedia(file);
    }
  };

  const handleCreatePost = () => {
    if (!postText && !selectedMedia) return;

    const newPost = {
      id: Date.now(),
      userName: 'Você',
      userAvatar,
      content: postText,
      image: selectedMedia ? URL.createObjectURL(selectedMedia) : null,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      comments: []
    };

    console.log('Novo post:', newPost);
    setPostText('');
    setSelectedMedia(null);
  };

  const handleEmojiSelect = (emoji) => {
    setPostText(prev => prev + emoji);
  };

  return {
    postText,
    setPostText,
    showEmojiPicker,
    setShowEmojiPicker,
    selectedMedia,
    handleMediaUpload,
    handleCreatePost,
    handleEmojiSelect,
    userAvatar
  };
};
