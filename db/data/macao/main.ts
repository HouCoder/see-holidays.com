// https://www.gov.mo/en/public-holidays/year-2025/

import globalCommonHolidays from '../global-common';

export default {
  emoji: '🇲🇴',
  country: 'Macao',
  regions: {
    Macao: [
      globalCommonHolidays.newYearsDay,
      {
        ...globalCommonHolidays.chineseNewYear,
        dates: [
          {
            startDate: '2025-01-29',
            endDate: '2025-01-31',
          },
        ],
      },
      {
        name: 'Ching Ming Festival',
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
        ...globalCommonHolidays.labourDay,
        dates: [
          {
            startDate: '2025-05-01',
          },
        ],
      },
      {
        name: 'National Day',
        description: `National Day is a public holiday in Macao, observed on October 1st each year. It commemorates the founding of the People's Republic of China on October 1, 1949. In Macao, it's celebrated with various festivities, including flag-raising ceremonies, receptions, and fireworks displays.`,
        link: 'https://en.wikipedia.org/wiki/National_Day_of_the_People%27s_Republic_of_China',
        dates: [
          {
            startDate: '2025-10-01',
          },
        ],
      },
      {
        name: 'The day following the Chinese Mid-Autumn Festival',
        description: `"The day following the Chinese Mid-Autumn Festival" is a public holiday in Macao, established so that people can rest and celebrate with family after the traditional nighttime festivities of the Mid-Autumn Festival. This holiday reflects the importance of family reunion and cultural traditions in Macao society.`,
        link: 'https://en.wikipedia.org/wiki/Mid-Autumn_Festival',
        dates: [
          {
            startDate: '2025-10-07',
          },
        ],
      },
      {
        name: 'Chung Yeung Festival',
        description:
          'The Chung Yeung Festival is a public holiday in Macao during which families visit the graves of their ancestors to pay respects and perform rituals, reflecting traditional Chinese values of filial piety and ancestor remembrance. It typically falls on the ninth day of the ninth lunar month.',
        link: 'https://en.wikipedia.org/wiki/Double_Ninth_Festival',
        dates: [
          {
            startDate: '2025-10-29',
          },
        ],
      },
      {
        name: 'Macao S.A.R. Establishment Day',
        description:
          'In 1987, Portugal and China signed the Joint Declaration, setting the stage for Macau to become a SAR under the principle of “one country, two systems.” On December 20, 1999, sovereignty was formally transferred to China, marking the birth of the Macau Special Administrative Region.',
        link: 'https://en.wikipedia.org/wiki/Macau',
        dates: [
          {
            startDate: '2025-12-20',
          },
        ],
      },
    ],
  },
};
