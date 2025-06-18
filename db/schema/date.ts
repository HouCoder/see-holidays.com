import {
  customType,
  integer,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';
import { holiday } from './holiday';

const booleanInteger = customType<{
  data: boolean;
  driverData: number;
}>({
  dataType() {
    return 'integer';
  },
  toDriver: (value) => (value ? 1 : 0),
  fromDriver: (value) => Boolean(value),
});

export const date = sqliteTable('date', {
  id: integer().primaryKey({
    autoIncrement: true,
  }),
  holidayId: integer('holiday_id')
    .notNull()
    .references(() => holiday.id),
  startDate: text('start_date').notNull(),
  endDate: text('end_date'),
  isWorkingDay: booleanInteger('is_working_day'),
});

export type Date = typeof date.$inferSelect;
