'use client';

export default function imageLoader({
  src,
}: {
  quality: number;
  src: string;
  width: number;
}) {
  return `https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/${src}`;
}
