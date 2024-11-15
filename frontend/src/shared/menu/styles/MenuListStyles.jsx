'use client';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  margin-bottom: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  span {
    font-size: 16px;
    margin-left: 15px;
  }
`;

export const IconWrapper = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  box-shadow: ${props => props.theme.boxShadow};
`;
