import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.utils.js';

let prisma;

if (process.env.NODE_ENV === 'production') {
  //? In production, Prisma Client is initialized once for the lifecycle of the application
  prisma = new PrismaClient({
    log: ['error']
  });
} else {
  //? In development, Prisma Client is initialized every time to handle hot-reloads
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  prisma = global.prisma;
}

prisma.$on('query', (e) => {
  logger.info(`Query: ${e.query}`);
  logger.info(`Params: ${e.params}`);
});

prisma.$on('info', (e) => {
  logger.info(e.message);
});

prisma.$on('warn', (e) => {
  logger.warn(e.message);
});

prisma.$on('error', (e) => {
  logger.error(e.message);
});

process.on('SIGINT', async () => {
  logger.info('Disconnecting Prisma...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  logger.info('Disconnecting Prisma...');
  await prisma.$disconnect();
  process.exit(0);
});

export default prisma;