'use client';
import styled from "styled-components";

export const FavoritesContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius};

  h3 {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .alerts {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    h4 {
      color: ${(props) => props.theme.primaryColor};
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const FavoritesList = styled.div`
  .row {
    margin: -0.75rem;

    > div {
      padding: 0.75rem;
    }
  }

  .alert-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 0.5rem;
    color: white;
  }
`;
