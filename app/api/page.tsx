import { Container } from 'react-bootstrap';

export const metadata = { title: 'API - See Holidays' };

export default function ApiPage() {
  return (
    <Container>
      <h1>APIs</h1>
      <p>
        This page contains all the APIs available on seeholidays.com, you can
        use them in your own App.
      </p>
      <hr />
      <div className="d-flex align-items-center mb-3">
        <div className="bg-success text-white rounded-2 px-2 me-1">GET</div>
        <h4 className="mb-0">/api/is-holiday</h4>
      </div>
      <p>
        This API will tell you if a given date is a holiday in a given region.
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
            <td>The name of the region, e.g. &quot;New South Wales&quot;</td>
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>The date in YYYY-MM-DD format, e.g. &quot;2025-12-25&quot;</td>
          </tr>
        </tbody>
      </table>
      <h5>Example</h5>
      <p>/api/is-holiday?regionName=Victoria&date=2025-12-25</p>
      <h5>Response</h5>
      <pre>
        <code>
          {`{
  "isWorkingDay": false,
  "name": "Christmas Day"
}`}
        </code>
      </pre>
    </Container>
  );
}
