import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  commonAussieHolidays.goodFriday,
  commonAussieHolidays.easter,
  commonAussieHolidays.anzacDay,
  {
    name: 'May Day',
    description:
      'May Day in the Northern Territory is a public holiday held on the first Monday in May to honor the labour movement’s achievement of the eight‑hour workday, typically celebrated with a long weekend and community events.',
    link: 'https://en.wikipedia.org/wiki/Labour_Day',
    dates: [
      {
        startDate: '2025-05-05',
      },
    ],
  },
  commonAussieHolidays.kingsBirthday,
  {
    name: 'Picnic Day',
    description:
      'Picnic Day is a public holiday in the Northern Territory of Australia which takes place every year on the first Monday of August.',
    link: 'https://en.wikipedia.org/wiki/Picnic_Day_(Australian_holiday)',
    dates: [
      {
        startDate: '2025-08-04',
      },
    ],
  },
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
