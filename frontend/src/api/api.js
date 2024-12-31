// api.js
export const API_CONFIG = {
  baseURL: 'https://nexusapisocialbackend.vercel.app',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const setAuthToken = (token) => {
  if (token) {
    API_CONFIG.headers.Authorization = `Bearer ${token}`;
  } else {
    delete API_CONFIG.headers.Authorization;
  }
};

export const removeAuthToken = () => {
  delete API_CONFIG.headers.Authorization;
};

export default API_CONFIG;
