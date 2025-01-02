/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export const corsConfig = {
  origin: [
    'http://localhost:3000',
    'https://nexusapisocial.netlify.app',
    'https://nexusapisocialbackend.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 3600
};

export default registerAs('cors', () => corsConfig);
