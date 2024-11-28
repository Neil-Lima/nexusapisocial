import styled from 'styled-components';

export const PropertyContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.backgroundColor};
`;

export const PropertyContent = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ViewToggle = styled.button`
    background: ${props => props.isMap ? props.theme.primaryColor : 'transparent'};
    color: ${props => props.isMap ? '#fff' : props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.primaryColor};
        color: #fff;
        transform: translateY(-2px);
    }
`;
