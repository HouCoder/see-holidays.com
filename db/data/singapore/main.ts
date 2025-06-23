// https://www.mom.gov.sg/employment-practices/public-holidays

import commonHolidays from '../common';

export default {
  emoji: '🇸🇬',
  country: 'Singapore',
  regions: {
    Singapore: [
      commonHolidays.newYearsDay,
      {
        ...commonHolidays.chineseNewYear,
        dates: [
          {
            startDate: '2025-01-29',
            endDate: '2025-01-30',
          },
        ],
      },
      {
        name: 'Hari Raya Puasa',
        description: `Hari Raya Puasa is a joyous celebration that marks the end of the fasting month of Ramadan. It's also a time for families and friends to come together, share meals, and seek forgiveness.`,
        link: 'https://en.wikipedia.org/wiki/Eid_al-Fitr',
        dates: [
          {
            startDate: '2025-03-31',
          },
        ],
      },
      commonHolidays.goodFriday,
      {
        ...commonHolidays.labourDay,
        dates: [
          {
            startDate: '2025-05-01',
          },
        ],
      },
      {
        name: 'Polling Day',
        description:
          'Polling Day is a public holiday for the general and presidential elections. It is not a public holiday for by-elections.',
        link: 'https://www.gov.sg/explainers/polling-day-and-election-campaigning-101',
        dates: [
          {
            startDate: '2025-05-03',
          },
        ],
      },
      {
        name: 'Vesak Day',
        description:
          'Vesak, also known as Buddha Jayanti, Buddha Purnima, Visak Bochea and Buddha Day, is a holiday traditionally observed by Buddhists in South Asia and Southeast Asia, as well as in Tibet and Mongolia. It is among the most important Buddhist festivals.',
        link: 'https://en.wikipedia.org/wiki/Vesak',
        dates: [
          {
            startDate: '2025-05-12',
          },
        ],
      },
      {
        name: 'Hari Raya Haji',
        description:
          'Eid al-Adha is the second of the two main festivals in Islam alongside Eid al-Fitr. It falls on the 10th of Dhu al-Hijja, the twelfth and final month of the Islamic calendar. Celebrations and observances are generally carried forward to the three following days, known as the Tashreeq days.',
        link: 'https://en.wikipedia.org/wiki/Eid_al-Adha',
        dates: [
          {
            startDate: '2025-06-07',
          },
        ],
      },
      {
        name: 'National Day',
        description:
          'National Day, sometimes known internationally as Singapore Independence Day, is a major public holiday in Singapore which commemorates an independent and sovereign Republic of Singapore.',
        link: 'https://en.wikipedia.org/wiki/National_Day_(Singapore)',
        dates: [
          {
            startDate: '2025-08-09',
          },
        ],
      },
      {
        name: 'Deepavali',
        description:
          'Diwali, also called Deepavali or Deepawali, is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It symbolises the spiritual victory of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance.',
        link: 'https://en.wikipedia.org/wiki/Diwali',
        dates: [
          {
            startDate: '2025-10-20',
          },
        ],
      },
      commonHolidays.christmasDay,
    ],
  },
};
