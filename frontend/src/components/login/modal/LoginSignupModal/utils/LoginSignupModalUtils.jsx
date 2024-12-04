'use client'

export const useSignupModal = () => {
  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const meses = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ];
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    
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
    };

    try {
      // Aqui você pode adicionar a lógica de envio dos dados para o backend
      console.log('Dados do usuário:', userData);
      return { success: true, message: 'Cadastro realizado com sucesso!' };
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      return { success: false, message: 'Erro ao realizar cadastro. Tente novamente.' };
    }
  };

  return { 
    anos, 
    meses, 
    dias, 
    handleSignupSubmit 
  };
};
