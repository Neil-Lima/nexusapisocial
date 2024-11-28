'use client';
import styled from "styled-components";

export const CompareContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius};

  h3 {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 1.5rem;
  }
`;

export const CompareTable = styled.div`
  overflow-x: auto;

  table {
    color: white;

    th {
      min-width: 200px;
      background: rgba(255, 255, 255, 0.05);
      position: relative;
      padding: 1rem;

      button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);

        &:hover {
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }

    td {
      padding: 1rem;
      border-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
