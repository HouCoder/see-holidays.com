// https://calendar.talllkai.com/2025
import commonHolidays, { buildAdditionalWorkingDay } from '../common';

export default {
  emoji: '🇹🇼',
  country: 'Taiwan',
  sources: {
    2025: '',
  },
  regions: {
    Taiwan: [
      commonHolidays.newYearsDay,
      {
        ...commonHolidays.chineseNewYear,
        dates: [
          {
            startDate: '2025-01-27',
            endDate: '2025-01-31',
          },
        ],
      },
      buildAdditionalWorkingDay('2025-02-08'),
      {
        name: 'Peace Memorial Day',
        description:
          'Peace Memorial Day, also known as 228 Memorial Day, is a public holiday in Taiwan for honoring and mourning the victims and families of the February 28 incident in 1947. Proposals to establish Peace Memorial Day as a holiday began in the early 1990s.',
        link: 'https://en.wikipedia.org/wiki/Peace_Memorial_Day',
        dates: [
          {
            startDate: '2025-02-28',
          },
        ],
      },
      {
        ...commonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-04-03',
          },
        ],
      },
      {
        name: 'Qingming Festival',
        description:
          'The Qingming Festival (or Ching Ming Festival) is a traditional Chinese holiday where people honor their ancestors by visiting their graves to clean the sites, make offerings, and pay respects, often combined with spring outings to enjoy nature.',
        link: 'https://en.wikipedia.org/wiki/Qingming_Festival',
        dates: [
          {
            startDate: '2025-04-04',
          },
        ],
      },
      {
        name: "Children's Day",
        description: `Children's Day is a commemorative date celebrated annually in honour of children, whose date of observance varies by country. In 1925, International Children's Day was first proclaimed in Geneva during the World Conference on Child Welfare.`,
        link: "https://en.wikipedia.org/wiki/Children's_Day",
        dates: [
          {
            startDate: '2025-04-04',
          },
        ],
      },
      /*
      {
        ...commonHolidays.labourDay, // Only available from 2026
        dates: [
          {
            startDate: '2026-05-01',
          },
        ],
      },
      */
      {
        ...commonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-05-30',
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
          },
        ],
      },
      {
        name: "Teachers' Day",
        description:
          "Teachers' Day is a special day for the appreciation of teachers. It may include celebrations to honor them for their special contributions in a particular field area, or the community tone in education.",
        link: "https://en.wikipedia.org/wiki/List_of_Teachers'_Days",
        dates: [
          {
            startDate: '2025-09-28',
          },
        ],
      },
      {
        ...commonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-09-29',
          },
        ],
      },
      {
        name: 'Mid-Autumn Festival',
        description:
          'The Mid-Autumn Festival is celebrated when the moon is believed to be at its fullest and brightest. In Chinese culture, the full moon symbolizes reunion, making it a central theme of the festival.',
        link: 'https://en.wikipedia.org/wiki/Mid-Autumn_Festival',
        dates: [
          {
            startDate: '2025-10-06',
          },
        ],
      },
      {
        name: 'National Day',
        description:
          'The National Day of the Republic of China, also referred to as Double Ten Day or Double Tenth Day, is a public holiday on 10 October, now held annually as national day in the Republic of China.',
        link: 'https://en.wikipedia.org/wiki/National_Day_of_the_Republic_of_China',
        dates: [
          {
            startDate: '2025-10-10',
          },
        ],
      },
      {
        ...commonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-10-24',
          },
        ],
      },
      {
        name: 'Retrocession Day',
        description:
          'Retrocession Day is the annual observance and a public holiday in Taiwan commemorating the end of Japanese rule of Taiwan and Penghu and the claimed return of Taiwan to the Republic of China on 25 October 1945.',
        link: 'https://en.wikipedia.org/wiki/Retrocession_Day',
        dates: [
          {
            startDate: '2025-10-25',
          },
        ],
      },
      {
        name: 'Constitution Day',
        description:
          'Coincides with Christmas, and the anniversary of the 1947 ROC Constitution.',
        link: 'https://en.wikipedia.org/wiki/Constitution_Day_of_the_Republic_of_China',
        dates: [
          {
            startDate: '2025-12-25',
          },
        ],
      },
    ],
  },
};
