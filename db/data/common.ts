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
  goodFriday: {
    name: 'Good Friday',
    description:
      'Good Friday, also known as Holy Friday, Great Friday, Great and Holy Friday, or Friday of the Passion of the Lord, is a solemn Christian holy day commemorating the crucifixion of Jesus and his death at Calvary.',
    link: 'https://en.wikipedia.org/wiki/Good_Friday',
    dates: [
      {
        startDate: '2025-04-18',
      },
    ],
  },
  labourDay: {
    name: 'Labour Day',
    description: `Labour Day is an annual day of celebration of the labour movement and its achievements. It has its origins in the labour union movement, specifically the eight-hour day movement, which advocated eight hours for work, eight hours for recreation, and eight hours for rest.`,
    link: 'https://en.wikipedia.org/wiki/Labour_Day',
  },
  christmasDay: {
    name: 'Christmas Day',
    description:
      'Christmas Day is celebrated on December 25th to honor the birth of Jesus Christ and is observed worldwide with religious services, family gatherings, gift exchanges and festive meals.',
    link: 'https://en.wikipedia.org/wiki/Christmas',
    dates: [
      {
        startDate: '2025-12-25',
      },
    ],
  },
  boxingDay: {
    name: 'Boxing Day',
    description: `Boxing Day, also called as Offering Day is a holiday celebrated after Christmas Day, occurring on the second day of Christmastide. Boxing Day was once a day to donate gifts to those in need, but it has evolved to become a part of Christmas festivities, with many people choosing to shop for deals on Boxing Day.`,
    link: 'https://en.wikipedia.org/wiki/Boxing_Day',
    dates: [
      {
        startDate: '2025-12-26',
      },
    ],
  },
};

export const buildAdditionalWorkingDay = (
  startDate: string,
  endDate: string | null = null,
) => ({
  name: 'Additional Working Day',
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
