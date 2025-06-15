import { fetchWithTimeout } from '@/utils/fetch';
import { getRedisKey, setRedisKey } from '@/utils/redis';

export type IpDetails = {
  ip: string;
  country: string | null;
  country_code: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  subdivision: string | null;
};

export const getIpDetails = async (
  pureIp: string,
): Promise<IpDetails | Record<string, never>> => {
  try {
    const redisKey = `IP: ${pureIp}`;

    // Try to get the data from Redis first
    const cachedData = await getRedisKey(redisKey);

    // If we have cached data, parse and return it
    if (cachedData) {
      console.log('IP details found in Redis cache');
      return cachedData;
    }

    // If not in cache, fetch from API
    console.log('IP details not found in cache, fetching from API');
    const ipDetailRequest = await fetchWithTimeout(
      `https://iplocate.io/api/lookup/${pureIp}?apikey=${process.env.IPLOCATE_API_KEY}`,
    );
    const ipDetails = await ipDetailRequest.json();

    // Store in Redis for future use
    setRedisKey(redisKey, JSON.stringify(ipDetails));

    return ipDetails;
  } catch (error) {
    console.error('Error fetching IP details:', error);
    // Return a default or empty object in case of error
    return {};
  }
};
