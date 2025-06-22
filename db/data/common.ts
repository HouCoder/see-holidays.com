export default {
  newYearsDay: {
    name: "New Year's Day",
    description:
      "In the Gregorian calendar, New Year's Day is the first day of the calendar year, 1 January. Most solar calendars, such as the Gregorian and Julian calendars, begin the year regularly at or near the northern winter solstice.",
    link: "https://en.wikipedia.org/wiki/New_Year's_Day",
    dates: [
      {
        startDate: '2025-01-01',
      },
    ],
  },
  chineseNewYear: {
    name: 'Chinese New Year',
    description:
      'Chinese New Year, or the Spring Festival, is a festival that celebrates the beginning of a new year on the traditional lunisolar Chinese calendar.',
    link: 'https://en.wikipedia.org/wiki/Chinese_New_Year',
  },
  additionalHoliday: {
    name: 'Additional Holiday',
    description:
      'If two holidays fall on the same day, an adjacent working day may be given as an extra holiday; similarly, if a holiday falls on a weekend, the following Monday becomes a public holiday.',
  },
};

export const buildSpecialWorkingDay = (
  startDate: string,
  endDate: string | null = null,
) => ({
  name: 'Special Working Day',
  description:
    'Certain weekends are designated working days scheduled to compensate for time off on long public holidays, often resulting in employees working on a weekend to make up for an extended holiday period.',
  dates: [
    {
      startDate,
      endDate,
      isWorkingDay: true,
    },
  ],
});
