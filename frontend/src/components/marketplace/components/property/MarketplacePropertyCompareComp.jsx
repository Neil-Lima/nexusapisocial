'use client';
import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import { CompareContainer, CompareTable } from '../../styles/property/MarketplacePropertyCompareStyles';
import { useMarketplacePropertyCompare } from '../../utils/property/MarketplacePropertyCompareUtils';

function MarketplacePropertyCompareComp() {
    const { theme } = useTheme();
    const { compareItems, handleRemoveItem } = useMarketplacePropertyCompare();

    return (
        <CompareContainer theme={theme}>
            <h3>Comparar Imóveis</h3>
            <CompareTable theme={theme}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Características</th>
                            {compareItems.map(item => (
                                <th key={item.id}>
                                    {item.title}
                                    <button onClick={() => handleRemoveItem(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Preço</td>
                            {compareItems.map(item => (
                                <td key={item.id}>{item.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Área</td>
                            {compareItems.map(item => (
                                <td key={item.id}>{item.area}m²</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Quartos</td>
                            {compareItems.map(item => (
                                <td key={item.id}>{item.bedrooms}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </CompareTable>
        </CompareContainer>
    );
}

export default MarketplacePropertyCompareComp;
