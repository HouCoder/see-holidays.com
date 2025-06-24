// https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140038
import globalCommonHolidays from '../global-common';

export default {
  emoji: '🇰🇷',
  country: 'South Korea',
  regions: {
    'South Korea': [
      globalCommonHolidays.newYearsDay,
      {
        name: 'One-time National Holiday',
        description:
          'The Korean government decided to designate Jan. 27, the day before the Lunar New Year break, as a temporary public holiday in a Cabinet meeting at the Seoul Government Complex, central Seoul, on Tuesday.',
        link: 'https://koreajoongangdaily.joins.com/news/2025-01-14/national/socialAffairs/Jan-27-public-holiday-approved-in-Cabinet-meeting-to-stimulate-local-economy/2221942',
        dates: [
          {
            startDate: '2025-01-27',
          },
        ],
      },
      {
        name: "Seollal (Lunar New Year's Day)",
        description:
          'Seollal is a Korean traditional festival and national holiday commemorating the first day of the Korean lunisolar calendar. It is one of the most important traditional holidays for ethnic Koreans, being celebrated in both North Korea and South Korea as well as Korean diaspora all around the world.',
        link: 'https://en.wikipedia.org/wiki/Korean_New_Year',
        dates: [
          {
            startDate: '2025-01-28',
            endDate: '2025-01-30',
          },
        ],
      },
      {
        name: 'Independence Movement Day',
        description:
          'The March First Movement was a series of protests against Japanese colonial rule that was held throughout Korea and internationally by the Korean diaspora beginning on March 1, 1919. Protests were largely concentrated in March and April of that year, although related protests continued until 1921.',
        link: 'https://en.wikipedia.org/wiki/March_First_Movement',
        dates: [
          {
            startDate: '2025-03-01',
          },
        ],
      },
      {
        ...globalCommonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-03-03',
          },
        ],
      },
      {
        name: "Children's Day",
        description: `Children's Day is a commemorative date celebrated annually in honour of children, whose date of observance varies by country. In 1925, International Children's Day was first proclaimed in Geneva during the World Conference on Child Welfare.`,
        link: "https://en.wikipedia.org/wiki/Children's_Day",
        dates: [
          {
            startDate: '2025-05-05',
          },
        ],
      },
      {
        name: "Buddha's Birthday",
        description:
          "Buddha's Birthday or Buddha Day is a primarily Buddhist festival that is celebrated in most of South, Southeast and East Asia, commemorating the birth of the prince Siddhartha Gautama, who became the Gautama Buddha and founded Buddhism.",
        link: "https://en.wikipedia.org/wiki/Buddha's_Birthday",
        dates: [
          {
            startDate: '2025-05-05',
          },
        ],
      },
      {
        ...globalCommonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-05-06',
          },
        ],
      },
      {
        name: 'Presidential Election Day',
        description:
          'The presidential election day for voting the next president of South Korea. The poll ends at 20:00 (KST), followed by ballot count streamed live on broadcast networks. This day is designated as a temporary holiday, hence most government agencies, public services, attractions, and businesses may be subject to closure.',
        link: '',
        dates: [
          {
            startDate: '2025-06-03',
          },
        ],
      },
      {
        name: 'Memorial Day',
        description:
          'Memorial Day serves to honor the soldiers and civilians who have given their lives for their country. While memorial services are held nationwide, the largest ceremony takes place at the National Cemetery in Seoul.',
        link: 'https://en.wikipedia.org/wiki/Memorial_Day_(South_Korea)',
        dates: [
          {
            startDate: '2025-06-06',
          },
        ],
      },
      {
        name: 'Liberation Day',
        description:
          'The National Liberation Day of Korea is a public holiday celebrated annually on 15 August in both North Korea and South Korea. It commemorates the day when Korean Peninsula was liberated by the Allies in 1945 from 35 years of Japanese colonial rule.',
        link: 'https://en.wikipedia.org/wiki/National_Liberation_Day_of_Korea',
        dates: [
          {
            startDate: '2025-08-15',
          },
        ],
      },
      {
        name: 'National Foundation Day',
        description:
          "Gaecheonjeol (Korean: 개천절; Hanja: 開天節; lit. 'The day the heavens opened') is a public holiday in South Korea on 3 October. Also known by the English name National Foundation Day, this holiday celebrates the legendary formation of the first Korean state of Gojoseon by legendary king Dangun in 2333 BC.",
        link: 'https://en.wikipedia.org/wiki/National_Foundation_Day_(Korea)',
        dates: [
          {
            startDate: '2025-10-03',
          },
        ],
      },
      {
        name: 'Chuseok (Korean Thanksgiving Day)',
        description:
          'Chuseok, also known as Hangawi, is a major mid-autumn harvest festival and a three-day holiday in South Korea celebrated on the 15th day of the 8th month of the lunisolar calendar on the full moon.',
        link: 'https://en.wikipedia.org/wiki/Chuseok',
        dates: [
          {
            startDate: '2025-10-05',
            endDate: '2025-10-07',
          },
        ],
      },
      {
        ...globalCommonHolidays.additionalHoliday,
        dates: [
          {
            startDate: '2025-10-08',
          },
        ],
      },
      {
        name: 'Hangeul Day',
        description:
          "The Korean Alphabet Day, known as Hangeul Day in South Korea, and Chosŏn'gŭl Day in North Korea, is a national Korean commemorative day marking the invention and proclamation of Hangul, the Korean alphabet, by the 15th-century King Sejong the Great.",
        link: 'https://en.wikipedia.org/wiki/Hangul_Day',
        dates: [
          {
            startDate: '2025-10-09',
          },
        ],
      },
      globalCommonHolidays.christmasDay,
    ],
  },
};
