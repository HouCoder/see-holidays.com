import { drizzle } from 'drizzle-orm/libsql/node';

const dbClient = drizzle({
  connection: {
    url: process.env.DB_FILE_NAME as string,
  },
});

export default dbClient;
