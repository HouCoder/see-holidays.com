import commonGlobalHolidays from '../common';

export default [
  commonGlobalHolidays.newYearsDay,
  {
    name: "Day after New Year's Day",
    description: `The Day after New Year’s Day is a public holiday in New Zealand celebrated on January 2nd each year, right after New Year’s Day (January 1st). Most businesses, schools, and government offices are closed. This extra public holiday gives people more time to celebrate, recover, travel, and spend time with family after the New Year festivities. It is unique to New Zealand and means the New Year holiday period lasts two days for most people.`,
    link: "https://en.wikipedia.org/wiki/New_Year's_Day",
    dates: [
      {
        startDate: '2025-01-02',
      },
    ],
  },
  {
    name: 'Waitangi Day',
    description: `Waitangi Day, the national day of New Zealand, marks the anniversary of the initial signing—on 6 February 1840—of the Treaty of Waitangi.`,
    link: 'https://en.wikipedia.org/wiki/Waitangi_Day',
    dates: [
      {
        startDate: '2025-02-06',
      },
    ],
  },
  commonGlobalHolidays.goodFriday,
  {
    name: 'Easter Monday',
    description:
      'Easter is a Christian holiday celebrating the resurrection of Jesus Christ from the dead—marking the culmination of Holy Week—and is often observed with church services, festive meals, and traditions like egg hunts and chocolate bunnies.',
    link: 'https://en.wikipedia.org/wiki/Easter',
    dates: [
      {
        startDate: '2025-04-21',
      },
    ],
  },
  {
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
  {
    name: 'King’s Birthday',
    description:
      'King’s Birthday is a public holiday in Australia celebrating the reigning monarch’s official birthday, observed on the second Monday in June in most states (with varying dates in Western Australia and Queensland) and marked by civic ceremonies, community events and the annual Birthday Honours.',
    link: 'https://en.wikipedia.org/wiki/King%27s_Official_Birthday',
    dates: [
      {
        startDate: '2025-06-02',
      },
    ],
  },
  {
    name: 'Matariki',
    description: `In Māori culture, Matariki is the Pleiades star cluster and a celebration of its first rising in late June or early July. The rising marks the beginning of the new year in the Māori lunar calendar.`,
    link: 'https://en.wikipedia.org/wiki/Matariki',
    dates: [
      {
        startDate: '2025-06-20',
      },
    ],
  },
  {
    name: 'Labour Day',
    description: `Labour Day is an annual day of celebration of the labour movement and its achievements. It has its origins in the labour union movement, specifically the eight-hour day movement, which advocated eight hours for work, eight hours for recreation, and eight hours for rest.`,
    link: 'https://en.wikipedia.org/wiki/Labour_Day',
    dates: [
      {
        startDate: '2025-10-27',
      },
    ],
  },
  commonGlobalHolidays.christmasDay,
  commonGlobalHolidays.boxingDay,
];
