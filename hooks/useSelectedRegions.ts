import { useGlobalStore } from '@/providers/GlobalStoreProvider';
import { parseAsRegion } from '@/utils/functions';
import { parseAsArrayOf, useQueryState } from 'nuqs';

export default function useSelectedRegions() {
  const { selectOptions } = useGlobalStore((state) => state);
  const [queryRegions] = useQueryState(
    'regions',
    parseAsArrayOf(parseAsRegion(selectOptions)).withDefault([]),
  );
  const validRegions = queryRegions.filter((r) => r !== undefined);

  return validRegions;
}
