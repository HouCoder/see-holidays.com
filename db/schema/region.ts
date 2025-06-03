import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const region = sqliteTable('region', {
  id: integer().primaryKey(),
  name: text().unique().notNull(),
  countryId: integer('country_id').notNull(),
});

export type Region = typeof region.$inferSelect;
