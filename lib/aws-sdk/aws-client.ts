import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
import type {
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from '@aws-sdk/client-s3';

export class AWSClient {
  public readonly s3Client;
  private bucketName!: string;
  private prefix?: string;

  constructor(bucketName: string, prefix?: string) {
    this.prefix = prefix;
    this.s3Client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
      region: process.env.AWS_REGION!,
    });
    this.setBucketName(bucketName);
  }

  public setBucketName(bucketName: string) {
    this.bucketName = bucketName;
  }

  public async listObjectsV2(): Promise<number> {
    let totalCount = 0;
    let continuationToken: string | undefined = undefined;
    do {
      const command: ListObjectsV2CommandInput = {
        Bucket: this.bucketName,
        ContinuationToken: continuationToken,
        ...(this.prefix ? { Prefix: this.prefix } : {}),
      };

      const response: ListObjectsV2CommandOutput = await this.s3Client.send(
        new ListObjectsV2Command(command)
      );

      if (response.Contents) {
        totalCount += response.Contents.length;
      }

      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    return totalCount;
  }
}
