'use client';
import styled from 'styled-components';

export const FinancingContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
`;

export const CalculatorSection = styled.div`
  margin-bottom: 2rem;
`;

export const SimulationForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  .form-group {
    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input, select {
      width: 100%;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: ${props => props.theme.borderRadius};
      color: white;

      &:focus {
        outline: none;
        border-color: ${props => props.theme.primaryColor};
      }
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const ResultsSection = styled.div`
  margin-bottom: 2rem;

  .summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};

    .result-item {
      text-align: center;

      span {
        display: block;
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.7);
      }

      h3 {
        font-size: 1.8rem;
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const BankOptions = styled.div`
  margin-bottom: 2rem;

  .banks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

export const BankCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.selected ? props.theme.primaryColor : 'transparent'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .bank-info {
    margin-bottom: 1rem;

    h4 {
      margin-bottom: 0.5rem;
    }

    .rate {
      display: block;
      color: ${props => props.theme.primaryColor};
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    .monthly {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .feature-tag {
      padding: 0.25rem 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
      font-size: 0.8rem;
    }
  }
`;

export const ComparisonTable = styled.div`
  margin-bottom: 2rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    th {
      background: rgba(255, 255, 255, 0.1);
      font-weight: bold;
    }

    tr:hover td {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const DocumentsList = styled.div`
  .documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;

    .document-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.primaryColor};
        border-radius: 50%;
      }

      .doc-info {
        flex: 1;

        h4 {
          margin-bottom: 0.25rem;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .download-btn {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: ${props => props.theme.borderRadius};
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: ${props => props.theme.primaryColor};
        }
      }
    }
  }
`;
