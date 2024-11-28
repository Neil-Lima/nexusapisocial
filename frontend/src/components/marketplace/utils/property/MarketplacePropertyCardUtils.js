'use client';
import { useState } from 'react';

export const useMarketplacePropertyCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorite(prev => !prev);
    };

    const handleCardClick = () => {
        // Navigation logic using Next.js router
    };

    const property = {
        id: 1,
        images: ['/property1.jpg', '/property2.jpg'],
        title: 'Apartamento Moderno',
        price: 'R$ 450.000',
        location: 'Jardins, São Paulo',
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        area: 120,
        status: 'Novo'
    };

    return {
        property,
        isFavorite,
        handleFavorite,
        handleCardClick
    };
};
