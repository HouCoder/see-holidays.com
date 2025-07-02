import { format, parseISO } from 'date-fns';
import React from 'react';
import { getHolidaysByRegionName } from '@/db/queries/common';

const dateWithWeekDay = (date: string) =>
  `${date} (${format(parseISO(date), 'EEEE')})`;

type ComponentProps = {
  regionName: string;
};

const HolidaysInYearFull = async ({ regionName }: ComponentProps) => {
  const holidaysInRegion = await getHolidaysByRegionName(regionName);

  if (holidaysInRegion.length === 0) {
    return (
      <div className="alert alert-warning">
        No holidays found for region <strong>{regionName}</strong>.
      </div>
    );
  }

  const allYears = [
    ...new Set(holidaysInRegion.map((h) => h.startDate.split('-')[0])),
  ]
    // Sort year list in descending order
    .map(Number)
    .sort((a, b) => b - a)
    .map(String);

  return (
    <>
      {allYears.map((year, index) => {
        const holidaysInYear = holidaysInRegion.filter((h) =>
          h.startDate.startsWith(year),
        );

        return (
          <React.Fragment key={`${regionName}-${year}`}>
            <div id={year}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>
                  <a href={`#${year}`}>{year}</a>
                </h2>
                <a href={`/?regions=${regionName}&year=${year}`}>
                  📅 View in calendar view
                </a>
              </div>

              <div className="table-responsive">
                <table
                  className="table table-striped"
                  style={{ minWidth: '700px' }}
                >
                  <thead>
                    <tr>
                      <th style={{ width: '20%' }}>Holiday</th>
                      <th style={{ width: '25%' }}>Date</th>
                      <th style={{ width: '55%' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidaysInYear.map((h) => (
                      <tr key={`${regionName}-${year}-${h.startDate}`}>
                        <th>{h.name}</th>
                        <td>
                          {h.endDate ? (
                            <>
                              <div>From: {dateWithWeekDay(h.startDate)}</div>
                              <div>To: {dateWithWeekDay(h.endDate)}</div>
                            </>
                          ) : (
                            dateWithWeekDay(h.startDate)
                          )}
                        </td>
                        <td>{h.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {index + 1 === allYears.length ? null : <hr />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default HolidaysInYearFull;
