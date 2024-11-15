'use client';
import { useState } from 'react';
import { 
    faHome, 
    faBriefcase, 
    faUser, 
    faFile, 
    faUserCircle 
} from '@fortawesome/free-solid-svg-icons';

export const iconMapping = {
    faHome,
    faBriefcase,
    faUser,
    faFile,
    faUserCircle
};

export const menuItems = {
    mainNav: [
        { title: 'Home', path: '/feed', icon: 'faHome' },
        { title: 'Empregos', path: '/empregos', icon: 'faBriefcase' },
        { title: 'Perfil', path: '/profileuser', icon: 'faUser' }
    ],
    pages: [
        { title: 'Galeria', path: '/gallery' },
        { title: 'Mensagens', path: '/menssages' },
        { title: 'Notificações', path: '/notificacoes' },
        { title: 'Amigos', path: '/friends' },
        { title: 'Eventos', path: '/eventos' },
        { title: 'Grupos', path: '/groups' },
        { title: 'Grupo Detalhe', path: '/gruposdetalhe' },
        { title: 'Noticias', path: '/' },
        { title: 'Vendas', path: '/' },
        { title: 'Videos', path: '/videos' },
        { title: 'Video Studio', path: '/videostudio' },
        { title: 'Paginas', path: '/' },
        { title: 'Perfil de Usuario', path: '/profileuser' },
        { title: 'Amigos para adicionar', path: '/' }
    ],
    account: [
        { title: 'Configurações', path: '/configuracoes' },
        { title: 'Login', path: '/login' }
    ]
};

export const useNavMenu = () => {
    const [showColorPickerComp, setShowColorPickerComp] = useState(false);

    return {
        showColorPickerComp,
        setShowColorPickerComp
    };
};

export const handleColorPickerToggle = (setShowColorPickerComp) => {
    setShowColorPickerComp(prev => !prev);
};
