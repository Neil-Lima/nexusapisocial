/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://nexusapisocialapp.netlify.app',
  'https://nexusapisocial.vercel.app'
];

export const corsConfig = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default registerAs('cors', () => corsConfig);

