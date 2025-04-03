import { PutObjectCommand } from '@aws-sdk/client-s3';

import { env } from '~/lib/env/server';

import { s3 } from '.';

export async function uploadFileToS3(file: File, filePath: string) {
  return await s3.send(
    new PutObjectCommand({
      Body: Buffer.from(await file.arrayBuffer()),
      Bucket: env.AWS_PUBLIC_S3_NAME,
      ContentType: file.type,
      Key: filePath,
    })
  );
}
