'use client';
import styled from 'styled-components';

export const ContactContainer = styled.div`
    padding: 2rem;
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
`;

export const ContactForm = styled.div`
    h3 {
        margin-bottom: 1.5rem;
        color: ${props => props.theme.primaryColor};
    }

    .form-group {
        margin-bottom: 1rem;
    }

    input, textarea {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        color: white;

        &:focus {
            background: rgba(255,255,255,0.15);
            border-color: ${props => props.theme.primaryColor};
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
    }
`;

export const ContactOptions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;

    button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
    }
`;
