import { registerAs } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

const logger = new Logger('Database');

mongoose.connection.on('connected', async () => {
  const dbName = mongoose.connection.db.databaseName;
  logger.log(`Banco conectado: ${dbName}`);
  const collections = await mongoose.connection.db.collections();
  logger.log('Collections disponíveis:');
  collections.forEach((collection) => {
    logger.log(`- ${collection.collectionName}`);
  });
});

mongoose.connection.on('error', (err) => {
  logger.error(`Erro na conexão: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  logger.warn('Banco desconectado');
});

export default registerAs('database', () => ({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/nexusapi_db',
  useNewUrlParser: true,
  useUnifiedTopology: true,
}));
