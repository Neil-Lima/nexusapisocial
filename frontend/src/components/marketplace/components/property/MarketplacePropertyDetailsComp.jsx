'use client';
import React from 'react';
import { Carousel, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHome, faFile, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { DetailsContainer, Gallery, InfoSection, Features } from '../../styles/property/MarketplacePropertyDetailsStyles';
import { useMarketplacePropertyDetails } from '../../utils/property/MarketplacePropertyDetailsUtils';

function MarketplacePropertyDetailsComp() {
    const { theme } = useTheme();
    const { property, activeTab, handleTabChange } = useMarketplacePropertyDetails();

    return (
        <DetailsContainer theme={theme}>
            <Gallery theme={theme}>
                <Carousel>
                    {property.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img src={image} alt={`Property ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Gallery>
            
            <InfoSection theme={theme}>
                <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="details">
                                <FontAwesomeIcon icon={faHome} /> Detalhes
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="docs">
                                <FontAwesomeIcon icon={faFile} /> Documentação
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="market">
                                <FontAwesomeIcon icon={faChartLine} /> Análise de Mercado
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="details">
                            <Features theme={theme}>
                                {property.features.map((feature, index) => (
                                    <div key={index}>
                                        <FontAwesomeIcon icon={faCheck} /> {feature}
                                    </div>
                                ))}
                            </Features>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </InfoSection>
        </DetailsContainer>
    );
}

export default MarketplacePropertyDetailsComp;
