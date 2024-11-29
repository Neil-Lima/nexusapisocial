'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import {
  FinancingContainer,
  CalculatorSection,
  ResultsSection,
  BankOptions,
  BankCard,
  ComparisonTable,
  DocumentsList,
  SimulationForm
} from '../../styles/property/MarketplacePropertyFinancingStyles';
import { useMarketplacePropertyFinancing } from '../../utils/property/MarketplacePropertyFinancingUtils';

function MarketplacePropertyFinancingComp() {
  const { theme } = useTheme();
  const {
    propertyValue,
    simulationData,
    bankOptions,
    requiredDocuments,
    handleValueChange,
    handleDownPaymentChange,
    handleTermChange,
    handleBankSelect,
    handleSimulate
  } = useMarketplacePropertyFinancing();

  return (
    <GradientBackground theme={theme}>
      <FinancingContainer theme={theme}>
        <CalculatorSection>
          <h2>Simulador de Financiamento</h2>
          <SimulationForm onSubmit={handleSimulate}>
            <div className="form-group">
              <label>Valor do Imóvel</label>
              <input
                type="number"
                value={propertyValue}
                onChange={handleValueChange}
                placeholder="R$ 0,00"
              />
            </div>
            <div className="form-group">
              <label>Entrada</label>
              <input
                type="number"
                onChange={handleDownPaymentChange}
                placeholder="R$ 0,00"
              />
            </div>
            <div className="form-group">
              <label>Prazo (anos)</label>
              <select onChange={handleTermChange}>
                <option value="20">20 anos</option>
                <option value="25">25 anos</option>
                <option value="30">30 anos</option>
              </select>
            </div>
            <button type="submit">Simular</button>
          </SimulationForm>
        </CalculatorSection>

        <ResultsSection>
          <div className="summary">
            <div className="result-item">
              <span>Valor da Parcela</span>
              <h3>R$ {simulationData.monthlyPayment}</h3>
            </div>
            <div className="result-item">
              <span>Taxa de Juros</span>
              <h3>{simulationData.interestRate}% a.a.</h3>
            </div>
            <div className="result-item">
              <span>CET</span>
              <h3>{simulationData.cet}% a.a.</h3>
            </div>
          </div>
        </ResultsSection>

        <BankOptions>
          <h3>Opções de Bancos</h3>
          <div className="banks-grid">
            {bankOptions.map((bank) => (
              <BankCard 
                key={bank.id}
                onClick={() => handleBankSelect(bank.id)}
                theme={theme}
                selected={bank.selected}
              >
                <img src={bank.logo} alt={bank.name} />
                <div className="bank-info">
                  <h4>{bank.name}</h4>
                  <span className="rate">{bank.rate}% a.a.</span>
                  <span className="monthly">R$ {bank.monthlyPayment}/mês</span>
                </div>
                <div className="features">
                  {bank.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </BankCard>
            ))}
          </div>
        </BankOptions>

        <ComparisonTable>
          <h3>Comparativo de Condições</h3>
          <table>
            <thead>
              <tr>
                <th>Banco</th>
                <th>Taxa de Juros</th>
                <th>Parcela</th>
                <th>Entrada Mínima</th>
                <th>Prazo Máximo</th>
                <th>Seguro</th>
              </tr>
            </thead>
            <tbody>
              {bankOptions.map((bank) => (
                <tr key={bank.id}>
                  <td>{bank.name}</td>
                  <td>{bank.rate}%</td>
                  <td>R$ {bank.monthlyPayment}</td>
                  <td>{bank.minDownPayment}%</td>
                  <td>{bank.maxTerm} anos</td>
                  <td>R$ {bank.insurance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ComparisonTable>

        <DocumentsList>
          <h3>Documentos Necessários</h3>
          <div className="documents-grid">
            {requiredDocuments.map((doc) => (
              <div key={doc.id} className="document-item">
                <div className="icon">{doc.icon}</div>
                <div className="doc-info">
                  <h4>{doc.name}</h4>
                  <p>{doc.description}</p>
                </div>
                <button className="download-btn">
                  Baixar Modelo
                </button>
              </div>
            ))}
          </div>
        </DocumentsList>
      </FinancingContainer>
    </GradientBackground>
  );
}

export default MarketplacePropertyFinancingComp;
