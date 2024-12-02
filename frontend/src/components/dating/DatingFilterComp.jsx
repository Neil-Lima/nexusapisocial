"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import { useDating } from "./utils/DatingUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faMapMarker,
  faVenusMars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  FilterContainer,
  FilterGroup,
  FilterSlider,
  FilterSelect,
  FilterButton,
} from "./styles/DatingStyles";

function DatingFilterComp() {
  const { theme } = useTheme();
  const {
    filters,
    handleAgeChange,
    handleDistanceChange,
    handleGenderChange,
    handleInterestsChange,
  } = useDating();

  return (
    <FilterContainer theme={theme}>
      <FilterGroup>
        <h4>
          <FontAwesomeIcon icon={faSliders} /> Age Range
        </h4>
        <FilterSlider
          type="range"
          min={18}
          max={100}
          value={filters.age}
          onChange={handleAgeChange}
          theme={theme}
        />
      </FilterGroup>

      <FilterGroup>
        <h4>
          <FontAwesomeIcon icon={faMapMarker} /> Distance
        </h4>
        <FilterSlider
          type="range"
          min={1}
          max={100}
          value={filters.distance}
          onChange={handleDistanceChange}
          theme={theme}
        />
      </FilterGroup>

      <FilterGroup>
        <h4>
          <FontAwesomeIcon icon={faVenusMars} /> Gender
        </h4>
        <FilterSelect
          value={filters.gender}
          onChange={(e) => handleGenderChange(e.target.value)}
          theme={theme}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <h4>
          <FontAwesomeIcon icon={faHeart} /> Interests
        </h4>
        <FilterSelect
          multiple
          value={filters.interests}
          onChange={handleInterestsChange}
          theme={theme}
        >
          <option value="sports">Sports</option>
          <option value="music">Music</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="art">Art</option>
        </FilterSelect>
      </FilterGroup>
    </FilterContainer>
  );
}

export default DatingFilterComp;
