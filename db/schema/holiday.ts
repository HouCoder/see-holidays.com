import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const holiday = sqliteTable('holiday', {
  id: integer().primaryKey(),
  regionId: integer('region_id').notNull(),
  name: text().notNull(),
  description: text(),
  link: text(),
});

export type Holiday = typeof holiday.$inferSelect;
