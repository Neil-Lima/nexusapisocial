'use client';
import React, { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { StyledButton } from '../styles/GalleryPhotoStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faMagic, faPalette } from '@fortawesome/free-solid-svg-icons';
import { ChromePicker } from 'react-color';

const GalleryPhotoUploadComp = ({ 
  onUpload, 
  showColorPicker, 
  selectedColor, 
  onColorPickerToggle, 
  onColorChange,
  onMoodBoardToggle 
}) => {
  const { theme } = useTheme();
  const fileInputRef = useRef(null);

  return (
    <div className="mb-3">
      <StyledButton theme={theme} onClick={() => fileInputRef.current.click()} className="me-2">
        <FontAwesomeIcon icon={faUpload} /> Upload Image
      </StyledButton>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={onUpload}
        accept="image/*"
      />
      <StyledButton theme={theme} onClick={onMoodBoardToggle} className="me-2">
        <FontAwesomeIcon icon={faMagic} /> Mood Board
      </StyledButton>
      <StyledButton theme={theme} onClick={onColorPickerToggle}>
        <FontAwesomeIcon icon={faPalette} /> Color Picker
      </StyledButton>
      {showColorPicker && (
        <div style={{ marginTop: '1rem' }}>
          <ChromePicker
            color={selectedColor}
            onChange={onColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPhotoUploadComp;
