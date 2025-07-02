import { notFound } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import HolidaysInYearFull from '@/components/HolidaysInYearFull/HolidaysInYearFull';
import { getCounties, getRegionsByCountryId } from '@/db/queries/common';
import { codefyString } from '@/utils/functions';

type CountryPageProps = {
  params: {
    country: string;
  };
};

const getCountryDetailsByCode = async (countryCode: string) => {
  const allCountries = (await getCounties()).map((c) => ({
    ...c,
    code: codefyString(c.name),
  }));

  return allCountries.find((c) => c.code === countryCode);
};

export const generateMetadata = async ({ params }: CountryPageProps) => {
  const { country } = params;
  const countryDetails = await getCountryDetailsByCode(country);

  if (!countryDetails) {
    return {
      title: 'Country/region not found',
      description: 'The requested country/region does not exist.',
    };
  }
  const regions = await getRegionsByCountryId(countryDetails.id);

  if (regions.length === 1) {
    return {
      title: `${countryDetails.name} public holidays by year - See Holidays`,
      description: `Public holidays in ${countryDetails.name}`,
    };
  }

  return {
    title: `${countryDetails.name} public holidays - See Holidays`,
    description: `Public holidays in ${countryDetails.name}`,
  };
};

const CountryPage = async ({ params }: CountryPageProps) => {
  const { country } = params;
  const countryDetails = await getCountryDetailsByCode(country);

  if (!countryDetails) {
    notFound();
  }

  const regions = await getRegionsByCountryId(countryDetails.id);

  if (regions.length === 0) {
    notFound();
  }

  if (regions.length === 1) {
    return (
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/holidays">Holidays</a>
            </li>
            <li className="breadcrumb-item active">{countryDetails.name}</li>
          </ol>
        </nav>
        <h1 className="mb-5">{countryDetails.name} public holidays by year</h1>
        <HolidaysInYearFull regionName={countryDetails.name} />
      </Container>
    );
  }

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/holidays">Holidays</a>
          </li>
          <li className="breadcrumb-item active">{countryDetails.name}</li>
        </ol>
      </nav>
      <h1 className="mb-5">{countryDetails.name} public holidays</h1>
      <p>
        Each state/region in {countryDetails.name} has its own public holidays.
        Please select a state/region to view the holidays.
      </p>
      <ul className="mt-3">
        {regions.map((region) => (
          <li key={region.id}>
            <a
              href={`/holidays/${countryDetails.code}/${codefyString(region.name)}`}
            >
              {region.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default CountryPage;
