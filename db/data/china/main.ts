import newYearsDay from '../new-years-day';

export default {
  emoji: '🇨🇳',
  country: 'China',
  regions: {
    China: [
      newYearsDay,
      {
        name: 'Special Working Day',
        description:
          'In China, certain weekends are designated as “make‑up” working days—swapped for adjacent weekdays off—to create extended consecutive public holiday periods around festivals like Spring Festival or National Day.',
        link: 'https://teamedupchina.com/special-working-days-china',
        dates: [
          {
            startDate: '2025-01-26',
            isWorkingDay: true,
          },
          {
            startDate: '2025-02-08',
            isWorkingDay: true,
          },
          {
            startDate: '2025-04-27',
            isWorkingDay: true,
          },
          {
            startDate: '2025-09-28',
            isWorkingDay: true,
          },
        ],
      },
      {
        name: 'Chinese New Year',
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
};
