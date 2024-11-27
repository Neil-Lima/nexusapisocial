import { useState } from 'react';
import { 
    faLaptop, 
    faTshirt, 
    faHome, 
    faFootballBall,
    faSprayCan,
    faBook,
    faGamepad,
    faCar
} from '@fortawesome/free-solid-svg-icons';

export const useMarketplaceCategories = () => {
    const categories = [
        { id: 1, name: 'Eletrônicos', icon: faLaptop, itemCount: 1234 },
        { id: 2, name: 'Moda', icon: faTshirt, itemCount: 2345 },
        { id: 3, name: 'Casa', icon: faHome, itemCount: 1567 },
        { id: 4, name: 'Esportes', icon: faFootballBall, itemCount: 890 },
        { id: 5, name: 'Beleza', icon: faSprayCan, itemCount: 1678 },
        { id: 6, name: 'Livros', icon: faBook, itemCount: 2789 },
        { id: 7, name: 'Games', icon: faGamepad, itemCount: 1345 },
        { id: 8, name: 'Automotivo', icon: faCar, itemCount: 567 }
    ];

    const handleCategoryClick = (categoryId) => {
        // Implement category navigation logic
        console.log('Navigating to category:', categoryId);
    };

    return {
        categories,
        handleCategoryClick
    };
};
