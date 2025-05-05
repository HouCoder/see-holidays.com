import { create } from 'zustand';

export const useHolidaysStore = create((set) => ({
  holidays: [],
  holidayThemes: {}, // example: { [regionId]: [themeColor] }
  setHolidays(holidays) {
    set({ holidays });
  },
  setHolidayThemes(themes) {
    set({
      holidayThemes: themes,
    });
  },
}));
