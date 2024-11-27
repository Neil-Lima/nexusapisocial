'use client';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
    ProductCard,
    ImageContainer,
    ProductInfo,
    PriceTag,
    SellerInfo,
    ActionButtons,
    ActionButton,
    Badge,
    Rating
} from '../styles/MarketplaceProductCardStyles';
import { useMarketplaceProductCard } from '../utils/MarketplaceProductCardUtils';

function MarketplaceProductCardComp({ product, viewMode }) {
    const { theme } = useTheme();
    const { handleLike, handleComment, handleShare } = useMarketplaceProductCard();

    return (
        <ProductCard theme={theme} viewMode={viewMode}>
            <ImageContainer>
                <Carousel interval={null}>
                    {product.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img src={image} alt={`${product.title} - ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                {product.verified && (
                    <Badge verified theme={theme}>
                        <FontAwesomeIcon icon={faCheck} /> Verificado
                    </Badge>
                )}
            </ImageContainer>

            <ProductInfo>
                <h3>{product.title}</h3>
                <PriceTag theme={theme}>
                    <span>R$</span>
                    {product.price.toLocaleString('pt-BR')}
                </PriceTag>
                
                <SellerInfo>
                    <img src={product.seller.avatar} alt={product.seller.name} />
                    <div>
                        <h4>{product.seller.name}</h4>
                        <Rating>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon 
                                    key={index}
                                    icon={faStar}
                                    color={index < product.rating ? '#ffc107' : '#e4e5e9'}
                                />
                            ))}
                            <span>({product.reviews})</span>
                        </Rating>
                    </div>
                </SellerInfo>

                <ActionButtons>
                    <ActionButton theme={theme} onClick={() => handleLike(product.id)}>
                        <FontAwesomeIcon icon={faHeart} />
                    </ActionButton>
                    <ActionButton theme={theme} onClick={() => handleComment(product.id)}>
                        <FontAwesomeIcon icon={faComment} />
                    </ActionButton>
                    <ActionButton theme={theme} onClick={() => handleShare(product.id)}>
                        <FontAwesomeIcon icon={faShare} />
                    </ActionButton>
                </ActionButtons>
            </ProductInfo>
        </ProductCard>
    );
}

export default MarketplaceProductCardComp;
