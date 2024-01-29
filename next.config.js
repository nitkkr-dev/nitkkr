/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nitkkr.ac.in',
      },
    ],
  },
};

module.exports = nextConfig;
