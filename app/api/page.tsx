'use client';

import { Accordion, Container } from 'react-bootstrap';

export default function ApiPage() {
  return (
    <Container>
      <h1>APIs</h1>
      <p>
        This page contains all the APIs available on seeholidays.com, you can use them in your own App.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center">
              <div
                className="bg-success text-white rounded-2"
                style={{
                  padding: '2px 8px',
                  marginRight: '10px',
                  fontSize: '14px',
                }}
              >
                GET
              </div>
              <div>/api/is-holiday</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This API will tell you if a given date is a holiday in a given
              region.
            </p>
            <h5>Parameters</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>regionName</td>
                  <td>string</td>
                  <td>
                    The name of the region, e.g. &quot;New South Wales&quot;
                  </td>
                </tr>
                <tr>
                  <td>date</td>
                  <td>string</td>
                  <td>
                    The date in YYYY-MM-DD format, e.g. &quot;2025-12-25&quot;
                  </td>
                </tr>
              </tbody>
            </table>
            <h5>Example</h5>
            <p>
              <a
                href="/api/is-holiday?regionName=Victoria&date=2025-12-25"
                target="_blank"
                rel="noopener"
              >
                /api/is-holiday?regionName=Victoria&date=2025-12-25
              </a>
            </p>
            <h5>Response</h5>
            <pre>
              <code>
                {`{
  "isWorkingDay": false,
  "holidayName": "Christmas Day"
}`}
              </code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
