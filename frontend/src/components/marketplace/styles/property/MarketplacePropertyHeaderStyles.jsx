'use client';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SearchBar = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FilterGroup = styled.div`
    flex: 1;
    position: relative;

    svg {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${props => props.theme.primaryColor};
    }

    input, select {
        width: 100%;
        padding-left: 2.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: ${props => props.theme.borderRadius};
        
        &:focus {
            border-color: ${props => props.theme.primaryColor};
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
    }
`;
