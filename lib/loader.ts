'use client';

export default function imageLoader({
  src,
}: {
  quality: number;
  src: string;
  width: number;
}) {
  return src.startsWith('http')
    ? src
    : `https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/${src}`;
}
