'use client';

import { env } from '~/lib/env/client';

export default function imageLoader({
  src,
}: {
  quality: number;
  src: string;
  width: number;
}) {
  return src.startsWith('http') ? src : `${env.NEXT_PUBLIC_AWS_S3_URL}/${src}`;
}
