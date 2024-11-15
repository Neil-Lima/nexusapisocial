'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import GalleryPhotoGridComp from '@/shared/gallery/photos/grid/GalleryPhotoGridComp';
import GalleryPhotoModalComp from '@/shared/gallery/photos/modal/GalleryPhotoModalComp';
import GalleryPhotoUploadComp from '@/shared/gallery/photos/upload/GalleryPhotoUploadComp';
import GalleryPhotoMoodboardComp from '@/shared/gallery/photos/moodboard/GalleryPhotoMoodboardComp';
import ProfileCardComp from '@/shared/profile/ProfileCardComp';
import MenuListComp from '@/shared/menu/MenuListComp';
import { useGalleryPhoto } from '@/shared/gallery/photos/utils/GalleryPhotoUtils';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function GalleryPage() {
  const { theme } = useTheme();
  const {
    photos,
    selectedPhoto,
    showPhotoModal,
    showMoodBoard,
    showColorPicker,
    selectedColor,
    moodBoardItems,
    handlePhotoSelect,
    handleImageUpload,
    handleColorChange,
    handleDragEnd,
    handleAddMorePhotos,
    setShowPhotoModal,
    setShowMoodBoard,
    setShowColorPicker
  } = useGalleryPhoto();

  return (
    <>
    <NavMenuComp />
    <GradientBackground theme={theme}>
      
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileCardComp />
            <MenuListComp />
          </Col>
          <Col lg={9}>
            <GalleryPhotoUploadComp 
              onUpload={handleImageUpload}
              showColorPicker={showColorPicker}
              selectedColor={selectedColor}
              onColorPickerToggle={() => setShowColorPicker(!showColorPicker)}
              onColorChange={handleColorChange}
              onMoodBoardToggle={() => setShowMoodBoard(true)}
            />
            
            <GalleryPhotoGridComp 
              photos={photos} 
              onPhotoSelect={handlePhotoSelect}
            />

            <GalleryPhotoModalComp 
              show={showPhotoModal}
              photo={selectedPhoto}
              onHide={() => setShowPhotoModal(false)}
            />

            <GalleryPhotoMoodboardComp
              show={showMoodBoard}
              onHide={() => setShowMoodBoard(false)}
              items={moodBoardItems}
              onDragEnd={handleDragEnd}
              onAddMore={handleAddMorePhotos}
            />
          </Col>
        </Row>
      </Container>
    </GradientBackground>
    </>

  );
}
