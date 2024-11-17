'use client';
import styled, { keyframes } from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const StyledCard = styled(Card)`
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const SettingsButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};

  .filter-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .filter-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const FilterButton = styled.button`
  background: ${props => props.$active ? 
    `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
    'rgba(255, 255, 255, 0.1)'
  };
  border: none;
  padding: 8px 15px;
  color: ${props => props.theme.textColor};
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` : 
      'rgba(255, 255, 255, 0.2)'
    };
    transform: translateY(-2px);
  }
`;


export const CategoryBadge = styled.span`
  background: ${props => props.color};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 15px;
  color: ${props => props.theme.textColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const SortMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 5px;
  z-index: 1000;
  min-width: 200px;
`;

export const SortMenuItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 10px 15px;
  color: ${props => props.theme.textColor};
  text-align: left;
  transition: all 0.2s ease;
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${props => props.active && `
    background: ${props.theme.primaryColor};
    color: white;
  `}
`;

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  background: ${props => props.$unread ? 
    'rgba(255, 255, 255, 0.15)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;
  cursor: pointer;
`;


export const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 15px;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTime = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
`;

export const NotificationPreview = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  font-size: 0.9rem;
`;

export const NotificationActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  padding: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: translateY(-2px);
  }
`;

export const DateDivider = styled.div`
  text-align: center;
  position: relative;
  margin: 20px 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
  
  span {
    background: ${props => props.theme.backgroundColor};
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.6);
    position: relative;
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${props => props.theme.primaryColor};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;
export const FilterDropdown = styled.div`
  .dropdown-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: ${props => props.theme.textColor};
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover, &:focus {
      background: rgba(255, 255, 255, 0.2);
      color: ${props => props.theme.textColor};
    }
  }

  .dropdown-menu {
    background: ${props => props.theme.cardBackground};
    border: none;
    box-shadow: ${props => props.theme.boxShadow};
    
    .dropdown-item {
      color: ${props => props.theme.textColor};
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      
      &.active {
        background: ${props => props.theme.primaryColor};
      }
    }
  }
`;
export const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${props => props.theme.primaryColor};
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 12px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.boxShadow};
`;
