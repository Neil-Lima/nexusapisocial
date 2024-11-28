'use client';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
`;

export const Gallery = styled.div`
    height: 400px;

    .carousel {
        height: 100%;

        .carousel-item {
            height: 400px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export const InfoSection = styled.div`
    padding: 2rem;

    .nav-tabs {
        border-bottom: 1px solid rgba(255,255,255,0.1);
        
        .nav-link {
            color: rgba(255,255,255,0.7);
            border: none;
            padding: 1rem 1.5rem;

            &.active {
                color: ${props => props.theme.primaryColor};
                background: none;
                border-bottom: 2px solid ${props => props.theme.primaryColor};
            }
        }
    }
`;

export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255,255,255,0.8);
    }
`;
