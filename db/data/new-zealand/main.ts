// https://www.govt.nz/browse/work/public-holidays-and-work/public-holidays-and-anniversary-dates/
import commonHolidays from './common';

const anniversaryDay = {
  name: 'Anniversary Day',
  description:
    'In addition to the eleven national public holidays, section 44 of the Holidays Act 2003 specifies as public holidays the anniversary days of each province (or the day locally observed as that day) to celebrate the founding days or landing days of the first colonists of the various colonial provinces.',
  link: 'https://en.wikipedia.org/wiki/Public_holidays_in_New_Zealand#Provincial_anniversary_days',
};

export default {
  emoji: '🇳🇿',
  country: 'New Zealand',
  regions: {
    Auckland: [
      ...commonHolidays,
      {
        ...anniversaryDay,
        dates: [
          {
            startDate: '2025-01-27',
          },
        ],
      },
    ],
    'Canterbury (South)': [
      ...commonHolidays,
      {
        ...anniversaryDay,
        dates: [
          {
            startDate: '2025-09-22',
          },
        ],
      },
    ],
    Canterbury: [
      ...commonHolidays,
      {
        ...anniversaryDay,
        dates: [
          {
            startDate: '2025-11-14',
          },
        ],
      },
    ],
    Wellington: [
      ...commonHolidays,
      {
        ...anniversaryDay,
        dates: [
          {
            startDate: '2025-01-20',
          },
        ],
      },
    ],
  },
};
