import type { Metadata } from 'next';
import Container from 'react-bootstrap/Container';
import { getSelectOptions } from '@/db/queries/common';
import { codefyString } from '@/utils/functions';

export const metadata: Metadata = {
  title: 'All Holidays - See Holidays',
  description:
    'All Holidays on See Holidays. See Holidays is your simple guide to official public holidays worldwide. Our easy-to-use calendar helps you track international holidays for seamless business and travel planning.',
};

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
