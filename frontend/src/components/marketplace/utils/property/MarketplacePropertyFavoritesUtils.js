"use client";
import { useState } from "react";

export const useMarketplacePropertyFavorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Apartamento Luxo",
      price: "R$ 850.000",
      location: "Jardins",
      image: "/apt1.jpg",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
    },
    {
      id: 2,
      title: "Casa Moderna",
      price: "R$ 1.200.000",
      location: "Morumbi",
      image: "/house1.jpg",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
    },
  ]);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      propertyId: 1,
      message: "Preço reduzido em 5%",
      date: "2024-01-15",
    },
    {
      id: 2,
      propertyId: 2,
      message: "Nova propriedade similar disponível",
      date: "2024-01-16",
    },
  ]);

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddAlert = (propertyId, type) => {
    // Implementar lógica de alertas
  };

  return {
    favorites,
    alerts,
    handleRemoveFavorite,
    handleAddAlert,
  };
};
