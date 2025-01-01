// api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nexusapisocialbackend.vercel.app',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.Authorization;
  }
};

export const removeAuthToken = () => {
  delete api.defaults.headers.Authorization;
};

export default api;
