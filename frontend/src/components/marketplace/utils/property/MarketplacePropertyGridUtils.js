'use client';
import { useState } from 'react';

export const useMarketplacePropertyGrid = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: 'Apartamento Moderno',
            price: 450000,
            location: 'Jardins, São Paulo',
            bedrooms: 3,
            bathrooms: 2,
            area: 120,
            images: ['/property1.jpg', '/property2.jpg'],
            status: 'Disponível'
        },
        {
            id: 2,
            title: 'Casa com Piscina',
            price: 850000,
            location: 'Alphaville, São Paulo',
            bedrooms: 4,
            bathrooms: 3,
            area: 280,
            images: ['/property3.jpg', '/property4.jpg'],
            status: 'Novo'
        }
    ]);

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    const handleSortChange = (sortType) => {
        // Implementar lógica de ordenação
    };

    const handlePageChange = (page) => {
        // Implementar lógica de paginação
    };

    return {
        viewMode,
        properties,
        handleViewChange,
        handleSortChange,
        handlePageChange
    };
};
