'use client';
import { useState } from 'react';

export const useMarketplacePropertyHeader = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        propertyType: '',
        priceRange: { min: '', max: '' },
        transactionType: 'buy'
    });

    const [activeFilters, setActiveFilters] = useState([]);

    const propertyTypes = [
        { id: 'house', label: 'Casa' },
        { id: 'apartment', label: 'Apartamento' },
        { id: 'land', label: 'Terreno' },
        { id: 'commercial', label: 'Comercial' }
    ];

    const handleSearchChange = (value) => {
        setSearchParams(prev => ({
            ...prev,
            location: value
        }));
    };

    const handlePropertyTypeChange = (value) => {
        setSearchParams(prev => ({
            ...prev,
            propertyType: value
        }));
    };

    const handlePriceRangeChange = (type, value) => {
        setSearchParams(prev => ({
            ...prev,
            priceRange: {
                ...prev.priceRange,
                [type]: value
            }
        }));
    };

    const handleTransactionTypeChange = (type) => {
        setSearchParams(prev => ({
            ...prev,
            transactionType: type
        }));
    };

    const handleFilterAdd = (filter) => {
        setActiveFilters(prev => [...prev, filter]);
    };

    const handleFilterRemove = (filterId) => {
        setActiveFilters(prev => prev.filter(filter => filter.id !== filterId));
    };

    const handleSearch = () => {
        // Implementar lógica de busca
        console.log('Searching with params:', searchParams);
    };

    return {
        searchParams,
        activeFilters,
        propertyTypes,
        handleSearchChange,
        handlePropertyTypeChange,
        handlePriceRangeChange,
        handleTransactionTypeChange,
        handleFilterAdd,
        handleFilterRemove,
        handleSearch
    };
};
