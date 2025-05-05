import { useSelectedEventStore } from '@/stores/useSelectedEventStore';

export const HolidayNote = () => {
  const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);
  const extendedProps = selectedEvent.extendedProps || {};

  if (!extendedProps.description) {
    return null;
  }

  return (
    <div className="holiday-note">
      <h3 className="my-3">Holiday Note</h3>
      <div className="mb-1">{extendedProps.description}</div>
      {extendedProps.link && (
        <a
          href={extendedProps.link}
          className="fst-italic"
          target="_blank"
          rel="noreferrer"
        >
          Learn more about this holiday
        </a>
      )}
    </div>
  );
};
