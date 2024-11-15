'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faPause, faPlay, faVolumeMute, faVolumeUp, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
  StoryContainer,
  NavigationButton,
  StoryModal,
  StoryModalContent,
  StoryProgressBar,
  StoryHeader,
  StoryFooter,
  StoryControls,
  StoryItem,
  StoryOverlay,
  StoryUserInfo,
  StoryTime,
  CreateStoryButton
} from './styles/StoriesStyles';
import { useStoryControls, stories, renderStory } from './utils/StoriesUtils';

function StoriesComp() {
  const { theme } = useTheme();
  const {
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
  } = useStoryControls();

  return (
    <Card className="mb-4" style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.18)',
      borderRadius: '20px'
    }}>
      <Card.Body>
        <h5 className="mb-3" style={{color: theme.highlightColor}}>Stories</h5>
        <div style={{ position: 'relative' }}>
          <NavigationButton 
            direction="left" 
            onClick={() => handleScroll('left')}
            disabled={scrollPosition <= 0}
            theme={theme}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavigationButton>
          
          <StoryContainer className="story-container">
            {stories.map((story, index) => (
              <div 
                key={story.id} 
                onClick={() => story.type !== 'create' && handleOpenStory(index)}
                className="story-item"
              >
                {renderStory(story, index, theme)}
              </div>
            ))}
          </StoryContainer>

          <NavigationButton 
            direction="right" 
            onClick={() => handleScroll('right')}
            theme={theme}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </NavigationButton>
        </div>
      </Card.Body>

      {selectedStory && (
        <StoryModal onClick={handleCloseStory}>
          <StoryModalContent onClick={e => e.stopPropagation()}>
            <StoryProgressBar progress={progress} theme={theme} />
            
            <StoryHeader>
              <StoryUserInfo theme={theme}>
                <img src={selectedStory.userImage} alt={selectedStory.userName} />
                <span>{selectedStory.userName}</span>
                <StoryTime>{selectedStory.time}</StoryTime>
              </StoryUserInfo>
              <StoryControls>
                <button onClick={handlePausePlay}>
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button onClick={handleToggleMute}>
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </button>
                <button onClick={() => {}}>
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
                <button onClick={handleCloseStory}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </StoryControls>
            </StoryHeader>

            <img 
              src={selectedStory.content} 
              alt={selectedStory.userName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            <StoryFooter>
              <button onClick={() => handleNavigateStory('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={() => handleNavigateStory('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </StoryFooter>
          </StoryModalContent>
        </StoryModal>
      )}
    </Card>
  );
}

export default StoriesComp;
