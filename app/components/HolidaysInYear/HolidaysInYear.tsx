import { getCountryByRegionId } from '@/db/db';
import { useHolidaysStore } from '@/stores/useHolidaysStore';
import { parseAsRegion } from '@/utils/utils';
import { parseAsArrayOf, useQueryState } from 'nuqs';
import Accordion from 'react-bootstrap/Accordion';

const HolidaysInYear = () => {
  const currentYear = new Date().getFullYear();
  const holidays = useHolidaysStore((state) => state.holidays);
  const [queryRegions] = useQueryState(
    'regions',
    parseAsArrayOf(parseAsRegion).withDefault([]),
  );

  if (queryRegions.length === 0) {
    return null;
  }

  return (
    <div className="holidays-in-year d-none d-lg-block">
      <h3 className="mb-3">Public Holidays in {currentYear}</h3>
      <Accordion defaultActiveKey={queryRegions[0].value}>
        {queryRegions.map((region) => (
          <Accordion.Item key={region.value} eventKey={region.value}>
            <Accordion.Header>
              {getCountryByRegionId(region.value).flag} {region.label}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="ps-3 m-0">
                {holidays
                  .filter(
                    (holiday) =>
                      holiday.regionId === region.value &&
                      holiday.start.startsWith(currentYear),
                  )
                  .map((holiday) => (
                    <li key={holiday.start}>
                      <strong>{holiday.title}</strong>
                      <br />
                      <span className="fst-italic">
                        {holiday.end
                          ? `(${holiday.start} to ${holiday.end})`
                          : `(${holiday.start})`}
                      </span>
                    </li>
                  ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default HolidaysInYear;
