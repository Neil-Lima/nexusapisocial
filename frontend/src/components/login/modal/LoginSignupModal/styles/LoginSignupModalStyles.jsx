'use client'

import styled from 'styled-components';
import { Modal, Button, Form } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const GradientText = styled.span`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledFormControl = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const StyledFormSelect = styled(Form.Select)`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};

  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  appearance: none;
  padding-right: 2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M0 0l4 4 4-4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 8px 8px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    color: white;
  }

  option {
    background-color: ${props => props.theme.primaryColor};
    color: white;
  }
`;

export const StyledFormLabel = styled(Form.Label)`
  color: white;
  font-weight: bold;
`;
