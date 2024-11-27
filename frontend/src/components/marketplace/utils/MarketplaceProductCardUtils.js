import { useState } from 'react';

export const useMarketplaceProductCard = () => {
    const [likedProducts, setLikedProducts] = useState(new Set());

    const handleLike = (productId) => {
        setLikedProducts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    const handleComment = (productId) => {
        // Implement comment functionality
        console.log('Opening comments for product:', productId);
    };

    const handleShare = (productId) => {
        // Implement share functionality
        console.log('Sharing product:', productId);
    };

    return {
        likedProducts,
        handleLike,
        handleComment,
        handleShare
    };
};
