/* eslint-disable prettier/prettier */
// cors.config.ts
import { registerAs } from '@nestjs/config';

export const corsConfig = {
  origin: [
    'http://localhost:3000',
    'https://nexusapisocialapp.netlify.app',
    'https://nexusapisocial.netlify.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default registerAs('cors', () => corsConfig);
