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
        hostname: env.AWS_PUBLIC_S3_URL.replace(/^https:\/\//, ''),
      },
      {
        protocol: 'https',
        hostname: env.AWS_PRIVATE_S3_URL.replace(/^https:\/\//, ''),
      },
    ],
  },
};

export default config;
