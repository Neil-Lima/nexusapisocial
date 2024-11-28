'use client';
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar, faRuler, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { CardContainer, CardImage, CardInfo, CardFeatures } from '../../styles/property/MarketplacePropertyCardStyles';
import { useMarketplacePropertyCard } from '../../utils/property/MarketplacePropertyCardUtils';

function MarketplacePropertyCardComp() {
    const { theme } = useTheme();
    const { property, handleFavorite, handleCardClick } = useMarketplacePropertyCard();

    return (
        <CardContainer theme={theme} onClick={handleCardClick}>
            <CardImage theme={theme}>
                <img src={property.images[0]} alt={property.title} />
                <Badge className="status">{property.status}</Badge>
                <button className="favorite" onClick={handleFavorite}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </CardImage>
            <CardInfo theme={theme}>
                <h3>{property.price}</h3>
                <p>{property.title}</p>
                <span>{property.location}</span>
                <CardFeatures theme={theme}>
                    <div><FontAwesomeIcon icon={faBed} /> {property.bedrooms}</div>
                    <div><FontAwesomeIcon icon={faBath} /> {property.bathrooms}</div>
                    <div><FontAwesomeIcon icon={faCar} /> {property.parking}</div>
                    <div><FontAwesomeIcon icon={faRuler} /> {property.area}m²</div>
                </CardFeatures>
            </CardInfo>
        </CardContainer>
    );
}

export default MarketplacePropertyCardComp;
