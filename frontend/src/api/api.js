import axios from 'axios'

export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://nexusapisocialbackend.vercel.app',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(API_CONFIG)

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
