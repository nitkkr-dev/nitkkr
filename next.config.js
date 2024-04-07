/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './lib/loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'isac-nitkkr-private.s3.ap-southeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
