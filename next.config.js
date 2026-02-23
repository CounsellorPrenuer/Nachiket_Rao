/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  basePath: isGitHubPages ? '/Nachiket_Rao' : '',
  assetPrefix: isGitHubPages ? '/Nachiket_Rao/' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  webpack: (config, { isServer }) => {
    // Ignore Sentry internal modules that are not needed
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sentry-internal/feedback': false,
    };
    return config;
  },
}

module.exports = nextConfig
