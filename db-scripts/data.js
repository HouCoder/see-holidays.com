const newYearsDay = {
  name: "New Year's Day",
  description:
    "In the Gregorian calendar, New Year's Day is the first day of the calendar year, 1 January. Most solar calendars, such as the Gregorian and Julian calendars, begin the year regularly at or near the northern winter solstice.",
  link: "https://en.wikipedia.org/wiki/New_Year's_Day",
  dates: [
    {
      startDate: '2025-01-01',
    },
  ],
};
const commonAussieHolidays = {
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
    name: 'Labour Day',
    description:
      'Labour Day is a public holiday observed on varying dates across Australian states and territories to honor the achievements of the labour movement and workers, often marked by parades, community events and a long weekend.',
    link: 'https://en.wikipedia.org/wiki/Labour_Day',
    dates: [
      {
        startDate: '2025-10-06',
      },
    ],
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
    description:
      'Boxing Day, observed on December 26th in Australia and other Commonwealth countries, began as a tradition of giving “Christmas boxes” to service workers and the needy and today is marked by a public holiday, major retail sales and sporting events.',
    link: 'https://en.wikipedia.org/wiki/Boxing_Day',
    dates: [
      {
        startDate: '2025-12-26',
      },
    ],
  },
  additionalDay: {
    name: 'Additional Day',
    description:
      'When a certain holiday falls on a Saturday or Sunday the next following Monday is also a public holiday',
  },
};

export default [
  {
    emoji: '🇨🇳',
    country: 'China',
    region: 'China',
    holidays: [
      newYearsDay,
      {
        name: 'Special Working Day',
        description:
          'In China, certain weekends are designated as “make‑up” working days—swapped for adjacent weekdays off—to create extended consecutive public holiday periods around festivals like Spring Festival or National Day.',
        link: 'https://teamedupchina.com/special-working-days-china',
        dates: [
          {
            startDate: '2025-01-26',
          },
          {
            startDate: '2025-02-08',
          },
          {
            startDate: '2025-04-27',
          },
          {
            startDate: '2025-09-28',
          },
        ],
      },
      {
        name: 'Spring Festival',
        description:
          'Chinese New Year, or the Spring Festival, is a festival that celebrates the beginning of a new year on the traditional lunisolar Chinese calendar.',
        link: 'https://en.wikipedia.org/wiki/Chinese_New_Year',
        dates: [
          {
            startDate: '2025-01-28',
            endDate: '2025-02-04',
          },
        ],
      },
      {
        name: 'Qingming Festival',
        description:
          "Qingming Festival is also called Tomb Sweeping Day as it is the time for Chinese people to show respect to their ancestors by cleaning their ancestors' tombs and placing offerings.",
        link: 'https://en.wikipedia.org/wiki/Qingming_Festival',
        dates: [
          {
            startDate: '2025-04-04',
            endDate: '2025-04-06',
          },
        ],
      },
      {
        name: 'Labour Day',
        description:
          'In China, Labour Day, also known as May Day, is a statutory holiday celebrated on May 1st. It is a national holiday, officially recognized as a public holiday since 1949.',
        link: 'https://en.wikipedia.org/wiki/International_Workers%27_Day',
        dates: [
          {
            startDate: '2025-05-01',
            endDate: '2025-05-05',
          },
        ],
      },
      {
        name: 'Dragon Boat Festival',
        description:
          'The Dragon Boat Festival is a traditional Chinese holiday that occurs on the fifth day of the fifth month of the Chinese calendar, which corresponds to late May or early June in the Gregorian calendar.',
        link: 'https://en.wikipedia.org/wiki/Dragon_Boat_Festival',
        dates: [
          {
            startDate: '2025-05-31',
            endDate: '2025-06-02',
          },
        ],
      },
      {
        name: 'National Day',
        description:
          "China's National Day, celebrated annually on October 1st, commemorates the proclamation of the People's Republic of China by Mao Zedong on that date in 1949.",
        link: 'https://en.wikipedia.org/wiki/National_Day_of_the_People%27s_Republic_of_China',
        dates: [
          {
            startDate: '2025-10-01',
            endDate: '2025-10-08',
          },
        ],
      },
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'South Australia',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'New South Wales',
    holidays: [
      newYearsDay,
      commonAussieHolidays.australiaDay,
      commonAussieHolidays.goodFriday,
      commonAussieHolidays.easter,
      commonAussieHolidays.anzacDay,
      commonAussieHolidays.kingsBirthday,
      commonAussieHolidays.labourDay,
      commonAussieHolidays.christmasDay,
      commonAussieHolidays.boxingDay,
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Western Australia',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Tasmania',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Northern Territory',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Victoria',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Queensland',
    holidays: [
      newYearsDay,
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
    ],
  },
  {
    emoji: '🇦🇺',
    country: 'Australia',
    region: 'Australian Capital Territory',
    holidays: [
      newYearsDay,
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
    ],
  },
];
