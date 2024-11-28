'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FavoritesContainer, FavoritesList } from '../../styles/property/MarketplacePropertyFavoritesStyles';
import { useMarketplacePropertyFavorites } from '../../utils/property/MarketplacePropertyFavoritesUtils';
import MarketplacePropertyCardComp from './MarketplacePropertyCardComp';

function MarketplacePropertyFavoritesComp() {
    const { theme } = useTheme();
    const { favorites, alerts, handleRemoveFavorite } = useMarketplacePropertyFavorites();

    return (
        <FavoritesContainer theme={theme}>
            <h3><FontAwesomeIcon icon={faHeart} /> Meus Favoritos</h3>
            <FavoritesList theme={theme}>
                <Row>
                    {favorites.map(property => (
                        <Col key={property.id} lg={4} md={6} sm={12}>
                            <MarketplacePropertyCardComp 
                                property={property}
                                onRemove={() => handleRemoveFavorite(property.id)}
                            />
                        </Col>
                    ))}
                </Row>
            </FavoritesList>
            <div className="alerts">
                <h4><FontAwesomeIcon icon={faBell} /> Alertas de Preço</h4>
                {alerts.map(alert => (
                    <div key={alert.id} className="alert-item">
                        {alert.message}
                    </div>
                ))}
            </div>
        </FavoritesContainer>
    );
}

export default MarketplacePropertyFavoritesComp;
