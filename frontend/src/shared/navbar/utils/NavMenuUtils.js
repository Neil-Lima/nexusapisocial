'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/api/api';

export const useNavMenu = () => {
  const [showColorPickerComp, setShowColorPickerComp] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm.length > 0) {
      try {
        const response = await api.get(`/users/search?q=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Erro na busca:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleUserSelect = (userId) => {
    setShowSearchResults(false);
    router.push(`/user/${userId}`);
  };

  return {
    showColorPickerComp,
    setShowColorPickerComp,
    handleLogout,
    searchResults,
    showSearchResults,
    setShowSearchResults,
    handleSearch,
    handleUserSelect
  };
};
