'use client';
import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { SearchContainer, SearchInput } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';

export default function JobsSearchComp() {
  const { theme } = useTheme();

  return (
    <SearchContainer theme={theme}>
      <SearchInput theme={theme}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control placeholder="Buscar vagas..." />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faMapMarker} />
          </InputGroup.Text>
          <Form.Control placeholder="Localização..." />
        </InputGroup>
      </SearchInput>
    </SearchContainer>
  );
}
