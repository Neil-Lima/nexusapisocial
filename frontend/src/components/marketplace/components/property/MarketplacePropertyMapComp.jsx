'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { MapContainer, MapControls, MapOverlay } from '../../styles/property/MarketplacePropertyMapStyles';
import { useMarketplacePropertyMap } from '../../utils/property/MarketplacePropertyMapUtils';

function MarketplacePropertyMapComp() {
    const { theme } = useTheme();
    const { mapRef, isFullscreen, handleToggleFullscreen, handleMarkerClick } = useMarketplacePropertyMap();

    return (
        <MapContainer theme={theme}>
            <MapControls theme={theme}>
                <button onClick={handleToggleFullscreen}>
                    <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
                </button>
            </MapControls>
            <div ref={mapRef} className="map">
                {/* Map Integration */}
            </div>
            <MapOverlay theme={theme}>
                <div className="legend">
                    <span><FontAwesomeIcon icon={faMapMarker} /> Imóveis disponíveis</span>
                </div>
            </MapOverlay>
        </MapContainer>
    );
}

export default MarketplacePropertyMapComp;
