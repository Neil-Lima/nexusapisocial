'use client';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MoodBoard, MoodBoardItem, StyledButton } from '../styles/GalleryPhotoStyles';

const GalleryPhotoMoodboardComp = ({ show, onHide, items, onDragEnd, onAddMore }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Mood Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="moodboard">
            {(provided) => (
              <MoodBoard {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <MoodBoardItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img src={item.url} alt={item.caption} />
                      </MoodBoardItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </MoodBoard>
            )}
          </Droppable>
        </DragDropContext>
        <StyledButton onClick={onAddMore}>
          Add More Photos
        </StyledButton>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryPhotoMoodboardComp;
