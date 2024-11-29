'use client'
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const AreaFilterCard = styled(Card)`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    margin-bottom: 24px;
    box-shadow: ${props => props.theme.boxShadow};

    h4 {
        color: ${props => props.theme.textColor};
        margin-bottom: 1.5rem;
        text-align: center;
    }

    h5 {
        color: ${props => props.theme.textColor};
        font-size: 1rem;
    }
`;

export const AreaInputGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;

    .form-control {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: ${props => props.theme.textColor};
        
        &:focus {
            background: rgba(255, 255, 255, 0.15);
            border-color: ${props => props.theme.primaryColor};
            box-shadow: none;
        }
    }
`;
