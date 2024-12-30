'use client';
import styled from 'styled-components';
import { Navbar, Button, Form } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background: ${props => props.theme.cardBackground};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
`;

export const NavBrand = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primaryColor};
      transform: translateY(-2px);
    }
  }
`;

export const SearchInput = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    box-shadow: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const StyledButton = styled(Button)`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  
  &:hover {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})`};
  }
`;

export const SearchResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.cardBackground};
  border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  color: white;
  font-weight: 500;
`;

export const UserLocation = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;
