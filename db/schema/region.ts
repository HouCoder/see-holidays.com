import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { country } from './country';

export const region = sqliteTable('region', {
  id: integer().primaryKey({
    autoIncrement: true,
  }),
  name: text().unique().notNull(),
  countryId: integer('country_id')
    .notNull()
    .references(() => country.id),
});

export type Region = typeof region.$inferSelect;
