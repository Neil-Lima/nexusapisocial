'use client';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTheme } from '@/context/ThemeContext';
import { OrganizerContainer, DraggableItem } from '../styles/GalleryPhotoStyles';

function GalleryPhotoOrganizer({ photos, onDragEnd }) {
  const { theme } = useTheme();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="photos" direction="horizontal">
        {(provided) => (
          <OrganizerContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            theme={theme}
          >
            {photos.map((photo, index) => (
              <Draggable 
                key={photo.id.toString()} 
                draggableId={photo.id.toString()} 
                index={index}
              >
                {(provided) => (
                  <DraggableItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    theme={theme}
                  >
                    <img src={photo.url} alt={photo.title} />
                  </DraggableItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </OrganizerContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default GalleryPhotoOrganizer;
