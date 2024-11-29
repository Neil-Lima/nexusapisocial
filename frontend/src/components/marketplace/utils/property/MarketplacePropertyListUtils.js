"use client";
import { useState } from "react";

export const useMarketplacePropertyList = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Apartamento Moderno",
      city: "Belém",
      address: "Umarizal, Rua dos Pariquis",
      description: "Lindo apartamento com vista para o rio",
      image: "/images/property1.jpg",
      features: ["3 Quartos", "2 Banheiros", "2 Vagas", "120m²"],
    },
  ]);

  const handleContact = (propertyId) => {
    console.log("Contacting about property:", propertyId);
  };

  const handleMessage = (propertyId) => {
    console.log("Opening chat for property:", propertyId);
  };

  return {
    properties,
    handleContact,
    handleMessage,
  };
};
