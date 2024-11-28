'use client';
import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    color: white;

    h3 {
        margin-bottom: 2rem;
        font-weight: 600;
    }
`;

export const CategoryCard = styled.div`
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const IconWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    svg {
        font-size: 24px;
        color: white;
    }

    ${CategoryCard}:hover & {
        background: rgba(255,255,255,0.2);
        transform: scale(1.1);
    }
`;

export const CategoryInfo = styled.div`
    h4 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
    }

    span {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.7);
    }
`;

export const ViewAllButton = styled.button`
    background: none;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 25px;
    color: white;
    padding: 1rem 2rem;
    margin-top: 2rem;
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;
