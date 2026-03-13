import { ListObjectsV2Command } from '@aws-sdk/client-s3';

import { env } from '~/lib/env/server';

import { s3 } from '.';

export const countChildren = async (
  folder?: string,
  bucket: 'private' | 'public' = 'public'
) => {
  let totalCount = 0;
  let continuationToken: string | undefined;

  try {
    do {
      const response = await s3.send(
        new ListObjectsV2Command({
          Bucket:
            bucket === 'public'
              ? env.AWS_PUBLIC_S3_NAME
              : env.AWS_PRIVATE_S3_NAME,
          ContinuationToken: continuationToken,
          Prefix: folder,
        })
      );

      totalCount += response.KeyCount ?? 0;
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);
  } catch (error) {
    console.error('MinIO/S3 countChildren Error:', error);
    return 0; // Return 0 so the page still renders without the gallery
  }

  return totalCount;
};
