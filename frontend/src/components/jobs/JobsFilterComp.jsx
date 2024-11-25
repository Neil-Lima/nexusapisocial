'use client';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { FilterCard, FilterSection } from './styles/JobsStyles';

export default function JobsFilterComp() {
  const { theme } = useTheme();

  return (
    <FilterCard theme={theme}>
      <FilterSection theme={theme}>
        <h5>Tipo de Contrato</h5>
        <Form.Check type="checkbox" label="CLT" />
        <Form.Check type="checkbox" label="PJ" />
        <Form.Check type="checkbox" label="Freelancer" />
      </FilterSection>

      <FilterSection theme={theme}>
        <h5>Experiência</h5>
        <Form.Check type="checkbox" label="Júnior" />
        <Form.Check type="checkbox" label="Pleno" />
        <Form.Check type="checkbox" label="Sênior" />
      </FilterSection>

      <FilterSection theme={theme}>
        <h5>Faixa Salarial</h5>
        <Form.Select>
          <option>Todas</option>
          <option>Até R$ 3.000</option>
          <option>R$ 3.000 - R$ 6.000</option>
          <option>R$ 6.000 - R$ 12.000</option>
          <option>Acima de R$ 12.000</option>
        </Form.Select>
      </FilterSection>
    </FilterCard>
  );
}
