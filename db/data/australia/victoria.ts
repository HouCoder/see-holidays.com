import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  {
    ...commonAussieHolidays.labourDay,
    dates: [
      {
        startDate: '2025-03-10',
      },
    ],
  },
  commonAussieHolidays.goodFriday,
  commonAussieHolidays.easter,
  commonAussieHolidays.anzacDay,
  commonAussieHolidays.kingsBirthday,
  {
    name: 'Friday before the AFL Grand Final',
    description:
      'The AFL Grand Final is an Australian rules football match to determine the premiers for the Australian Football League (AFL) season.',
    link: 'https://en.wikipedia.org/wiki/AFL_Grand_Final',
    dates: [
      {
        startDate: '2025-09-26',
      },
    ],
  },
  {
    name: 'Melbourne Cup',
    description:
      'The Melbourne Cup is an annual Group 1 Thoroughbred horse race held in Melbourne, Australia, at the Flemington Racecourse.',
    link: 'https://en.wikipedia.org/wiki/Melbourne_Cup',
    dates: [
      {
        startDate: '2025-11-04',
      },
    ],
  },
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
