'use client';
import styled from 'styled-components';

export const StatsContainer = styled.div`
    padding: 2rem;
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};

    h3 {
        color: ${props => props.theme.primaryColor};
        margin-bottom: 1.5rem;
    }
`;

export const StatCard = styled.div`
    background: rgba(255,255,255,0.05);
    padding: 1.5rem;
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;
    transition: ${props => props.theme.transition};

    &:hover {
        transform: ${props => props.theme.buttonHoverTransform};
    }

    svg {
        font-size: 2rem;
        color: ${props => props.theme.primaryColor};
        margin-bottom: 1rem;
    }

    h4 {
        color: white;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    span {
        color: ${props => props.theme.primaryColor};
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const Chart = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    height: 300px;
`;
