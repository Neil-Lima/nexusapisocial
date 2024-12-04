'use client'

import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
  const router = useRouter();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const credentials = {
      email: formData.get('email'),
      senha: formData.get('password')
    };

    setTimeout(() => {
      router.push('/home');
    }, 1000);
  };

  return { handleLoginSubmit };
};
