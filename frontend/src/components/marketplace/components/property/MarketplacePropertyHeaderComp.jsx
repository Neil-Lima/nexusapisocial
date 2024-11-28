'use client';
import React from 'react';
import { Row, Col, ButtonGroup, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faDollarSign, faHome } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { HeaderContainer, SearchBar, FilterGroup } from '../../styles/property/MarketplacePropertyHeaderStyles';
import { useMarketplacePropertyHeader } from '../../utils/property/MarketplacePropertyHeaderUtils';

function MarketplacePropertyHeaderComp() {
    const { theme } = useTheme();
    const { searchParams, handleSearchChange } = useMarketplacePropertyHeader();

    return (
        <HeaderContainer theme={theme}>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button variant="primary">Comprar</Button>
                        <Button variant="outline-primary">Alugar</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <SearchBar theme={theme}>
                <FilterGroup theme={theme}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <Form.Control type="text" placeholder="Localização" />
                </FilterGroup>
                <FilterGroup theme={theme}>
                    <FontAwesomeIcon icon={faHome} />
                    <Form.Select>
                        <option>Tipo de Imóvel</option>
                        <option>Casa</option>
                        <option>Apartamento</option>
                        <option>Terreno</option>
                    </Form.Select>
                </FilterGroup>
                <Button variant="primary">
                    <FontAwesomeIcon icon={faSearch} />
                    Buscar
                </Button>
            </SearchBar>
        </HeaderContainer>
    );
}

export default MarketplacePropertyHeaderComp;
