import path from 'node:path';
import { drizzle } from 'drizzle-orm/libsql/node';

const db = drizzle({
  connection: {
    url: `file:${path.join(process.cwd(), 'source.db')}`,
  },
});

export default db;
