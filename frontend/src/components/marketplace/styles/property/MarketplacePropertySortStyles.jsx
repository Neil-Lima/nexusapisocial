"use client";
import styled from "styled-components";

export const SortContainer = styled.div`
  margin-bottom: 2rem;

  h5 {
    color: ${(props) => props.theme.textColor};
    text-align: right;
  }

  .form-select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.theme.textColor};

    &:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: ${(props) => props.theme.primaryColor};
      box-shadow: none;
    }
  }
`;

export const ViewToggle = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-left: 1rem;

  svg {
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    transition: ${(props) => props.theme.transition};

    &:hover {
      transform: ${(props) => props.theme.buttonHoverTransform};
    }

    &.active {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;
