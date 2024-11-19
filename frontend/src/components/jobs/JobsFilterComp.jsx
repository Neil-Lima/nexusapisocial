'use client';
import React, { useState } from 'react';
import { Form, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSave, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FilterSection, StyledForm, StyledSelect, StyledButton, FilterGroup } from './styles/JobsStyle';
import { handleFilterChange, handleIndustryFilter, applyFilters } from './utils/JobsUtils';

function JobsFilterComp({ filters, setFilters, jobs, setFilteredJobs, setCurrentPage, userProfile }) {
  const { theme } = useTheme();
  const [savedFilters, setSavedFilters] = useState([]);
  const [showSavedFilters, setShowSavedFilters] = useState(false);

  const industryOptions = {
    'Tecnologia': ['Desenvolvimento', 'Infraestrutura', 'Dados', 'Produto'],
    'Saúde': ['Medicina', 'Enfermagem', 'Psicologia', 'Farmácia'],
    'Educação': ['Ensino', 'Coordenação', 'EAD', 'Pesquisa'],
    'Finanças': ['Contabilidade', 'Investimentos', 'Auditoria', 'Controladoria'],
    'Marketing': ['Digital', 'Branding', 'Conteúdo', 'Performance'],
    'Engenharia': ['Civil', 'Mecânica', 'Elétrica', 'Produção'],
    'Direito': ['Empresarial', 'Trabalhista', 'Tributário', 'Civil'],
    'Vendas': ['Inside Sales', 'Comercial', 'Key Account', 'Varejo'],
    'RH': ['Recrutamento', 'T&D', 'BP', 'Remuneração'],
    'Logística': ['Supply Chain', 'Transportes', 'Armazenagem', 'Distribuição']
  };

  const experienceLevels = {
    'Estágio': '0-1 ano',
    'Júnior': '1-3 anos',
    'Pleno': '3-5 anos',
    'Sênior': '5-8 anos',
    'Especialista': '8+ anos',
    'Gerência': 'Experiência em gestão',
    'Diretoria': 'Experiência executiva'
  };

  const contractTypes = {
    'CLT': 'Regime CLT',
    'PJ': 'Pessoa Jurídica',
    'Temporário': 'Contrato temporário',
    'Freelancer': 'Trabalho por projeto',
    'Estágio': 'Contrato de estágio',
    'Trainee': 'Programa trainee'
  };

  const workModels = {
    'Presencial': 'Trabalho no escritório',
    'Remoto': 'Home office integral',
    'Híbrido': 'Modelo flexível',
    'Flexível': 'Horários flexíveis'
  };

  return (
    <FilterSection theme={theme}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 style={{color: '#ffffff'}}>Filtros Avançados</h4>
        <div>
          <StyledButton
            variant="outline-light"
            size="sm"
            onClick={() => setShowSavedFilters(!showSavedFilters)}
          >
            <FontAwesomeIcon icon={faHistory} /> Salvos
          </StyledButton>
        </div>
      </div>

      <StyledForm>
        <Accordion defaultActiveKey="0">
          {/* Área de Atuação */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Área de Atuação</Accordion.Header>
            <Accordion.Body>
              <FilterGroup>
                {Object.entries(industryOptions).map(([industry, specialties]) => (
                  <div key={industry}>
                    <Form.Check
                      type="checkbox"
                      label={industry}
                      checked={filters.industry.includes(industry)}
                      onChange={() => handleIndustryFilter(industry, setFilters)}
                    />
                    {filters.industry.includes(industry) && (
                      <div className="ml-4">
                        {specialties.map(specialty => (
                          <Form.Check
                            key={specialty}
                            type="checkbox"
                            label={specialty}
                            checked={filters.specialties?.includes(specialty)}
                            onChange={() => handleIndustryFilter(specialty, setFilters, 'specialties')}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </FilterGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* Experiência */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Experiência</Accordion.Header>
            <Accordion.Body>
              <FilterGroup>
                {Object.entries(experienceLevels).map(([level, description]) => (
                  <Form.Check
                    key={level}
                    type="checkbox"
                    label={`${level} (${description})`}
                    checked={filters.experience.includes(level)}
                    onChange={() => handleIndustryFilter(level, setFilters, 'experience')}
                  />
                ))}
              </FilterGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* Tipo de Contratação */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tipo de Contratação</Accordion.Header>
            <Accordion.Body>
              <FilterGroup>
                {Object.entries(contractTypes).map(([type, description]) => (
                  <Form.Check
                    key={type}
                    type="checkbox"
                    label={`${type} (${description})`}
                    checked={filters.contractType.includes(type)}
                    onChange={() => handleIndustryFilter(type, setFilters, 'contractType')}
                  />
                ))}
              </FilterGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* Modelo de Trabalho */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Modelo de Trabalho</Accordion.Header>
            <Accordion.Body>
              <FilterGroup>
                {Object.entries(workModels).map(([model, description]) => (
                  <Form.Check
                    key={model}
                    type="checkbox"
                    label={`${model} (${description})`}
                    checked={filters.workModel.includes(model)}
                    onChange={() => handleIndustryFilter(model, setFilters, 'workModel')}
                  />
                ))}
              </FilterGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* Faixa Salarial */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>Faixa Salarial</Accordion.Header>
            <Accordion.Body>
              <Form.Group>
                <Form.Label>Mínimo</Form.Label>
                <Form.Control
                  type="number"
                  name="salaryMin"
                  value={filters.salaryMin}
                  onChange={(e) => handleFilterChange(e, setFilters)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Máximo</Form.Label>
                <Form.Control
                  type="number"
                  name="salaryMax"
                  value={filters.salaryMax}
                  onChange={(e) => handleFilterChange(e, setFilters)}
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* Benefícios */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>Benefícios</Accordion.Header>
            <Accordion.Body>
              <FilterGroup>
                {[
                  'Vale Refeição',
                  'Vale Transporte',
                  'Plano de Saúde',
                  'Plano Odontológico',
                  'Seguro de Vida',
                  'PLR',
                  'Stock Options',
                  'Gympass',
                  'Day Off no Aniversário',
                  'Horário Flexível'
                ].map(benefit => (
                  <Form.Check
                    key={benefit}
                    type="checkbox"
                    label={benefit}
                    checked={filters.benefits.includes(benefit)}
                    onChange={() => handleIndustryFilter(benefit, setFilters, 'benefits')}
                    />
                  ))}
                </FilterGroup>
              </Accordion.Body>
            </Accordion.Item>
  
            {/* Localização */}
            <Accordion.Item eventKey="6">
              <Accordion.Header>Localização</Accordion.Header>
              <Accordion.Body>
                <Form.Group>
                  <Form.Label>País</Form.Label>
                  <StyledSelect
                    name="country"
                    value={filters.location.country}
                    onChange={(e) => handleFilterChange(e, setFilters, 'location')}
                  >
                    <option value="">Selecione</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Portugal">Portugal</option>
                  </StyledSelect>
                </Form.Group>
  
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <StyledSelect
                    name="state"
                    value={filters.location.state}
                    onChange={(e) => handleFilterChange(e, setFilters, 'location')}
                  >
                    <option value="">Selecione</option>
                    {/* Estados dinâmicos baseados no país selecionado */}
                  </StyledSelect>
                </Form.Group>
  
                <Form.Group>
                  <Form.Label>Cidade</Form.Label>
                  <StyledSelect
                    name="city"
                    value={filters.location.city}
                    onChange={(e) => handleFilterChange(e, setFilters, 'location')}
                  >
                    <option value="">Selecione</option>
                    {/* Cidades dinâmicas baseadas no estado selecionado */}
                  </StyledSelect>
                </Form.Group>
  
                <Form.Check
                  type="checkbox"
                  label="Aceita remoto"
                  checked={filters.acceptRemote}
                  onChange={(e) => handleFilterChange(e, setFilters)}
                  name="acceptRemote"
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
  
          <div className="mt-3 d-flex justify-content-between">
            <StyledButton
              onClick={() => applyFilters(jobs, filters, setFilteredJobs, setCurrentPage)}
              theme={theme}
            >
              <FontAwesomeIcon icon={faFilter} /> Aplicar Filtros
            </StyledButton>
  
            <StyledButton
              variant="outline-primary"
              onClick={() => {
                const filterName = prompt('Nome para salvar este filtro:');
                if (filterName) {
                  setSavedFilters([...savedFilters, { name: filterName, filters: { ...filters } }]);
                }
              }}
              theme={theme}
            >
              <FontAwesomeIcon icon={faSave} /> Salvar Filtro
            </StyledButton>
          </div>
        </StyledForm>
  
        {/* Filtros Salvos */}
        {showSavedFilters && savedFilters.length > 0 && (
          <div className="mt-3">
            <h5>Filtros Salvos</h5>
            {savedFilters.map((savedFilter, index) => (
              <StyledButton
                key={index}
                variant="outline-secondary"
                className="mr-2 mb-2"
                onClick={() => {
                  setFilters(savedFilter.filters);
                  applyFilters(jobs, savedFilter.filters, setFilteredJobs, setCurrentPage);
                }}
              >
                {savedFilter.name}
              </StyledButton>
            ))}
          </div>
        )}
      </FilterSection>
    );
  }
  
  export default JobsFilterComp;
  
