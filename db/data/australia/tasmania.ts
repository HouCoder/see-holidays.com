import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  {
    name: 'Eight Hours Day',
    description:
      'Eight Hours Day is a public holiday in Tasmania held on the second Monday in March to commemorate the 1856 victory of Tasmanian stonemasons in securing an eight‑hour workday, typically celebrated with a long weekend and community events.',
    link: 'https://en.wikipedia.org/wiki/Eight-hour_day_movement',
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
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
