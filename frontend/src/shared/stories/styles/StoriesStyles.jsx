'use client';
import styled from 'styled-components';

export const StoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryItem = styled.div`
  position: relative;
  min-width: 120px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

export const StoryUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.primaryColor};
  }

  span {
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const StoryTime = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  z-index: 1;
  background: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.secondaryColor};
  }
`;

export const StoryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
`;

export const StoryProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: ${props => props.theme.primaryColor};
  width: ${props => props.progress}%;
  transition: width 0.1s linear;
`;

export const StoryHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const StoryFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const StoryControls = styled.div`
  display: flex;
  gap: 15px;
  
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const CreateStoryButton = styled(StoryItem)`
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  border: 2px dashed rgba(255,255,255,0.3);

  &:hover {
    border-color: ${props => props.theme.primaryColor};
  }
`;
