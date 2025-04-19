/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PYSPIDER_API_URL: process.env.PYSPIDER_API_URL || 'http://localhost:5000',
  },
  webpack: (config, { isServer }) => {
    // Monaco Editor webpack config
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    // Add a rule to handle Monaco Editor workers
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/pyspider/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
