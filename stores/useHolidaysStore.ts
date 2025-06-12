import { create } from 'zustand';

export type HolidayTheme = Record<number, string>;

type HolidaysStore = {
  holidayThemes: HolidayTheme;
  setHolidayThemes: (themes: HolidayTheme) => void;
};

export const useHolidaysStore = create<HolidaysStore>((set) => ({
  holidayThemes: {}, // example: { regionId: themeColor }
  setHolidayThemes(themes) {
    set({
      holidayThemes: themes,
    });
  },
}));
