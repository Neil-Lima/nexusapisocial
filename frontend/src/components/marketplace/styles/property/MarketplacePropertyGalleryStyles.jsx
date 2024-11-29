'use client';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
`;

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .view-options {
    display: flex;
    gap: 1rem;

    button {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.primaryColor};
      }

      &.active {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      }
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};

  .filter-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input[type="checkbox"] {
      cursor: pointer;
    }

    label {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ImageCard = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};

    .image-info {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .image-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s ease;

    .category {
      font-weight: bold;
    }

    .date {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

export const FullscreenView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .main-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 70vh;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .image-details {
    text-align: center;
    margin: 1rem 0;

    button {
      background: ${props => props.theme.primaryColor};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
  }
`;

export const ThumbnailStrip = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;

  .thumbnail {
    width: 100px;
    height: 60px;
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      opacity: 1;
      border: 2px solid ${props => props.theme.primaryColor};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.primaryColor};
    }
  }
`;
