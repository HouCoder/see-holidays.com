import { parseAsRegion } from '@/utils/functions';
import { parseAsArrayOf, useQueryState } from 'nuqs';

export default function useSelectedRegions() {
  const [queryRegions] = useQueryState(
    'regions',
    parseAsArrayOf(parseAsRegion).withDefault([]),
  );
  const validRegions = queryRegions.filter((r) => r !== undefined);

  return validRegions;
}
