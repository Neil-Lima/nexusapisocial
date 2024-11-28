import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    box-shadow: ${props => props.theme.boxShadow};
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    border: 4px solid ${props => props.theme.primaryColor};
`;

export const ProfileInfo = styled.div`
    margin-bottom: 1.5rem;
`;

export const ProfileName = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ProfileRole = styled.p`
    color: rgba(255, 255, 255, 0.7);
    margin: 0.5rem 0 0;
`;

export const ProfileStats = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;

    .value {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${props => props.theme.primaryColor};
    }

    .label {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.7);
    }
`;
