'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { useDating } from './utils/DatingUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  LocationContainer,
  LocationSearch,
  LocationMap,
  LocationInfo
} from './styles/DatingStyles';

function DatingLocationComp() {
  const { theme } = useTheme();
  const {
    userLocation,
    searchLocation,
    handleLocationSearch,
    handleLocationSelect,
    handleCurrentLocation
  } = useDating();

  return (
    <LocationContainer theme={theme}>
      <LocationSearch theme={theme}>
        <FontAwesomeIcon icon={faSearch} />
        <input
  type="text"
  value={searchLocation}
  onChange={(e) => handleLocationSearch(e.target.value)}
  placeholder="Search location..."
/>
        <button onClick={handleCurrentLocation}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Current Location
        </button>
      </LocationSearch>

      <LocationMap theme={theme}>
        {/* Integração com Google Maps ou similar */}
      </LocationMap>

      <LocationInfo theme={theme}>
        <h4>Your Location</h4>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {userLocation.address}
        </p>
      </LocationInfo>
    </LocationContainer>
  );
}

export default DatingLocationComp;
