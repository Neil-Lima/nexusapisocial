'use client';
import styled from 'styled-components';

export const Viewer3DContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 2rem;
`;

export const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  position: relative;

  .model-viewport {
    width: 100%;
    height: 100%;
  }
`;

export const ControlPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ViewModeButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const MaterialSelector = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
  }

  select {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;

    option {
      background: ${props => props.theme.cardBackground};
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

  .measurements-display {
    margin-top: 1rem;
    color: white;

    .measurement-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem;
      border-radius: ${props => props.theme.borderRadius};
      margin-bottom: 0.5rem;
    }
  }
`;

export const ViewOptions = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};

  button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const InfoOverlay = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  max-width: 300px;

  h3 {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: "•";
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`;
