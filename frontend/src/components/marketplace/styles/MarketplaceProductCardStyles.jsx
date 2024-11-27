import styled from 'styled-components';

export const ProductCard = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.viewMode === 'list' ? 'row' : 'column'};

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;

    .carousel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const ProductInfo = styled.div`
    padding: 1.5rem;
    color: white;

    h3 {
        margin: 0 0 1rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const PriceTag = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
        font-size: 1rem;
        margin-right: 0.25rem;
    }
`;

export const SellerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    h4 {
        margin: 0;
        font-size: 1rem;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
        margin-left: 0.5rem;
        font-size: 0.9rem;
        color: rgba(255,255,255,0.7);
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ActionButton = styled.button`
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        transform: translateY(-2px);
    }
`;

export const Badge = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: ${props => props.verified ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: white;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
