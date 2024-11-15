import { useState } from 'react';
import axios from 'axios';

export const useGalleryPhoto = () => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [moodBoardItems, setMoodBoardItems] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_cloudinary_upload_preset');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
          formData
        );
        setUploadedImage(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(moodBoardItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMoodBoardItems(items);
  };

  const handleAddMorePhotos = () => {
    setMoodBoardItems([...moodBoardItems, ...photos.slice(0, 3)]);
  };

  return {
    photos,
    selectedPhoto,
    showPhotoModal,
    showMoodBoard,
    showColorPicker,
    selectedColor,
    moodBoardItems,
    uploadedImage,
    handlePhotoSelect,
    handleImageUpload,
    handleColorChange,
    handleDragEnd,
    handleAddMorePhotos,
    setShowPhotoModal,
    setShowMoodBoard,
    setShowColorPicker
  };
};

export const initialPhotos = [
  { 
    id: 1, 
    url: 'https://picsum.photos/400/400?random=1', 
    caption: 'Beautiful sunset', 
    likes: 150, 
    comments: [
      { id: 1, author: 'John Doe', avatar: 'https://picsum.photos/30/30?random=10', text: 'Amazing view!', likes: 5, replies: [] },
      { id: 2, author: 'Jane Smith', avatar: 'https://picsum.photos/30/30?random=11', text: 'I wish I was there!', likes: 3, replies: [] }
    ], 
    shares: 20 
  },
  { 
    id: 2, 
    url: 'https://picsum.photos/400/400?random=2', 
    caption: 'City lights', 
    likes: 200, 
    comments: [
      { id: 3, author: 'Alice Johnson', avatar: 'https://picsum.photos/30/30?random=12', text: 'The city never sleeps!', likes: 7, replies: [] },
      { id: 4, author: 'Bob Williams', avatar: 'https://picsum.photos/30/30?random=13', text: 'Great shot!', likes: 2, replies: [] }
    ], 
    shares: 30 
  },
  { 
    id: 3, 
    url: 'https://picsum.photos/400/400?random=3', 
    caption: 'Mountain view', 
    likes: 180, 
    comments: [
      { id: 5, author: 'Emma Brown', avatar: 'https://picsum.photos/30/30?random=14', text: 'I love hiking there!', likes: 4, replies: [] },
      { id: 6, author: 'Michael Davis', avatar: 'https://picsum.photos/30/30?random=15', text: 'The air must be so fresh!', likes: 6, replies: [] }
    ], 
    shares: 25 
  },
  { 
    id: 4, 
    url: 'https://picsum.photos/400/400?random=4', 
    caption: 'Beach day', 
    likes: 220, 
    comments: [
      { id: 7, author: 'Sophia Wilson', avatar: 'https://picsum.photos/30/30?random=16', text: 'Perfect weather for a beach day!', likes: 8, replies: [] },
      { id: 8, author: 'Daniel Taylor', avatar: 'https://picsum.photos/30/30?random=17', text: 'The water looks so inviting!', likes: 5, replies: [] }
    ], 
    shares: 35 
  },
  { 
    id: 5, 
    url: 'https://picsum.photos/400/400?random=5', 
    caption: 'Forest adventure', 
    likes: 190, 
    comments: [
      { id: 9, author: 'Olivia Martinez', avatar: 'https://picsum.photos/30/30?random=18', text: 'I can almost smell the fresh air!', likes: 3, replies: [] },
      { id: 10, author: 'Ethan Anderson', avatar: 'https://picsum.photos/30/30?random=19', text: 'What a peaceful scene.', likes: 4, replies: [] }
    ], 
    shares: 28 
  },
  { 
    id: 6, 
    url: 'https://picsum.photos/400/400?random=6', 
    caption: 'Urban exploration', 
    likes: 210, 
    comments: [
      { id: 11, author: 'Ava Thomas', avatar: 'https://picsum.photos/30/30?random=20', text: 'The architecture is stunning!', likes: 6, replies: [] },
      { id: 12, author: 'Noah Clark', avatar: 'https://picsum.photos/30/30?random=21', text: 'I love exploring cities like this.', likes: 5, replies: [] }
    ], 
    shares: 32 
  }
];
