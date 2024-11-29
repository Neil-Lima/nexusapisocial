"use client";
import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import {
  FilterContainer,
  FilterTitle,
  ButtonGroup,
} from "../../styles/property/MarketplacePropertyRoomFilterStyles";
import { useMarketplacePropertyRoomFilter } from "../../utils/property/MarketplacePropertyRoomFilterUtils";

function MarketplacePropertyRoomFilterComp() {
  const { theme } = useTheme();
  const { filters, handleFilterSelect } = useMarketplacePropertyRoomFilter();

  return (
    <FilterContainer theme={theme}>
      <ListGroup>
        <ListGroup.Item>
          <FilterTitle>Quartos</FilterTitle>
          <ButtonGroup>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={
                  filters.bedrooms === num ? "primary" : "outline-primary"
                }
                onClick={() => handleFilterSelect("bedrooms", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <FilterTitle>Banheiros</FilterTitle>
          <ButtonGroup>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={
                  filters.bathrooms === num ? "primary" : "outline-primary"
                }
                onClick={() => handleFilterSelect("bathrooms", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <FilterTitle>Vagas</FilterTitle>
          <ButtonGroup>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={
                  filters.parking === num ? "primary" : "outline-primary"
                }
                onClick={() => handleFilterSelect("parking", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </FilterContainer>
  );
}

export default MarketplacePropertyRoomFilterComp;
