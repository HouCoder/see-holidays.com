import { integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core';
import { region } from './region';

export const holiday = sqliteTable(
  'holiday',
  {
    id: integer().primaryKey({
      autoIncrement: true,
    }),
    regionId: integer('region_id')
      .notNull()
      .references(() => region.id),
    name: text().notNull(),
    description: text(),
    link: text(),
  },
  (table) => [
    unique().on(table.regionId, table.name),
  ]
);

export type Holiday = typeof holiday.$inferSelect;
