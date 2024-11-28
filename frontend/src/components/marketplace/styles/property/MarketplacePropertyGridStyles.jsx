'use client';
import styled from 'styled-components';

export const GridContainer = styled.div`
    margin-top: 1.5rem;
`;

export const GridHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .btn-group {
        .btn {
            padding: 0.5rem 1rem;
            
            &:focus {
                box-shadow: none;
            }
        }
    }
`;

export const GridContent = styled.div`
    .row {
        margin: -0.75rem;
        
        > div {
            padding: 0.75rem;
        }
    }
`;

export const SortDropdown = styled.div`
    select {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: ${props => props.theme.borderRadius};
        padding: 0.5rem 2rem 0.5rem 1rem;
        
        &:focus {
            border-color: ${props => props.theme.primaryColor};
        }
    }
`;
