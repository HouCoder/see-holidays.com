import { notFound } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import HolidaysInYearFull from '@/components/HolidaysInYearFull/HolidaysInYearFull';
import { getCounties, getRegions } from '@/db/queries/common';
import { codefyString } from '@/utils/functions';

type RegionPageProps = {
  params: {
    country: string;
    region: string;
  };
};

const getCountryDetailsByCode = async (countryCode: string) => {
  const allCountries = (await getCounties()).map((c) => ({
    ...c,
    code: codefyString(c.name),
  }));

  return allCountries.find((c) => c.code === countryCode);
};

const getRegionDetailsByCode = async (regionCode: string) => {
  const allRegions = (await getRegions()).map((r) => ({
    ...r,
    code: codefyString(r.name),
  }));

  return allRegions.find((r) => r.code === regionCode);
};

export const generateMetadata = async ({ params }: RegionPageProps) => {
  const { country, region } = await params;
  const countryDetails = await getCountryDetailsByCode(country);
  const regionDetails = await getRegionDetailsByCode(region);

  if (!countryDetails || !regionDetails) {
    return {
      title: 'State/region not found',
      description: 'The requested state/region does not exist.',
    };
  }

  return {
    title: `${regionDetails.name} public holidays by year - See Holidays`,
    description: `Public holidays in ${regionDetails.name}`,
  };
};

const RegionPage = async ({ params }: RegionPageProps) => {
  const { country, region } = await params;
  const countryDetails = await getCountryDetailsByCode(country);
  const regionDetails = await getRegionDetailsByCode(region);

  if (!countryDetails || !regionDetails) {
    notFound();
  }

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/holidays">Holidays</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/holidays/${countryDetails.code}`}>
              {countryDetails.name}
            </a>
          </li>
          <li className="breadcrumb-item active">{regionDetails.name}</li>
        </ol>
      </nav>
      <h1 className="mb-5">{regionDetails.name} public holidays by year</h1>
      <HolidaysInYearFull regionName={regionDetails.name} />
    </Container>
  );
};
export default RegionPage;
