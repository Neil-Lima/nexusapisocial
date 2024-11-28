'use client';
import styled from 'styled-components';

export const MapContainer = styled.div`
    position: relative;
    height: 500px;
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    margin-bottom: 2rem;

    .map {
        width: 100%;
        height: 100%;
    }
`;

export const MapControls = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;

    button {
        background: rgba(0,0,0,0.7);
        border: none;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 0.5rem;
        transition: ${props => props.theme.transition};

        &:hover {
            background: ${props => props.theme.primaryColor};
        }
    }
`;

export const MapOverlay = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(0,0,0,0.7);
    padding: 1rem;
    border-radius: ${props => props.theme.borderRadius};

    .legend {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
    }
`;
