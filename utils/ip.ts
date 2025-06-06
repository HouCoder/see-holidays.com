import { fetchWithTimeout } from '@/utils/fetch';
import { getRedisClient } from '@/utils/redis';

export const getIpDetails = async (pureIp: string) => {
  try {
    const redisClient = await getRedisClient();
    const redisKey = `IP: ${pureIp}`;

    // Try to get the data from Redis first
    const cachedData = await redisClient.get(redisKey);

    // If we have cached data, parse and return it
    if (cachedData) {
      console.log('IP details found in Redis cache');
      return JSON.parse(cachedData);
    }

    // If not in cache, fetch from API
    console.log('IP details not found in cache, fetching from API');
    const ipDetailRequest = await fetchWithTimeout(
      `https://iplocate.io/api/lookup/${pureIp}?apikey=${process.env.IPLOCATE_API_KEY}`,
    );
    const ipDetails = await ipDetailRequest.json();

    // Store in Redis for future use
    await redisClient.set(redisKey, JSON.stringify(ipDetails), {
      EX: Number(process.env.REDIS_EXPIRATION),
    });

    return ipDetails;
  } catch (error) {
    console.error('Error fetching IP details:', error);
    // Return a default or empty object in case of error
    return {};
  }
};
