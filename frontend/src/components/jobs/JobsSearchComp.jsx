'use client';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faCamera } from '@fortawesome/free-solid-svg-icons';
import { SearchBar, StyledButton, SearchSuggestions } from './styles/JobsStyle';
import { handleSearch } from './utils/JobsUtils';

function JobsSearchComp({ searchTerm, setSearchTerm, jobs, setFilteredJobs, setCurrentPage }) {
  return (
    <SearchBar onSubmit={(e) => handleSearch(e, jobs, searchTerm, setFilteredJobs, setCurrentPage)}>
      <InputGroup>
        <Form.Control 
          type="text" 
          placeholder="Busque por cargo, empresa, habilidades ou palavras-chave" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar vagas"
        />
        <StyledButton variant="outline-secondary">
          <FontAwesomeIcon icon={faMicrophone} />
        </StyledButton>
        <StyledButton variant="outline-secondary">
          <FontAwesomeIcon icon={faCamera} />
        </StyledButton>
        <StyledButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </StyledButton>
      </InputGroup>

      {searchTerm && (
        <SearchSuggestions>
          <div className="suggestion-section">
            <h6>Cargos Populares</h6>
            {['Desenvolvedor Frontend', 'Product Manager', 'UX Designer'].map((suggestion, index) => (
              <div key={index} className="suggestion-item" onClick={() => setSearchTerm(suggestion)}>
                <FontAwesomeIcon icon={faBriefcase} /> {suggestion}
              </div>
            ))}
          </div>

          <div className="suggestion-section">
            <h6>Empresas em Alta</h6>
            {['Google', 'Microsoft', 'Apple'].map((company, index) => (
              <div key={index} className="suggestion-item" onClick={() => setSearchTerm(company)}>
                <FontAwesomeIcon icon={faBuilding} /> {company}
              </div>
            ))}
          </div>

          <div className="suggestion-section">
            <h6>Habilidades em Demanda</h6>
            {['React', 'Python', 'Data Science'].map((skill, index) => (
              <div key={index} className="suggestion-item" onClick={() => setSearchTerm(skill)}>
                <FontAwesomeIcon icon={faGraduationCap} /> {skill}
              </div>
            ))}
          </div>
        </SearchSuggestions>
      )}
    </SearchBar>
  );
}

export default JobsSearchComp;
