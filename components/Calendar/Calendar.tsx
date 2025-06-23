'use client';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { addDays, format, parseISO } from 'date-fns';
import { fromPairs, sortBy } from 'lodash';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useSelectedRegions from '@/hooks/useSelectedRegions';
import type { Holiday } from '@/providers/GlobalStoreProvider';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';
import { useHolidaysStore } from '@/stores/useHolidaysStore';
import { useSelectedEventStore } from '@/stores/useSelectedEventStore';
import styles from './styles.module.scss';

const Calendar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { holidays } = useGlobalStore((state) => state);
  const holidayThemes = useHolidaysStore((state) => state.holidayThemes);
  const selectedRegions = useSelectedRegions();
  const validHolidays = holidays.filter((holiday) =>
    selectedRegions.some((region) => region.value === holiday.regionId),
  );
  const orderMap = fromPairs(selectedRegions.map((r, idx) => [r.value, idx]));
  const sortedHolidays = sortBy(validHolidays, (h) => orderMap[h.regionId]);

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
        events={sortedHolidays.map((h) => ({
          ...h,
          // This value is exclusive. For example, if you have an all-day event that has an end of 2018-09-03, then it will span through 2018-09-02 and end before the start of 2018-09-03.
          end: h.end
            ? format(addDays(parseISO(h.end), 1), 'yyyy-MM-dd')
            : undefined,
        }))}
        eventOrder={(a, b) =>
          sortedHolidays.indexOf(a as Holiday) -
          sortedHolidays.indexOf(b as Holiday)
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
