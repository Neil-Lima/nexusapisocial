'use client';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartLine, faPercent } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FinanceContainer, Calculator, Results } from '../../styles/property/MarketplacePropertyFinanceStyles';
import { useMarketplacePropertyFinance } from '../../utils/property/MarketplacePropertyFinanceUtils';

function MarketplacePropertyFinanceComp() {
    const { theme } = useTheme();
    const { calculationData, handleCalculate, handleInputChange } = useMarketplacePropertyFinance();

    return (
        <FinanceContainer theme={theme}>
            <Calculator theme={theme}>
                <h3><FontAwesomeIcon icon={faCalculator} /> Simulador de Financiamento</h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Valor do Imóvel</Form.Label>
                        <Form.Control type="number" name="propertyValue" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Entrada</Form.Label>
                        <Form.Control type="number" name="downPayment" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prazo (anos)</Form.Label>
                        <Form.Control type="number" name="term" onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleCalculate}>
                        Calcular
                    </Button>
                </Form>
            </Calculator>
            <Results theme={theme}>
                <div className="result-item">
                    <FontAwesomeIcon icon={faPercent} />
                    <span>Parcela Mensal: R$ {calculationData.monthlyPayment}</span>
                </div>
            </Results>
        </FinanceContainer>
    );
}

export default MarketplacePropertyFinanceComp;
