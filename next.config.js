import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
const jiti = createJiti(fileURLToPath(import.meta.url));

const { env } = jiti('./lib/env');

/** @type {import('next').NextConfig} */
const config = {
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

export default config;
