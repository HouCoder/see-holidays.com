import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const country = sqliteTable('country', {
  id: integer().primaryKey(),
  name: text().unique().notNull(),
  flag: text(),
});

export type Country = typeof country.$inferSelect;
