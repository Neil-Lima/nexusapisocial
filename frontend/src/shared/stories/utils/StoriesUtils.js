'use client';
import { useState, useEffect, useCallback } from 'react';
import { CreateStoryButton, StoryItem, StoryOverlay, StoryUserInfo, StoryTime } from '../styles/StoriesStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const stories = [
  {
    id: 1,
    type: 'create',
    userImage: '/your-avatar.jpg',
    name: 'Criar Story'
  },
  {
    id: 2,
    userImage: 'https://picsum.photos/50/50?random=1',
    userName: 'Naruto Uzumaki',
    content: 'https://picsum.photos/400/600?random=1',
    time: '2h atrás',
    contentType: 'image'
  },
  {
    id: 3,
    userImage: 'https://picsum.photos/50/50?random=2',
    userName: 'Sasuke Uchiha',
    content: 'https://picsum.photos/400/600?random=2',
    time: '1h atrás',
    contentType: 'image'
  },
  {
    id: 4,
    userImage: 'https://picsum.photos/50/50?random=3',
    userName: 'Sakura Haruno',
    content: 'https://picsum.photos/400/600?random=3',
    time: '30min atrás',
    contentType: 'image'
  },
  {
    id: 5,
    userImage: 'https://picsum.photos/50/50?random=4',
    userName: 'Kakashi Hatake',
    content: 'https://picsum.photos/400/600?random=4',
    time: '15min atrás',
    contentType: 'image'
  }
];

export const useStoryControls = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleScroll = useCallback((direction) => {
    const container = document.querySelector('.story-container');
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
    setScrollPosition(container.scrollLeft);
  }, []);

  const handleOpenStory = useCallback((index) => {
    setSelectedStory(stories[index]);
    setCurrentStoryIndex(index);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const handleCloseStory = useCallback(() => {
    setSelectedStory(null);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const handleNavigateStory = useCallback((direction) => {
    if (direction === 'next' && currentStoryIndex < stories.length - 1) {
      handleOpenStory(currentStoryIndex + 1);
    } else if (direction === 'prev' && currentStoryIndex > 1) {
      handleOpenStory(currentStoryIndex - 1);
    } else {
      handleCloseStory();
    }
  }, [currentStoryIndex, handleOpenStory, handleCloseStory]);

  const handleKeyPress = useCallback((event) => {
    if (selectedStory) {
      switch (event.key) {
        case 'ArrowLeft':
          handleNavigateStory('prev');
          break;
        case 'ArrowRight':
          handleNavigateStory('next');
          break;
        case 'Escape':
          handleCloseStory();
          break;
        case ' ':
          setIsPlaying(prev => !prev);
          break;
        default:
          break;
      }
    }
  }, [selectedStory, handleNavigateStory, handleCloseStory]);

  const handlePausePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  useEffect(() => {
    let progressInterval;
    if (selectedStory && isPlaying) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleNavigateStory('next');
            return 0;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(progressInterval);
  }, [selectedStory, isPlaying, handleNavigateStory]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return {
    scrollPosition,
    selectedStory,
    currentStoryIndex,
    progress,
    isPlaying,
    isMuted,
    handleScroll,
    handleOpenStory,
    handleCloseStory,
    handleNavigateStory,
    handleKeyPress,
    handlePausePlay,
    handleToggleMute
  };
};

export const renderStory = (story, index, theme) => {
  if (story.type === 'create') {
    return (
      <CreateStoryButton theme={theme}>
        <FontAwesomeIcon icon={faPlus} size="2x" />
        <span>Criar Story</span>
      </CreateStoryButton>
    );
  }

  return (
    <StoryItem>
      <img src={story.content} alt={story.userName} />
      <StoryOverlay>
        <StoryUserInfo theme={theme}>
          <img src={story.userImage} alt={story.userName} />
          <span>{story.userName}</span>
        </StoryUserInfo>
        <StoryTime>{story.time}</StoryTime>
      </StoryOverlay>
    </StoryItem>
  );
};
