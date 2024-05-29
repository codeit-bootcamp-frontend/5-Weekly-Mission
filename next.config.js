/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
