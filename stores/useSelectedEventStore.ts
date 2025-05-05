import { create } from 'zustand';

export const useSelectedEventStore = create((set) => ({
  selectedEvent: {},
  setSelectedEvent(selectedEvent) {
    set({ selectedEvent });
  },
}));
