'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faSmile, faPoll, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  CreatePostContainer,
  CreatePostHeader,
  CreatePostBody,
  CreatePostFooter,
  UserAvatar,
  PostInput,
  MediaButton,
  PostButton
} from '../styles/CreatePostCardStyles';
import { useCreatePost } from '../utils/CreatePostCardUtils';

function CreatePostComp() {
  const { theme } = useTheme();
  const {
    postText,
    setPostText,
    showEmojiPicker,
    setShowEmojiPicker,
    selectedMedia,
    handleMediaUpload,
    handleCreatePost,
    handleEmojiSelect,
    userAvatar
  } = useCreatePost();

  return (
    <CreatePostContainer theme={theme}>
      <CreatePostHeader>
        <UserAvatar src={userAvatar} alt="Your avatar" theme={theme} />
        <PostInput
          placeholder="O que você está pensando?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          theme={theme}
        />
      </CreatePostHeader>

      {selectedMedia && (
        <CreatePostBody theme={theme}>
          <img src={URL.createObjectURL(selectedMedia)} alt="Selected media" />
        </CreatePostBody>
      )}

      <CreatePostFooter>
        <div>
          <MediaButton onClick={() => document.getElementById('imageUpload').click()} theme={theme}>
            <FontAwesomeIcon icon={faImage} />
            <span>Foto</span>
          </MediaButton>
          <MediaButton onClick={() => document.getElementById('videoUpload').click()} theme={theme}>
            <FontAwesomeIcon icon={faVideo} />
            <span>Vídeo</span>
          </MediaButton>
          <MediaButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} theme={theme}>
            <FontAwesomeIcon icon={faSmile} />
            <span>Emoji</span>
          </MediaButton>
          <MediaButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} theme={theme}>
            <FontAwesomeIcon icon={faMicrophone} />
            <span>Audio</span>
          </MediaButton>
          <MediaButton theme={theme}>
            <FontAwesomeIcon icon={faPoll} />
            <span>Enquete</span>
          </MediaButton>
        </div>
        <PostButton 
          onClick={handleCreatePost} 
          disabled={!postText && !selectedMedia}
          theme={theme}
        >
          Publicar
        </PostButton>
      </CreatePostFooter>

      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleMediaUpload}
        hidden
      />
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        onChange={handleMediaUpload}
        hidden
      />
    </CreatePostContainer>
  );
}

export default CreatePostComp;
