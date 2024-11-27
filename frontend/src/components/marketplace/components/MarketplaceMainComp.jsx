'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import MarketplaceHeaderComp from './MarketplaceHeaderComp';
import MarketplaceFilterComp from './MarketplaceFilterComp';
import MarketplaceProductsComp from './MarketplaceProductsComp';
import MarketplaceProductModalComp from './MarketplaceProductModalComp';
import MarketplaceChatComp from './MarketplaceChatComp';
import { useMarketplaceMain } from '../utils/MarketplaceMainUtils';

function MarketplaceMainComp() {
  const { theme } = useTheme();
  const { isModalOpen, isChatOpen } = useMarketplaceMain();

  return (
    <GradientBackground theme={theme}>
      <Container>
        <Row className="g-4">
          <Col lg={3}>
            <MarketplaceFilterComp />
          </Col>
          <Col lg={9}>
            <MarketplaceHeaderComp />
            <MarketplaceProductsComp />
          </Col>
        </Row>

        {isModalOpen && <MarketplaceProductModalComp />}
        {isChatOpen && <MarketplaceChatComp />}
      </Container>
    </GradientBackground>
  );
}

export default MarketplaceMainComp;
