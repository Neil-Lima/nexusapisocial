'use client';
import styled from 'styled-components';

export const FiltersContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const FilterSection = styled.div`
    margin-bottom: 1rem;

    .form-check {
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .form-range {
        width: 100%;
    }

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const RangeSlider = styled.div`
    padding: 1rem 0;

    .values {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
    }
`;
