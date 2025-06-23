import { Redis } from '@upstash/redis';
import type { IpDetails } from '@/utils/ip';

let client: Redis | null = null;

const getRedisClient = () => {
  if (client) {
    return client;
  }

  client = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
    latencyLogging: true,
    keepAlive: true,
  });

  return client;
};

export async function setRedisKey(
  key: string,
  value: string,
  expiration: number = Number(process.env.UPSTASH_REDIS_EXPIRATION),
): Promise<void> {
  try {
    const redisClient = getRedisClient();
    await redisClient.set(key, value, { ex: expiration });
  } catch (error) {
    console.error(`Error setting Redis key ${key}:`, error);
  }
}

export async function getRedisKey(key: string): Promise<IpDetails | null> {
  try {
    const redisClient = getRedisClient();
    const value = await redisClient.get<IpDetails>(key);

    return value;
  } catch (error) {
    console.error(`Error getting Redis key ${key}:`, error);
    return null;
  }
}
