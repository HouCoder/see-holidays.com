import { drizzle } from 'drizzle-orm/libsql/node';

console.log(process.env.TURSO_DATABASE_URL);

const dbClient = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
  logger: process.env.NODE_ENV !== 'production',
});

export default dbClient;
