'use client';
import Accordion from 'react-bootstrap/Accordion';
import useSelectedRegions from '@/hooks/useSelectedRegions';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';

const HolidaysInYear = () => {
  const currentYear = new Date().getFullYear();
  const { holidays, regionEmojiMap } = useGlobalStore((state) => state);
  const selectedRegions = useSelectedRegions();

  if (selectedRegions.length === 0) {
    return null;
  }

  return (
    <div className="holidays-in-year d-none d-lg-block">
      <h3 className="mb-3">Public Holidays in {currentYear}</h3>
      <Accordion defaultActiveKey={String(selectedRegions[0].value)}>
        {selectedRegions.map((region) => (
          <Accordion.Item key={region.value} eventKey={String(region.value)}>
            <Accordion.Header>
              {regionEmojiMap[region.value]} {region.label}
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
                    <li key={`${holiday.title}-${holiday.start}`}>
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
