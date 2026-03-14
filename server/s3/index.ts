import { S3Client } from '@aws-sdk/client-s3';

import { env } from '~/lib/env/server';

const isMinio = env.STORAGE_PROVIDER === 'minio';

const createS3Connection = () => {
  if (isMinio) {
    return new S3Client({
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_ACCESS_KEY_SECRET,
      },
      region: env.AWS_S3_REGION,
      endpoint: env.MINIO_ENDPOINT,
      forcePathStyle: true, // Required for MinIO
    });
  }

  return new S3Client({
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_ACCESS_KEY_SECRET,
    },
    region: env.AWS_S3_REGION,
  });
};

const globalForS3 = globalThis as unknown as {
  s3: ReturnType<typeof createS3Connection> | undefined;
};

export const s3 = globalForS3.s3 ?? createS3Connection();

if (env.NODE_ENV !== 'production') globalForS3.s3 = s3;

/**
 * Returns the base public URL for assets stored in the object store.
 * Works for both AWS S3 and MinIO depending on STORAGE_PROVIDER.
 */
export const getS3Url = (type: 'private' | 'public' = 'public') => {
  const bucket =
    type === 'public' ? env.AWS_PUBLIC_S3_NAME : env.AWS_PRIVATE_S3_NAME;

  if (isMinio) {
    // MinIO uses path-style URLs: http://localhost:9000/bucket/key
    return `${env.MINIO_ENDPOINT}/${bucket}/isaac-s3-images`;
  }

  return `https://${bucket}.s3.${env.AWS_S3_REGION}.amazonaws.com/isaac-s3-images`;
};

/**
 * Build a full public URL for a given object key.
 * Centralises URL construction so callers don't need to know about the provider.
 */
export const buildObjectUrl = (
  key: string,
  bucket: 'private' | 'public' = 'public'
) => {
  const bucketName =
    bucket === 'public' ? env.AWS_PUBLIC_S3_NAME : env.AWS_PRIVATE_S3_NAME;

  if (isMinio) {
    return `${env.MINIO_ENDPOINT}/${bucketName}/${key}`;
  }

  return `https://${bucketName}.s3.${env.AWS_S3_REGION}.amazonaws.com/${key}`;
};

export * from './list-folder-images';
export * from './upload';
