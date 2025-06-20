import { drizzle } from 'drizzle-orm/libsql/node';

const dbClient = drizzle({
  connection: {
    url: process.env.DB_FILE_NAME as string,
  },
  logger: process.env.NODE_ENV !== 'production',
});

export default dbClient;
