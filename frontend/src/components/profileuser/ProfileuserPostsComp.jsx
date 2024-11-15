'use client'
import React, { useState } from 'react';
import { Card, Form, Image } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo, faHeart, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledButton, PostCard, PostImage, ActionButton } from './styles/ProfileuserStyle';
import { initialPosts, handlePostAction } from './utils/ProfileuserUtils';

export function ProfileuserPostsComp() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <StyledCard>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={3} placeholder="O que você está pensando?" />
            </Form.Group>
            <div className="d-flex justify-content-between mt-2">
              <StyledButton theme={theme} size="sm">
                <FontAwesomeIcon icon={faImages} className="me-2" /> Foto
              </StyledButton>
              <StyledButton theme={theme} size="sm">
                <FontAwesomeIcon icon={faVideo} className="me-2" /> Vídeo
              </StyledButton>
              <StyledButton theme={theme}>Publicar</StyledButton>
            </div>
          </Form>
        </Card.Body>
      </StyledCard>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <Image src={post.userImage} roundedCircle style={{width: '40px', height: '40px', marginRight: '10px'}} />
              <div>
                <h6 className="mb-0">{post.user}</h6>
                <small style={{color: '#cccccc'}}>2 horas atrás</small>
              </div>
            </div>
            <Card.Text>{post.content}</Card.Text>
            {post.image && <PostImage src={post.image} className="mb-3 rounded" />}
            <div>
              <ActionButton theme={theme} onClick={() => handlePostAction(post.id, 'likes', posts, setPosts)}>
                <FontAwesomeIcon icon={faHeart} /> {post.likes}
              </ActionButton>
              <ActionButton theme={theme} onClick={() => handlePostAction(post.id, 'comments', posts, setPosts)}>
                <FontAwesomeIcon icon={faComment} /> {post.comments}
              </ActionButton>
              <ActionButton theme={theme} onClick={() => handlePostAction(post.id, 'shares', posts, setPosts)}>
                <FontAwesomeIcon icon={faShareAlt} /> {post.shares}
              </ActionButton>
            </div>
          </Card.Body>
        </PostCard>
      ))}
    </>
  );
}
