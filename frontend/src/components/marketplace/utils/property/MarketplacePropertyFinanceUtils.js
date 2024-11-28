"use client";
import { useState } from "react";

export const useMarketplacePropertyFinance = () => {
  const [calculationData, setCalculationData] = useState({
    propertyValue: "",
    downPayment: "",
    term: "",
    monthlyPayment: 0,
    totalInterest: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    // Implementar cálculo de financiamento
  };

  const financingOptions = [
    { bank: "Banco A", rate: 8.5, term: 360 },
    { bank: "Banco B", rate: 9.0, term: 360 },
    { bank: "Banco C", rate: 8.8, term: 360 },
  ];

  return {
    calculationData,
    handleInputChange,
    handleCalculate,
    financingOptions,
  };
};
