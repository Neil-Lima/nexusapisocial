"use client";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const TypeFilterCard = styled(Card)`
  background: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  margin-bottom: 24px;
  box-shadow: ${(props) => props.theme.boxShadow};

  .form-select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.theme.textColor};
    margin-top: 1rem;

    &:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: ${(props) => props.theme.primaryColor};
      box-shadow: none;
    }
  }
`;

export const TypeOption = styled.div`
  background: ${(props) =>
    props.active ? props.theme.primaryColor : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "#fff" : props.theme.textColor)};
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  &:hover {
    transform: ${(props) => props.theme.buttonHoverTransform};
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
  }

  h5 {
    margin: 0;
  }
`;
