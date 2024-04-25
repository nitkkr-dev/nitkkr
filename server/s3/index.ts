import { S3Client } from '@aws-sdk/client-s3';

import { env } from '~/lib/env';

const createS3Connection = () =>
  new S3Client({
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_ACCESS_KEY_SECRET,
    },
    region: env.AWS_S3_REGION,
  });

const globalForS3 = globalThis as unknown as {
  s3: ReturnType<typeof createS3Connection> | undefined;
};

export const s3 = globalForS3.s3 ?? createS3Connection();

if (process.env.NODE_ENV !== 'production') globalForS3.s3 = s3;

export const getS3Url = (type: 'private' | 'public' = 'public') =>
  type === 'public'
    ? `https://${env.AWS_PUBLIC_S3_NAME}.s3.${env.AWS_S3_REGION}.amazonaws.com`
    : `https://${env.AWS_PRIVATE_S3_NAME}.s3.${env.AWS_S3_REGION}.amazonaws.com`;
