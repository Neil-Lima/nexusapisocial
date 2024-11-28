'use client';
import { useState } from 'react';

export const useMarketplacePropertyAdvancedFilters = () => {
    const [filters, setFilters] = useState({
        priceRange: { min: 0, max: 1000000 },
        bedrooms: [],
        bathrooms: [],
        area: { min: 0, max: 500 },
        features: [],
        amenities: []
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const handlePriceChange = (type, value) => {
        setFilters(prev => ({
            ...prev,
            priceRange: {
                ...prev.priceRange,
                [type]: value
            }
        }));
    };

    const handleRatingChange = (rating) => {
        setFilters(prev => ({
            ...prev,
            rating: rating
        }));
    };

    const handleShippingChange = (option) => {
        setFilters(prev => ({
            ...prev,
            shipping: prev.shipping.includes(option)
                ? prev.shipping.filter(item => item !== option)
                : [...prev.shipping, option]
        }));
    };

    const handlePaymentChange = (option) => {
        setFilters(prev => ({
            ...prev,
            payments: prev.payments.includes(option)
                ? prev.payments.filter(item => item !== option)
                : [...prev.payments, option]
        }));
    };

    return {
        filters,
        handleFilterChange,
        handlePriceChange,
        handleRatingChange,
        handleShippingChange,
        handlePaymentChange
    };
};
