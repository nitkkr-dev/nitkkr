import { ListObjectsV2Command } from '@aws-sdk/client-s3';

import { env } from '~/lib/env/server';

import { s3 } from '.';

const DEFAULT_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

/**
 * Lists all image files in a given S3 folder (non-recursive) that match the allowed extensions.
 *
 * @param folder - The folder path in S3 (e.g., 'institute/cells/iks/')
 * @param allowedExtensions - Array of allowed file extensions (default: ['.png', '.jpg', '.jpeg', '.webp'])
 * @param bucket - The S3 bucket type ('public' or 'private', default: 'public')
 * @returns An array of objects with `src` property containing the relative path of each image
 */
export const listFolderImages = async (
  folder: string,
  allowedExtensions: string[] = DEFAULT_IMAGE_EXTENSIONS,
  bucket: 'private' | 'public' = 'public'
): Promise<{ src: string }[]> => {
  const images: { src: string }[] = [];
  let continuationToken: string | undefined;

  try {
    // Ensure folder path ends with '/'
    const normalizedFolder = folder.endsWith('/') ? folder : `${folder}/`;

    // Normalize extensions to lowercase
    const normalizedExtensions = allowedExtensions.map((ext) =>
      ext.toLowerCase().startsWith('.')
        ? ext.toLowerCase()
        : `.${ext.toLowerCase()}`
    );

    do {
      const response = await s3.send(
        new ListObjectsV2Command({
          Bucket:
            bucket === 'public'
              ? env.AWS_PUBLIC_S3_NAME
              : env.AWS_PRIVATE_S3_NAME,
          Prefix: `isaac-s3-images/${normalizedFolder}`,
          ContinuationToken: continuationToken,
          Delimiter: '/', // This ensures we only get immediate children (not recursive)
        })
      );

      if (response.Contents) {
        for (const object of response.Contents) {
          if (!object.Key) continue;

          // Get the filename from the full key
          const key = object.Key;
          const fileName = key.split('/').pop();

          if (!fileName) continue;

          // Check if the file has an allowed extension
          const hasAllowedExtension = normalizedExtensions.some((ext) =>
            fileName.toLowerCase().endsWith(ext)
          );

          if (hasAllowedExtension) {
            // Remove the 'isaac-s3-images/' prefix to get the relative path
            const relativePath = key.replace('isaac-s3-images/', '');
            images.push({ src: relativePath });
          }
        }
      }

      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    // Sort images naturally (by filename)
    images.sort((a, b) => {
      const nameA = a.src.split('/').pop() ?? '';
      const nameB = b.src.split('/').pop() ?? '';
      return nameA.localeCompare(nameB, undefined, {
        numeric: true,
        sensitivity: 'base',
      });
    });
  } catch (error) {
    console.error('S3/MinIO listFolderImages Error:', error);
    // Return empty array on error so the page still renders without the gallery
    return [];
  }

  return images;
};
