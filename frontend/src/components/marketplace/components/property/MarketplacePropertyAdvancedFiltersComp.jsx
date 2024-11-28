'use client';
import React from 'react';
import { Form, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar, faRuler } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { FiltersContainer, FilterSection } from '../../styles/property/MarketplacePropertyAdvancedFiltersStyles';
import { useMarketplacePropertyAdvancedFilters } from '../../utils/property/MarketplacePropertyAdvancedFiltersUtils';

function MarketplacePropertyAdvancedFiltersComp() {
    const { theme } = useTheme();
    const { filters, handleFilterChange } = useMarketplacePropertyAdvancedFilters();

    return (
        <FiltersContainer theme={theme}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <FontAwesomeIcon icon={faRuler} /> Área
                    </Accordion.Header>
                    <Accordion.Body>
                        <FilterSection theme={theme}>
                            <Form.Range />
                        </FilterSection>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <FontAwesomeIcon icon={faBed} /> Quartos
                    </Accordion.Header>
                    <Accordion.Body>
                        <FilterSection theme={theme}>
                            <Form.Check type="checkbox" label="1+ Quartos" />
                            <Form.Check type="checkbox" label="2+ Quartos" />
                            <Form.Check type="checkbox" label="3+ Quartos" />
                            <Form.Check type="checkbox" label="4+ Quartos" />
                        </FilterSection>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </FiltersContainer>
    );
}

export default MarketplacePropertyAdvancedFiltersComp;
