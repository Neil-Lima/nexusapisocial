'use client';
import styled, { keyframes } from 'styled-components';
import { Card, Button, Modal, Image } from 'react-bootstrap';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

export const PhotoItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
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

export const StyledModal = styled(Modal)`
  .modal-content {
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 20px;
    color: #ffffff;
  }

  .modal-header {
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .modal-footer {
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  animation: ${fadeIn} 0.3s ease;

    .modal-dialog {
    max-width: 80%;
    width: 80%;
  }
`;

export const ModalImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textColor || '#ffffff'};
  font-size: 1rem;
  padding: 10px 15px;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primaryColor};
    transform: translateY(-3px);
  }
`;

export const CommentSection = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primaryColor};
    border-radius: 5px;
  }
`;

export const Comment = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  .comment-header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .comment-author {
    font-weight: bold;
    margin-left: 10px;
  }

  .comment-text {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }

  .comment-actions {
    display: flex;
    justify-content: flex-start;
    font-size: 0.8rem;
  }
`;

export const UserAvatar = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  color: #ffffff;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;

export const MoodBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const MoodBoardItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  cursor: move;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

