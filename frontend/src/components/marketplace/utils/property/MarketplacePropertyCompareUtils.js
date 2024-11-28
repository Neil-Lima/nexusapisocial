"use client";
import { useState } from "react";

export const useMarketplacePropertyCompare = () => {
  const [compareItems, setCompareItems] = useState([
    {
      id: 1,
      title: "Apartamento A",
      price: "R$ 450.000",
      area: 120,
      bedrooms: 3,
      bathrooms: 2,
      features: ["Piscina", "Academia"],
    },
    {
      id: 2,
      title: "Apartamento B",
      price: "R$ 380.000",
      area: 90,
      bedrooms: 2,
      bathrooms: 1,
      features: ["Churrasqueira"],
    },
  ]);

  const handleRemoveItem = (id) => {
    setCompareItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItem = (property) => {
    if (compareItems.length < 3) {
      setCompareItems((prev) => [...prev, property]);
    }
  };

  return {
    compareItems,
    handleRemoveItem,
    handleAddItem,
  };
};
