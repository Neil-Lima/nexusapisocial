import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const TabsContainer = styled(Nav)`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 20px;
  
  .nav-link {
    color: white;
    border-radius: ${props => props.theme.borderRadius};
    
    &.active {
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    }
    
    &:hover:not(.active) {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const TabIcon = styled.span`
  margin-right: 8px;
`;
