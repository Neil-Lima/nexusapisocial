'use client';
import { useState } from 'react';

export const useMarketplacePropertyMain = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSeller, setSelectedSeller] = useState(null);
    const [showReviews, setShowReviews] = useState(false);
    const [showSeller, setShowSeller] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
        setSelectedSeller(null);
    };

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleSellerSelect = (seller) => {
        setSelectedSeller(seller);
        setShowSeller(true);
    };

    const handleToggleReviews = () => {
        setShowReviews(prev => !prev);
    };

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    return {
        viewMode,
        isModalOpen,
        isChatOpen,
        selectedProduct,
        selectedSeller,
        showReviews,
        showSeller,
        loading,
        error,
        handleCloseModal,
        handleCloseChat,
        handleProductSelect,
        handleSellerSelect,
        handleToggleReviews,
        handleViewModeChange
    };
};
