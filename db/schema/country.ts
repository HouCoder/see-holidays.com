import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const country = sqliteTable('country', {
  id: integer().primaryKey({
    autoIncrement: true,
  }),
  name: text().unique().notNull(),
  flag: text().unique().notNull(),
});

export type Country = typeof country.$inferSelect;
