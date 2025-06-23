import { flatMap } from 'lodash';
import { createParser } from 'nuqs';
import type { SelectOption } from '@/db/queries/common';

export const parseAsRegion = (selectOptions: SelectOption[]) => {
  const flattenedRegions = flatMap(selectOptions, (item) => {
    if ('options' in item && item.options.length > 0) {
      return item.options;
    }

    if ('value' in item) {
      return [{ label: item.name, value: item.value }];
    }
  }).filter((r) => r !== undefined);

  return createParser({
    parse(query) {
      return flattenedRegions.find((region) => region.label === query);
    },
    serialize(value) {
      return value?.label || '';
    },
  });
};
