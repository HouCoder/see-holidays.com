import path from 'node:path';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './db/schema/*',
  dbCredentials: {
    url: `file:${path.join(process.cwd(), 'source.db')}`,
  },
});
