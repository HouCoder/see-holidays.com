import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  {
    ...commonAussieHolidays.labourDay,
    dates: [
      {
        startDate: '2025-03-03',
      },
    ],
  },
  commonAussieHolidays.goodFriday,
  commonAussieHolidays.easter,
  commonAussieHolidays.anzacDay,
  {
    name: 'Western Australia Day',
    description:
      'Western Australia Day or simply WA Day is a public holiday in Western Australia, celebrated on the first Monday in June each year, to commemorate the founding of the Swan River Colony in 1829.',
    link: 'https://en.wikipedia.org/wiki/Western_Australia_Day',
    dates: [
      {
        startDate: '2025-06-02',
      },
    ],
  },
  {
    ...commonAussieHolidays.kingsBirthday,
    description:
      "In Western Australia, the King's Birthday public holiday is observed on a different date than in other Australian states, primarily to avoid a clash with the state's own holiday, Western Australia Day.",
    dates: [
      {
        startDate: '2025-06-29',
      },
    ],
  },
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
