import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // https://github.com/vercel/next.js/discussions/67931
  // https://github.com/vercel/next.js/issues/71638#issuecomment-2431137842
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },

  // https://github.com/vercel/next.js/blob/v15.3.3/docs/01-app/03-building-your-application/01-routing/14-middleware.mdx#runtime
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
