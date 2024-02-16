/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nitkkr.ac.in',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
    ],
  },
};

module.exports = nextConfig;
