import commonHolidays, { buildAdditionalWorkingDay } from '../common';

export default {
  emoji: '🇨🇳',
  country: 'China',
  regions: {
    China: [
      commonHolidays.newYearsDay,
      buildAdditionalWorkingDay('2025-01-26'),
      {
        ...commonHolidays.chineseNewYear,
        dates: [
          {
            startDate: '2025-01-28',
            endDate: '2025-02-04',
          },
        ],
      },
      buildAdditionalWorkingDay('2025-02-08'),
      {
        name: 'Qingming Festival',
        description: `The Qingming Festival (or Ching Ming Festival) is a traditional Chinese holiday where people honor their ancestors by visiting their graves to clean the sites, make offerings, and pay respects, often combined with spring outings to enjoy nature.`,
        link: 'https://en.wikipedia.org/wiki/Qingming_Festival',
        dates: [
          {
            startDate: '2025-04-04',
            endDate: '2025-04-06',
          },
        ],
      },
      buildAdditionalWorkingDay('2025-04-27'),
      {
        ...commonHolidays.labourDay,
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
      buildAdditionalWorkingDay('2025-09-28'),
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
      {
        name: 'Mid-Autumn Festival',
        description: `The Mid-Autumn Festival is celebrated when the moon is believed to be at its fullest and brightest. In Chinese culture, the full moon symbolizes reunion, making it a central theme of the festival.`,
        link: 'https://en.wikipedia.org/wiki/Mid-Autumn_Festival',
        dates: [
          {
            startDate: '2025-10-06',
          },
        ],
      },
      buildAdditionalWorkingDay('2025-10-11'),
    ],
  },
};
