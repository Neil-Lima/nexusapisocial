import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const EventsGrid = styled(Row)`
  margin: 20px 0;
  gap: 20px;
`;

export const GridContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
`;
