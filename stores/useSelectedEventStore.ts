import type { EventImpl } from '@fullcalendar/core/internal';
import { create } from 'zustand';

type SelectedEventStore = {
  selectedEvent: EventImpl | null;
  setSelectedEvent: (selectedEvent: EventImpl) => void;
};

export const useSelectedEventStore = create<SelectedEventStore>((set) => ({
  selectedEvent: null,
  setSelectedEvent(selectedEvent) {
    set({ selectedEvent });
  },
}));
