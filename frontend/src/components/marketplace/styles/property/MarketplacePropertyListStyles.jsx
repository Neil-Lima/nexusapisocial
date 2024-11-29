"use client";
import styled from "styled-components";

export const ListContainer = styled.div`
  h5 {
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1.5rem;

    strong {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export const PropertyCard = styled.div`
  display: flex;
  background: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1rem;
  overflow: hidden;
  transition: ${(props) => props.theme.transition};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PropertyImage = styled.div`
  width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PropertyInfo = styled.div`
  flex: 1;
  padding: 1.5rem;
  color: ${(props) => props.theme.textColor};

  h4 {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 0.5rem;
  }

  h6 {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    button {
      background: ${(props) => props.theme.primaryColor};
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: white;
      transition: ${(props) => props.theme.transition};

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const PropertyFeatures = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .feature-badge {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;

    svg {
      color: ${(props) => props.theme.primaryColor};
      margin-right: 0.5rem;
    }
  }
`;
