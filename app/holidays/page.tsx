import Container from 'react-bootstrap/Container';
import { getSelectOptions } from '@/db/queries/common';
import { codefyString } from '@/utils/functions';

export const metadata = {};

const HolidaysPage = async () => {
  const allOptions = await getSelectOptions();

  return (
    <Container>
      <h1 className="mb-5">Supported countries/regions</h1>
      <dl>
        {allOptions.map((option) => (
          <>
            <dt key={option.label}>
              <a href={`/holidays/${codefyString(option.name)}`}>
                {option.label}
              </a>
            </dt>
            {'options' in option && option.options.length > 0
              ? option.options.map((o) => (
                  <dd key={o.label} className="ms-4">
                    <a
                      href={`/holidays/${codefyString(option.name)}/${codefyString(o.label)}`}
                    >
                      - {o.label}
                    </a>
                  </dd>
                ))
              : null}
          </>
        ))}
      </dl>
    </Container>
  );
};
export default HolidaysPage;
