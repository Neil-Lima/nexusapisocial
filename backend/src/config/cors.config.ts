/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
export const corsConfig = {
  origin: process.env.CORS_ORIGIN.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 3600
};


export default registerAs('cors', () => corsConfig);
