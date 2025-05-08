import type { Holiday } from '@/db/db';
import { create } from 'zustand';

export type HolidayTheme = Record<number, string>;

type HolidaysStore = {
  holidays: Holiday[];
  holidayThemes: HolidayTheme;
  setHolidays: (holidays: Holiday[]) => void;
  setHolidayThemes: (themes: HolidayTheme) => void;
};

export const useHolidaysStore = create<HolidaysStore>((set) => ({
  holidays: [],
  holidayThemes: {}, // example: { regionId: themeColor }
  setHolidays(holidays) {
    set({ holidays });
  },
  setHolidayThemes(themes) {
    set({
      holidayThemes: themes,
    });
  },
}));
