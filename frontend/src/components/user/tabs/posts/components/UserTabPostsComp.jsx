'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  PostsContainer,
  PostCard,
  PostHeader,
  PostAvatar,
  PostInfo,
  PostContent,
  PostImage,
  PostActions
} from '../styles/UserTabPostsStyles';
import { useUserTabPosts } from '../utils/UserTabPostsUtils';
import CreatePostComp from '@/shared/post/create-card/components/CreatePostComp';
import PostCardComp from '@/shared/post/card/components/PostCardComp';

export default function UserTabPostsComp() {
  const { theme } = useTheme();
  const { posts, handleLike, handleComment, handleShare } = useUserTabPosts();

  return (
    <PostsContainer>
      <CreatePostComp/>
      <PostCardComp/>
    </PostsContainer>
  );
}
