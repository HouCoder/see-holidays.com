'use client';
import { getCountryByRegionId } from '@/db/db';
import useSelectedRegions from '@/hooks/useSelectedRegions';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';
import Accordion from 'react-bootstrap/Accordion';

const HolidaysInYear = () => {
  const currentYear = new Date().getFullYear();
  const { holidays } = useGlobalStore((state) => state);
  const validRegions = useSelectedRegions();

  if (validRegions.length === 0) {
    return null;
  }

  return (
    <div className="holidays-in-year d-none d-lg-block">
      <h3 className="mb-3">Public Holidays in {currentYear}</h3>
      <Accordion defaultActiveKey={String(validRegions[0].value)}>
        {validRegions.map((region) => (
          <Accordion.Item key={region.value} eventKey={String(region.value)}>
            <Accordion.Header>
              {getCountryByRegionId(region.value)?.flag} {region.label}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="ps-3 m-0">
                {holidays
                  .filter(
                    (holiday) =>
                      holiday.regionId === region.value &&
                      holiday.start.startsWith(String(currentYear)),
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
