import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const MainContainer = styled(Container)`
  padding: 20px;
`;

export const HeaderSection = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
  color: white;
`;

export const SearchSection = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 15px;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
`;
