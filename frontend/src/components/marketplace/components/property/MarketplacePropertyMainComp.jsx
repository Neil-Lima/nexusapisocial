'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import MarketplacePropertyHeaderComp from './MarketplacePropertyHeaderComp';
import MarketplacePropertyGridComp from './MarketplacePropertyGridComp';
import MarketplacePropertyMapComp from './MarketplacePropertyMapComp';
import { PropertyContainer, PropertyContent, ViewToggle } from '../../styles/property/MarketplacePropertyMainStyles';
import { useMarketplacePropertyMain } from '../../utils/property/MarketplacePropertyMainUtils';

function MarketplacePropertyMainComp() {
    const { theme } = useTheme();
    const { viewMode, handleViewModeChange } = useMarketplacePropertyMain();

    return (
        <PropertyContainer theme={theme}>
            <MarketplacePropertyHeaderComp />
            <PropertyContent>
                <ViewToggle 
                    theme={theme}
                    isMap={viewMode === 'map'}
                    onClick={() => handleViewModeChange(viewMode === 'map' ? 'grid' : 'map')}
                >
                    {viewMode === 'map' ? 'Ver Lista' : 'Ver Mapa'}
                </ViewToggle>
                
                {viewMode === 'map' ? (
                    <MarketplacePropertyMapComp />
                ) : (
                    <MarketplacePropertyGridComp />
                )}
            </PropertyContent>
        </PropertyContainer>
    );
}

export default MarketplacePropertyMainComp;
