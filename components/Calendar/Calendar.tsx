import type { Holiday } from '@/db/db';
import { useHolidaysStore } from '@/stores/useHolidaysStore';
import { useSelectedEventStore } from '@/stores/useSelectedEventStore';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './styles.module.scss';

const Calendar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const holidays = useHolidaysStore((state) => state.holidays);
  const holidayThemes = useHolidaysStore((state) => state.holidayThemes);
  const setSelectedEvent = useSelectedEventStore(
    (state) => state.setSelectedEvent,
  );
  const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);

  const [showWeekNumbers] = useQueryState(
    'show-week-numbers',
    parseAsBoolean.withDefault(false),
  );
  const [sundayFirstDay] = useQueryState(
    'sunday-first-day',
    parseAsBoolean.withDefault(false),
  );

  return (
    <div className={styles.calendar}>
      <Modal show={showDialog} onHide={() => setShowDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedEvent?.extendedProps?.flag}{' '}
            {selectedEvent?.extendedProps?.regionName} / {selectedEvent?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent?.extendedProps?.description ||
            'No description for this holiday'}

          {selectedEvent?.extendedProps?.link ? (
            <div className="mt-2">
              <a
                href={selectedEvent?.extendedProps?.link}
                className="fst-italic"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about this holiday
              </a>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-100"
            variant="secondary"
            onClick={() => setShowDialog(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <FullCalendar
        plugins={[dayGridPlugin]}
        weekNumbers={showWeekNumbers}
        dayMaxEventRows={3}
        themeSystem="bootstrap5"
        initialView="dayGridMonth"
        firstDay={sundayFirstDay ? 0 : 1}
        events={holidays}
        eventOrder={(a, b) =>
          holidays.indexOf(a as Holiday) - holidays.indexOf(b as Holiday)
        }
        eventOrderStrict
        eventContent={({ event }) => {
          const html = `
            <div class="fc-event-main-frame">
              <div class="fc-event-title-container">
                <div class="fc-event-title fc-sticky" title="${event.title} - ${event.extendedProps.regionName}">
                  ${event.extendedProps.flag} ${event.title}
                </div>
              </div>
            </div>`;

          return {
            html,
          };
        }}
        eventClick={({ event }) => {
          setSelectedEvent(event);
          setShowDialog(true);
        }}
        eventClassNames={({ event }) => {
          const { regionId } = event.extendedProps;
          const themeColor = holidayThemes[regionId];

          if (!themeColor) {
            return 'px-1';
          }

          return `fc-event--${themeColor} px-1`;
        }}
      />
    </div>
  );
};

export default Calendar;
