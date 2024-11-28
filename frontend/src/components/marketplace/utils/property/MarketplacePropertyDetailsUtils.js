"use client";
import { useState } from "react";

export const useMarketplacePropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const property = {
    images: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
    features: [
      "Piscina",
      "Academia",
      "Churrasqueira",
      "Playground",
      "Segurança 24h",
    ],
    documents: ["Escritura", "IPTU Regular", "Certidão Negativa"],
    marketAnalysis: {
      priceHistory: [],
      regionComparison: [],
      forecast: [],
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    property,
    activeTab,
    handleTabChange,
  };
};
