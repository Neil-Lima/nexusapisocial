'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import CreatePostComp from '@/shared/post/CreatePostComp';
import PostCardComp from '@/shared/post/PostCardComp';
import LoadMoreComp from '@/shared/loadmore/LoadMoreComp';
import { TabContent } from '../../styles/ProfileStyles';

const ProfilePostsComp = ({ posts }) => {
  const { theme } = useTheme();

  return (
    <TabContent theme={theme}>
      <CreatePostComp />
      {posts.map((post) => (
        <PostCardComp key={post.id} post={post} />
      ))}
      <LoadMoreComp />
    </TabContent>
  );
};

export default ProfilePostsComp;
