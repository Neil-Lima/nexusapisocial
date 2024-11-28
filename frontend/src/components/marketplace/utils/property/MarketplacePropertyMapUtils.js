'use client';
import { useRef, useState } from 'react';

export const useMarketplacePropertyMap = () => {
    const mapRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleToggleFullscreen = () => {
        setIsFullscreen(prev => !prev);
    };

    const handleMarkerClick = (propertyId) => {
        setSelectedMarker(propertyId);
    };

    const mapConfig = {
        center: { lat: -23.550520, lng: -46.633308 },
        zoom: 12,
        markers: [
            { id: 1, lat: -23.550520, lng: -46.633308, price: 'R$ 450.000' },
            { id: 2, lat: -23.555520, lng: -46.638308, price: 'R$ 380.000' }
        ]
    };

    return {
        mapRef,
        isFullscreen,
        selectedMarker,
        handleToggleFullscreen,
        handleMarkerClick,
        mapConfig
    };
};
