'use client';
import styled from 'styled-components';

export const BlueprintContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 2rem;
`;

export const ViewerPanel = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;

  .blueprint-canvas {
    width: 100%;
    height: 100%;
  }
`;

export const ToolsPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LayerSelector = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    margin-bottom: 0.5rem;
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }
`;

export const MeasurementTools = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  .measurements-list {
    margin-top: 1rem;
    
    .measurement-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      margin-bottom: 0.5rem;
    }
  }
`;

export const AnnotationTools = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  .annotations-list {
    margin-top: 1rem;

    .annotation-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ZoomControls = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  span {
    color: white;
    font-weight: bold;
  }
`;

export const InfoPanel = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  color: white;

  h3 {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 1rem;
  }

  .info-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      span {
        color: rgba(255, 255, 255, 0.7);
      }

      strong {
        color: white;
      }
    }
  }
`;
