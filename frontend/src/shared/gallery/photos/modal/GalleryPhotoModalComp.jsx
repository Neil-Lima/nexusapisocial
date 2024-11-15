'use client';
import React, { useState } from 'react';
import { Row, Col, Form, InputGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { StyledModal, ModalImage, ActionButton, CommentSection, Comment, UserAvatar } from '../styles/GalleryPhotoStyles';
import { useTheme } from '@/context/ThemeContext';

const GalleryPhotoModalComp = ({ show, photo, onHide }) => {
  const { theme } = useTheme();
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: photo.comments.length + 1,
        author: 'You',
        avatar: 'https://picsum.photos/30/30?random=22',
        text: newComment,
        likes: 0,
        replies: []
      };
      photo.comments.push(newCommentObj);
      setNewComment('');
    }
  };

  return (
    <StyledModal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da Foto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {photo && (
          <Row>
            <Col md={6}>
              <ModalImage src={photo.url} alt={photo.caption} fluid />
            </Col>
            <Col md={6}>
              <h4>{photo.caption}</h4>
              <div className="d-flex justify-content-between mt-3 mb-4">
                <ActionButton theme={theme}>
                  <FontAwesomeIcon icon={faHeart} /> {photo.likes}
                </ActionButton>
                <ActionButton theme={theme}>
                  <FontAwesomeIcon icon={faComment} /> {photo.comments.length}
                </ActionButton>
                <ActionButton theme={theme}>
                  <FontAwesomeIcon icon={faShareAlt} /> {photo.shares}
                </ActionButton>
              </div>
              <CommentSection>
                {photo.comments.map((comment) => (
                  <Comment key={comment.id}>
                    <div className="comment-header">
                      <UserAvatar src={comment.avatar} alt={comment.author} />
                      <span className="comment-author">{comment.author}</span>
                    </div>
                    <div className="comment-text">{comment.text}</div>
                    <div className="comment-actions">
                      <ActionButton theme={theme}>
                        <FontAwesomeIcon icon={faHeart} /> {comment.likes}
                      </ActionButton>
                    </div>
                  </Comment>
                ))}
              </CommentSection>
              <Form onSubmit={handleCommentSubmit}>
                <InputGroup>
                  <Form.Control
                    placeholder="Adicione um comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: 'none'}}
                  />
                  <ActionButton type="submit" theme={theme}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </ActionButton>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </StyledModal>
  );
};

export default GalleryPhotoModalComp;
