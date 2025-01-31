import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
const jiti = createJiti(fileURLToPath(import.meta.url));

const { env } = jiti('./lib/env/server');

/** @type {import('next').NextConfig} */
const config = {
  images: {
    loader: 'custom',
    loaderFile: './lib/loader.ts',
    remotePatterns: [
      { protocol: 'https', hostname: env.AWS_PUBLIC_S3_NAME },
      { protocol: 'https', hostname: env.AWS_PRIVATE_S3_NAME },
    ],
  },
};

export default config;
