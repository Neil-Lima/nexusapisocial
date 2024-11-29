"use client";
import React from "react";
import { Card, Form } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import {
  FilterCard,
  FilterTitle,
  PriceInputGroup,
} from "../../styles/property/MarketplacePropertyPriceFilterStyles";
import { useMarketplacePropertyPriceFilter } from "../../utils/property/MarketplacePropertyPriceFilterUtils";

function MarketplacePropertyPriceFilterComp() {
  const { theme } = useTheme();
  const { priceRange, handlePriceChange } = useMarketplacePropertyPriceFilter();

  return (
    <FilterCard theme={theme}>
      <Card.Body>
        <FilterTitle>Preço do imóvel</FilterTitle>
        <Form>
          <PriceInputGroup>
            <Form.Group>
              <Form.Label>Mínimo</Form.Label>
              <Form.Control
                type="text"
                placeholder="R$ 0"
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Máximo</Form.Label>
              <Form.Control
                type="text"
                placeholder="R$ 0"
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
              />
            </Form.Group>
          </PriceInputGroup>
        </Form>
      </Card.Body>
    </FilterCard>
  );
}

export default MarketplacePropertyPriceFilterComp;
