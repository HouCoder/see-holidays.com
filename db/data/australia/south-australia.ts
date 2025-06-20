import commonAussieHolidays from './common';

export default [
  commonAussieHolidays.newYearsDay,
  commonAussieHolidays.australiaDay,
  {
    name: 'Adelaide Cup Day',
    description:
      'The Adelaide Cup is a South Australian Jockey Club Group 2 Thoroughbred handicap horse race for three-year-olds and older, run over 3,200 metres at Morphettville Racecourse in Adelaide, Australia on the second Monday in March.',
    link: 'https://en.wikipedia.org/wiki/Adelaide_Cup',
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
  commonAussieHolidays.labourDay,
  commonAussieHolidays.christmasDay,
  commonAussieHolidays.boxingDay,
  {
    name: 'Proclamation Day',
    description:
      'Proclamation Day in South Australia is a public holiday held on December 28 (or the following Monday when it falls on a weekend) commemorating the 1856 proclamation of the colony’s Constitution and its attainment of self‑government, typically marked by civic ceremonies and community events.',
    link: 'https://en.wikipedia.org/wiki/Proclamation_Day',
    dates: [
      {
        startDate: '2025-12-26',
      },
    ],
  },
];
