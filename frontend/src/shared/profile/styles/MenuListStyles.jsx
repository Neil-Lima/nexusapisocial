'use client';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const StyledListGroup = styled(ListGroup)`
  margin-bottom: 1.5rem;
`;

export const StyledListGroupItem = styled(ListGroup.Item)`
  background-color: transparent;
  color: #ffffff;
  padding: 15px 0;
  display: flex;
  align-items: center;
  border: none;
`;

export const IconWrapper = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const MenuText = styled.span`
  font-size: 18px;
  color: #ffffff;
`;
