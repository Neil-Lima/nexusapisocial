'use client';
import styled from 'styled-components';

export const CardContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    transition: ${props => props.theme.transition};
    cursor: pointer;

    &:hover {
        transform: ${props => props.theme.buttonHoverTransform};
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const CardImage = styled.div`
    position: relative;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .status {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: ${props => props.theme.primaryColor};
        padding: 0.5rem 1rem;
        border-radius: 2rem;
    }

    .favorite {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0,0,0,0.5);
        border: none;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        color: white;
    }
`;

export const CardInfo = styled.div`
    padding: 1.5rem;

    h3 {
        margin: 0;
        color: ${props => props.theme.primaryColor};
        font-size: 1.5rem;
    }

    p {
        margin: 0.5rem 0;
        color: white;
    }

    span {
        color: rgba(255,255,255,0.7);
        font-size: 0.9rem;
    }
`;

export const CardFeatures = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255,255,255,0.8);
    }
`;
