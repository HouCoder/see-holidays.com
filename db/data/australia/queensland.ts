import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  commonAussieHolidays.goodFriday,
  commonAussieHolidays.easter,
  commonAussieHolidays.anzacDay,
  {
    ...commonAussieHolidays.labourDay,
    dates: [
      {
        startDate: '2025-05-05',
      },
    ],
  },
  {
    name: 'Royal Queensland Show (Brisbane area only)',
    description:
      'The Ekka is the annual agricultural show of Queensland, Australia. Its formal title is the Royal Queensland Show, and it is held at the Brisbane Showgrounds.',
    link: 'https://en.wikipedia.org/wiki/Ekka',
    dates: [
      {
        startDate: '2025-08-13',
      },
    ],
  },
  {
    ...commonAussieHolidays.kingsBirthday,
    dates: [
      {
        startDate: '2025-10-06',
      },
    ],
  },
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
