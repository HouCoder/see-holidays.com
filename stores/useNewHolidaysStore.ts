import type { Holiday } from '@/db/db';
import { create } from 'zustand';

type HolidaysStore = {
  holidays: Holiday[];
  setHolidays: (holidays: Holiday[]) => void;
};

export const useHolidaysStore = create<HolidaysStore>((set) => ({
  holidays: [],
  setHolidays(holidays) {
    set({ holidays });
  },
}));
