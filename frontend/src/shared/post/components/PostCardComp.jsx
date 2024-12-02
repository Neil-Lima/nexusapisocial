'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  PostContainer,
  PostHeader,
  PostBody,
  PostFooter,
  UserAvatar,
  UserInfo,
  PostActions,
  ActionButton,
  PostImage,
  PostText,
  CommentSection,
  CommentInput,
  PostDropdown
} from '../styles/PostCardStyles';
import { usePostCard } from '../utils/PostCardUtils';

function PostCardComp() {
  const { theme } = useTheme();
  const {
    posts,
    handleLike,
    handleComment,
    handleShare,
    handlePostOptions,
    isLiked,
    commentText,
    setCommentText,
    showComments,
    setShowComments
  } = usePostCard();

  return (
    <>
      {posts.map((post) => (
        <PostContainer key={post.id} theme={theme}>
          <PostHeader>
            <UserAvatar src={post.userAvatar} alt={post.userName} theme={theme} />
            <UserInfo theme={theme}>
              <h6>{post.userName}</h6>
              <small>{post.timestamp}</small>
            </UserInfo>
            <PostDropdown theme={theme}>
              <FontAwesomeIcon icon={faEllipsisV} onClick={handlePostOptions} />
            </PostDropdown>
          </PostHeader>

          <PostBody>
            <PostText theme={theme}>{post.content}</PostText>
            {post.image && <PostImage src={post.image} alt="Post content" theme={theme} />}
          </PostBody>

          <PostFooter>
            <PostActions>
              <ActionButton 
                onClick={handleLike} 
                $isActive={isLiked}
                theme={theme}
              >
                <FontAwesomeIcon icon={faHeart} />
                <span>{post.likes} Curtidas</span>
              </ActionButton>
              <ActionButton 
                onClick={() => setShowComments(!showComments)}
                theme={theme}
              >
                <FontAwesomeIcon icon={faComment} />
                <span>{post.comments.length} Comentários</span>
              </ActionButton>
              <ActionButton 
                onClick={handleShare}
                theme={theme}
              >
                <FontAwesomeIcon icon={faShare} />
                <span>Compartilhar</span>
              </ActionButton>
            </PostActions>

            {showComments && (
              <CommentSection theme={theme}>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <UserAvatar src={comment.userAvatar} alt={comment.userName} theme={theme} />
                    <div className="comment-content">
                      <h6>{comment.userName}</h6>
                      <p>{comment.content}</p>
                      <small>{comment.timestamp}</small>
                    </div>
                  </div>
                ))}
                <CommentInput theme={theme}>
                  <UserAvatar src="/your-avatar.jpg" alt="Your avatar" theme={theme} />
                  <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleComment();
                    }}
                  />
                </CommentInput>
              </CommentSection>
            )}
          </PostFooter>
        </PostContainer>
      ))}
    </>
  );
}

export default PostCardComp;
