'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHome, faMoneyBill, faPercentage } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { StatsContainer, StatCard, Chart } from '../../styles/property/MarketplacePropertyStatsStyles';
import { useMarketplacePropertyStats } from '../../utils/property/MarketplacePropertyStatsUtils';

function MarketplacePropertyStatsComp() {
    const { theme } = useTheme();
    const { stats, marketTrends } = useMarketplacePropertyStats();

    return (
        <StatsContainer theme={theme}>
            <h3>Análise de Mercado</h3>
            <Row>
                <Col md={3}>
                    <StatCard theme={theme}>
                        <FontAwesomeIcon icon={faHome} />
                        <h4>Imóveis Disponíveis</h4>
                        <span>{stats.availableProperties}</span>
                    </StatCard>
                </Col>
                <Col md={3}>
                    <StatCard theme={theme}>
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <h4>Preço Médio</h4>
                        <span>{stats.averagePrice}</span>
                    </StatCard>
                </Col>
                <Col md={3}>
                    <StatCard theme={theme}>
                        <FontAwesomeIcon icon={faPercentage} />
                        <h4>Valorização</h4>
                        <span>{stats.appreciation}%</span>
                    </StatCard>
                </Col>
            </Row>
            <Chart theme={theme}>
                {/* Gráficos de tendências */}
            </Chart>
        </StatsContainer>
    );
}

export default MarketplacePropertyStatsComp;
