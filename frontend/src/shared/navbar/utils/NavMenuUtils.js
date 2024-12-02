'use client';
import { useState } from 'react';
import { 
    faHome, 
    faBriefcase, 
    faUser, 
    faFile, 
    faHeart,
    faUserCircle 
} from '@fortawesome/free-solid-svg-icons';

export const iconMapping = {
    faHome,
    faBriefcase,
    faUser,
    faFile,
    faHeart,
    faUserCircle
};

export const menuItems = {
    mainNav: [
        { title: '', path: '/feed', icon: 'faHome' },
        { title: '', path: '/jobs', icon: 'faBriefcase' },
        { title: '', path: '/dating', icon: 'faHeart' },
        { title: '', path: '/profileuser', icon: 'faUser' }
    ],
    pages: [
        { title: 'Galeria', path: '/gallery' },
        { title: 'Mensagens', path: '/messages' },
        { title: 'Notificações', path: '/notifications' },
        { title: 'Amigos', path: '/friends' },
        { title: 'Eventos', path: '/events' },
        { title: 'Comunidades', path: '/communities' },
        { title: 'Grupos', path: '/groups' },
        { title: 'Grupo Detalhe', path: '/gruposdetalhe' },
        { title: 'Noticias', path: '/' },
        { title: 'Vendas', path: '/marketplace' },
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
