'use client';
import styled from 'styled-components';

export const FinanceContainer = styled.div`
    padding: 2rem;
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
`;

export const Calculator = styled.div`
    h3 {
        margin-bottom: 1.5rem;
        color: ${props => props.theme.primaryColor};
    }

    .form-group {
        margin-bottom: 1rem;
    }

    input {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        color: white;
    }
`;

export const Results = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    .result-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        color: white;

        svg {
            color: ${props => props.theme.primaryColor};
        }
    }
`;
