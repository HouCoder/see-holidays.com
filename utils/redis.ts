import { type RedisClientType, createClient } from 'redis';

let client: RedisClientType | null = null;

export async function getRedisClient(): Promise<RedisClientType> {
  if (client) {
    return client;
  }

  try {
    client = createClient({
      url: process.env.REDIS_HOST,
      socket: {
        reconnectStrategy: (retries, cause) => {
          console.error('Redis connection error:', cause);
          console.log(`Reconnecting to Redis... Attempt #${retries}`);

          return Math.min(retries * 50, 500);
        },
      },
    });

    await client.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    client = null;
    throw error;
  }

  return client;
}

export async function disconnectRedis(): Promise<void> {
  if (!client) {
    return;
  }

  try {
    await client.disconnect();
    console.log('Disconnected from Redis');
  } catch (error) {
    console.error('Error disconnecting from Redis:', error);
  } finally {
    client = null;
  }
}
