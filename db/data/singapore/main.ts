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
      {
        name: 'Good Friday',
        description: `Good Friday, also known as Holy Friday, Great Friday, Great and Holy Friday, or Friday of the Passion of the Lord, is a solemn Christian holy day commemorating the crucifixion of Jesus and his death at Calvary.`,
        link: 'https://en.wikipedia.org/wiki/Good_Friday',
        dates: [
          {
            startDate: '2025-04-18',
          },
        ],
      },
      {
        name: 'Labour Day',
        description: `In Singapore, Labour Day, also known as May Day, is celebrated on May 1st as a public holiday to commemorate the contributions of workers. It's a day for solidarity and recognition of the workforce.`,
        link: 'https://en.wikipedia.org/wiki/Labour_Day_(Singapore)',
        dates: [
          {
            startDate: '2025-05-01',
          },
        ],
      },
      {
        name: 'Polling Day',
        description: `Polling Day is a public holiday for the general and presidential elections. It is not a public holiday for by-elections.`,
        link: 'https://www.gov.sg/explainers/polling-day-and-election-campaigning-101',
        dates: [
          {
            startDate: '2025-05-03',
          },
        ],
      },
      {
        name: 'Vesak Day',
        description: `Vesak, also known as Buddha Jayanti, Buddha Purnima, Visak Bochea and Buddha Day, is a holiday traditionally observed by Buddhists in South Asia and Southeast Asia, as well as in Tibet and Mongolia. It is among the most important Buddhist festivals.`,
        link: 'https://en.wikipedia.org/wiki/Vesak',
        dates: [
          {
            startDate: '2025-05-12',
          },
        ],
      },
      {
        name: 'Hari Raya Haji',
        description: `Eid al-Adha is the second of the two main festivals in Islam alongside Eid al-Fitr. It falls on the 10th of Dhu al-Hijja, the twelfth and final month of the Islamic calendar. Celebrations and observances are generally carried forward to the three following days, known as the Tashreeq days.`,
        link: 'https://en.wikipedia.org/wiki/Eid_al-Adha',
        dates: [
          {
            startDate: '2025-06-07',
          },
        ],
      },
      {
        name: 'National Day',
        description: `National Day, sometimes known internationally as Singapore Independence Day, is a major public holiday in Singapore which commemorates an independent and sovereign Republic of Singapore.`,
        link: 'https://en.wikipedia.org/wiki/National_Day_(Singapore)',
        dates: [
          {
            startDate: '2025-08-09',
          },
        ],
      },
      {
        name: 'Deepavali',
        description: `Diwali, also called Deepavali or Deepawali, is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It symbolises the spiritual victory of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance.`,
        link: 'https://en.wikipedia.org/wiki/Diwali',
        dates: [
          {
            startDate: '2025-10-20',
          },
        ],
      },
      {
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
    ],
  },
};
