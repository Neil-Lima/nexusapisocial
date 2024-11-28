'use client';
import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { GridContainer, GridHeader, GridContent } from '../../styles/property/MarketplacePropertyGridStyles';
import { useMarketplacePropertyGrid } from '../../utils/property/MarketplacePropertyGridUtils';
import MarketplacePropertyCardComp from './MarketplacePropertyCardComp';

function MarketplacePropertyGridComp() {
    const { theme } = useTheme();
    const { viewMode, properties, handleViewChange } = useMarketplacePropertyGrid();

    return (
        <GridContainer theme={theme}>
            <GridHeader theme={theme}>
                <ButtonGroup>
                    <Button 
                        variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                        onClick={() => handleViewChange('grid')}
                    >
                        <FontAwesomeIcon icon={faThLarge} />
                    </Button>
                    <Button 
                        variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                        onClick={() => handleViewChange('list')}
                    >
                        <FontAwesomeIcon icon={faList} />
                    </Button>
                </ButtonGroup>
            </GridHeader>
            <GridContent theme={theme}>
                <Row>
                    {properties.map((property) => (
                        <Col key={property.id} lg={4} md={6} sm={12}>
                            <MarketplacePropertyCardComp property={property} />
                        </Col>
                    ))}
                </Row>
            </GridContent>
        </GridContainer>
    );
}

export default MarketplacePropertyGridComp;
