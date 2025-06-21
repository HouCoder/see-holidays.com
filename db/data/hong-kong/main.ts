// https://www.mom.gov.sg/employment-practices/public-holidays

import commonHolidays from '../common';

export default {
  emoji: '🇭🇰',
  country: 'Hong Kong',
  regions: {
    'Hong Kong': [
      commonHolidays.newYearsDay,
      {
        ...commonHolidays.chineseNewYear,
        dates: [
          {
            startDate: '2025-01-29',
            endDate: '2025-01-31',
          },
        ],
      },
      {
        name: 'Ching Ming Festival',
        description: `The Qingming Festival (or Ching Ming Festival) is a traditional Chinese holiday where people honor their ancestors by visiting their graves to clean the sites, make offerings, and pay respects, often combined with spring outings to enjoy nature.`,
        link: 'https://en.wikipedia.org/wiki/Qingming_Festival',
        dates: [
          {
            startDate: '2025-04-04',
          },
        ],
      },
      {
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
      {
        name: 'The day following Good Friday',
        description: `"The day following Good Friday" as a public holiday in Hong Kong originated during British colonial rule, where it was established to extend the traditional Easter holiday period, allowing people more time for religious observance and family gatherings. This practice reflects a blend of British Christian customs and local societal needs.`,
        link: '',
        dates: [
          {
            startDate: '2025-04-19',
          },
        ],
      },
      {
        name: 'Easter Monday',
        description: `Easter Monday is the second day of Eastertide and a public holiday in more than 50 predominantly Christian countries. In Western Christianity it marks the second day of the Octave of Easter; in Eastern Christianity it marks the second day of Bright Week.`,
        link: 'https://en.wikipedia.org/wiki/Easter_Monday',
        dates: [
          {
            startDate: '2025-04-21',
          },
        ],
      },
      {
        name: 'Labour Day',
        description: `Labour Day is an annual day of celebration of the labour movement and its achievements. It has its origins in the labour union movement, specifically the eight-hour day movement, which advocated eight hours for work, eight hours for recreation, and eight hours for rest.`,
        link: 'https://en.wikipedia.org/wiki/Labour_Day',
        dates: [
          {
            startDate: '2025-05-01',
          },
        ],
      },
      {
        name: 'The Birthday of the Buddha',
        description: `Buddha's Birthday or Buddha Day is a primarily Buddhist festival that is celebrated in most of South, Southeast and East Asia, commemorating the birth of the prince Siddhartha Gautama, who became the Gautama Buddha and founded Buddhism.`,
        link: "https://en.wikipedia.org/wiki/Buddha's_Birthday",
        dates: [
          {
            startDate: '2025-05-05',
          },
        ],
      },
      {
        name: 'Tuen Ng Festival',
        description: `Tuen Ng Festival, also known as the Dragon Boat Festival, is the 5th day of the 5th month of the Lunar calendar. It goes with the traditional dragon boat racing with its origin dating back over 2,200 years ago.`,
        link: 'https://en.wikipedia.org/wiki/Dragon_Boat_Festival',
        dates: [
          {
            startDate: '2025-05-31',
          },
        ],
      },
      {
        name: 'Hong Kong Special Administrative Region Establishment Day',
        description: `Establishment Day, formally the Hong Kong Special Administrative Region Establishment Day, is celebrated annually on 1 July in Hong Kong, China since 1997.`,
        link: 'https://en.wikipedia.org/wiki/Hong_Kong_Special_Administrative_Region_Establishment_Day',
        dates: [
          {
            startDate: '2025-07-01',
          },
        ],
      },
      {
        name: 'National Day',
        description: `National Day is a public holiday in Hong Kong, observed on October 1st each year. It commemorates the founding of the People's Republic of China on October 1, 1949. In Hong Kong, it's celebrated with various festivities, including flag-raising ceremonies, receptions, and fireworks displays.`,
        link: 'https://en.wikipedia.org/wiki/National_Day_of_the_People%27s_Republic_of_China',
        dates: [
          {
            startDate: '2025-10-01',
          },
        ],
      },
      {
        name: 'The day following the Chinese Mid-Autumn Festival',
        description: `"The day following the Chinese Mid-Autumn Festival" is a public holiday in Hong Kong, established so that people can rest and celebrate with family after the traditional nighttime festivities of the Mid-Autumn Festival. This holiday reflects the importance of family reunion and cultural traditions in Hong Kong society.`,
        link: 'https://en.wikipedia.org/wiki/Mid-Autumn_Festival',
        dates: [
          {
            startDate: '2025-10-07',
          },
        ],
      },
      {
        name: 'Chung Yeung Festival',
        description: `The Chung Yeung Festival is a public holiday in Hong Kong during which families visit the graves of their ancestors to pay respects and perform rituals, reflecting traditional Chinese values of filial piety and ancestor remembrance. It typically falls on the ninth day of the ninth lunar month.`,
        link: 'https://en.wikipedia.org/wiki/Double_Ninth_Festival',
        dates: [
          {
            startDate: '2025-10-29',
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
      {
        name: 'The first weekday after Christmas Day',
        description: `Boxing Day, also called as Offering Day is a holiday celebrated after Christmas Day, occurring on the second day of Christmastide. Boxing Day was once a day to donate gifts to those in need, but it has evolved to become a part of Christmas festivities, with many people choosing to shop for deals on Boxing Day`,
        link: 'https://en.wikipedia.org/wiki/Boxing_Day',
        dates: [
          {
            startDate: '2025-12-26',
          },
        ],
      },
    ],
  },
};
