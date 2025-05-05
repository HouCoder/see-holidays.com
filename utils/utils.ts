import { getSelectOptions } from '@/db/db';
import { flatMap } from 'lodash';
import { createParser } from 'nuqs';

// https://stackoverflow.com/a/41543705
export const removeEmoji = (text: string) =>
  text
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      '',
    )
    .trim();

export const selectOptions = getSelectOptions();

const flattenedRegionsWithNoEmoji = flatMap(
  selectOptions,
  (item) => item.options || item,
).map((region) => ({
  label: removeEmoji(region.label),
  value: region.value,
}));

export const parseAsRegion = createParser({
  parse(query) {
    return flattenedRegionsWithNoEmoji.find((region) => region.label === query);
  },
  serialize(value) {
    return removeEmoji(value.label);
  },
});
