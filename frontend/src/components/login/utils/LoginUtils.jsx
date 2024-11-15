'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultModalContent, setResultModalContent] = useState({ title: '', message: '' });

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.target);
    const credentials = {
      email: formData.get('email'),
      senha: formData.get('password')
    };

    setTimeout(() => {
      setIsLoading(false);
      router.push('/home');
    }, 1000);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const userData = {
      nome: formData.get('nome'),
      sobrenome: formData.get('sobrenome'),
      email: formData.get('email'),
      senha: formData.get('senha'),
      pais: formData.get('pais'),
      estado: formData.get('estado'),
      cidade: formData.get('cidade'),
      dataNascimento: `${formData.get('ano')}-${String(formData.get('mes')).padStart(2, '0')}-${String(formData.get('dia')).padStart(2, '0')}`,
      genero: formData.get('genero'),
      fotoPerfil: profileImage,
      fotoCapa: coverImage,
    };

    setTimeout(() => {
      setResultModalContent({
        title: 'Sucesso',
        message: 'Cadastro realizado com sucesso! Faça login para continuar.'
      });
      setShowResultModal(true);
      handleModalClose();
      setIsLoading(false);
    }, 1000);
  };

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  return {
    showModal,
    profileImage,
    coverImage,
    handleModalClose,
    handleModalShow,
    handleLoginSubmit,
    handleSignupSubmit,
    handleImageUpload,
    setProfileImage,
    setCoverImage,
    isLoading,
    error,
    showResultModal,
    setShowResultModal,
    resultModalContent,
    anos,
    meses,
    dias
  };
};
