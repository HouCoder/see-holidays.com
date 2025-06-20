import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  {
    name: 'Canberra Day',
    description:
      'Canberra Day is a public holiday in Australia held annually on the second Monday in March in the Australian Capital Territory and the Jervis Bay Territory to celebrate the official naming of Canberra.',
    link: 'https://en.wikipedia.org/wiki/Canberra_Day',
    dates: [
      {
        startDate: '2025-03-10',
      },
    ],
  },
  commonAussieHolidays.goodFriday,
  commonAussieHolidays.easter,
  commonAussieHolidays.anzacDay,
  {
    name: 'Reconciliation Day',
    description:
      'Reconciliation Day is a public holiday in the Australian Capital Territory (ACT). First observed in 2018, it celebrates Aboriginal Australian culture and promotes cultural exchange and understanding.',
    link: 'https://www.anu.edu.au/students/student-life/events-stories/reconciliation-day-public-holiday',
    dates: [
      {
        startDate: '2025-06-02',
      },
    ],
  },
  commonAussieHolidays.kingsBirthday,
  commonAussieHolidays.labourDay,
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
];
