"use client";
import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 2rem;

  .input-group {
    .form-control {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: ${(props) => props.theme.textColor};

      &:focus {
        background: rgba(255, 255, 255, 0.15);
        border-color: ${(props) => props.theme.primaryColor};
        box-shadow: none;
      }
    }

    .btn {
      background: ${(props) => props.theme.primaryColor};
      border: none;
      transition: ${(props) => props.theme.transition};

      &:hover {
        transform: ${(props) => props.theme.buttonHoverTransform};
      }
    }
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

export const LocationBadge = styled.span`
  background: ${(props) => props.theme.primaryColor};
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: ${(props) => props.theme.buttonHoverTransform};
    background: ${(props) => props.theme.secondaryColor};
  }
`;
