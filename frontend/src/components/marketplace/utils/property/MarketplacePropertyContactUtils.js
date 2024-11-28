'use client';
import { useState } from 'react';

export const useMarketplacePropertyContact = () => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredTime: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementar envio do formulário
    };

    const availableTimes = [
        'Manhã (9h-12h)',
        'Tarde (13h-17h)',
        'Noite (18h-20h)'
    ];

    return {
        contactData,
        handleInputChange,
        handleSubmit,
        availableTimes
    };
};
