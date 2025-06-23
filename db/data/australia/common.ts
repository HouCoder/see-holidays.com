import commonHolidays from '../common';

export default {
  newYearsDay: commonHolidays.newYearsDay,
  australiaDay: {
    name: 'Australia Day',
    description:
      'Australia Day is the official national day of Australia. Observed annually on 26 January, it marks the 1788 landing of the First Fleet and raising of the Union Flag of Great Britain by Arthur Phillip at Sydney Cove, a small bay on the southern shore of Sydney Harbour.',
    link: 'https://en.wikipedia.org/wiki/Australia_Day',
    dates: [
      {
        startDate: '2025-01-27',
      },
    ],
  },
  goodFriday: commonHolidays.goodFriday,
  easter: {
    name: 'Easter',
    description:
      'Easter is a Christian holiday celebrating the resurrection of Jesus Christ from the dead—marking the culmination of Holy Week—and is often observed with church services, festive meals, and traditions like egg hunts and chocolate bunnies.',
    link: 'https://en.wikipedia.org/wiki/Easter',
    dates: [
      {
        startDate: '2025-04-19',
        endDate: '2025-04-21',
      },
    ],
  },
  anzacDay: {
    name: 'Anzac Day',
    description:
      'Anzac Day is Australia’s and New Zealand’s national day of remembrance held each April 25 to honor the members of the Australian and New Zealand Army Corps—particularly those who served and died at Gallipoli in World War I—and all who have served in conflicts, typically marked by dawn services, marches, and wreath-laying ceremonies.',
    link: 'https://en.wikipedia.org/wiki/Anzac_Day',
    dates: [
      {
        startDate: '2025-04-25',
      },
    ],
  },
  kingsBirthday: {
    name: 'King’s Birthday',
    description:
      'King’s Birthday is a public holiday in Australia celebrating the reigning monarch’s official birthday, observed on the second Monday in June in most states (with varying dates in Western Australia and Queensland) and marked by civic ceremonies, community events and the annual Birthday Honours.',
    link: 'https://en.wikipedia.org/wiki/King%27s_Official_Birthday',
    dates: [
      {
        startDate: '2025-06-09',
      },
    ],
  },
  labourDay: {
    ...commonHolidays.labourDay,
    dates: [
      {
        startDate: '2025-10-06',
      },
    ],
  },
  christmasDay: commonHolidays.christmasDay,
  boxingDay: commonHolidays.boxingDay,
};
