import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const date = sqliteTable('date', {
  id: integer().primaryKey(),
  holidayId: integer('holiday_id').notNull(),
  startDate: text('start_date').notNull(),
  endDate: text('end_date'),
  isWorkingDay: integer('is_working_day').notNull().default(0),
});

export type Date = typeof date.$inferSelect;
