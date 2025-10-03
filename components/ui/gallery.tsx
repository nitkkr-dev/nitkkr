'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface Img {
  src: string;
  alt: string;
}

interface GalleryProps {
  base: string;
}

// Row patterns
const rowPatterns: ('h' | 'v')[][] = [
  ['h', 'v', 'h', 'v'],
  ['h', 'h', 'h'],
  ['v', 'h', 'v', 'h'],
  ['h', 'h', 'h'],
];

export default function Gallery({ base }: GalleryProps) {
  // static images with base from server + random vertical images for better testing
  const images: Img[] = useMemo(
    () => [
      { src: `${base}/assets/mahabharat.jpeg`, alt: 'Mahabharat Illustration' },
      { src: `${base}/academics/0.jpg`, alt: 'Academic Building View 1' },
      { src: `${base}/academics/1.jpg`, alt: 'Academic Building View 2' },
      { src: `${base}/academics/2.jpg`, alt: 'Academic Building View 3' },
      { src: `${base}/events/image3.jpg`, alt: 'Campus Event Celebration' },
      { src: `${base}/hostels/gh1.webp`, alt: 'Girls Hostel Exterior View 1' },
      { src: `${base}/hostels/gh2.webp`, alt: 'Girls Hostel Exterior View 2' },
      { src: `${base}/hostels/gh3.webp`, alt: 'Girls Hostel Exterior View 3' },
      { src: `${base}/hostels/h1.webp`, alt: 'Boys Hostel Exterior View 1' },
      { src: `${base}/hostels/h2.webp`, alt: 'Boys Hostel Exterior View 2' },
      { src: `${base}/hostels/h3.webp`, alt: 'Boys Hostel Exterior View 3' },
      { src: `${base}/hostels/h4.webp`, alt: 'Boys Hostel Exterior View 4' },
      { src: `${base}/hostels/h5.webp`, alt: 'Boys Hostel Exterior View 5' },
      { src: `${base}/hostels/h6.webp`, alt: 'Boys Hostel Exterior View 6' },
      { src: `${base}/hostels/h7.webp`, alt: 'Boys Hostel Exterior View 7' },
      { src: `${base}/hostels/h8.webp`, alt: 'Boys Hostel Exterior View 8' },
      { src: `${base}/institute/image01.jpg`, alt: 'Main Institute Building' },
      { src: `${base}/assets/mahabharat.jpeg`, alt: 'Mahabharat Illustration' },
      { src: `${base}/academics/0.jpg`, alt: 'Academic Building View 1' },
      { src: `${base}/academics/1.jpg`, alt: 'Academic Building View 2' },
      { src: `${base}/academics/2.jpg`, alt: 'Academic Building View 3' },
      { src: `${base}/events/image3.jpg`, alt: 'Campus Event Celebration' },
      { src: `${base}/hostels/gh1.webp`, alt: 'Girls Hostel Exterior View 1' },
      { src: `${base}/hostels/gh2.webp`, alt: 'Girls Hostel Exterior View 2' },
      { src: `${base}/hostels/gh3.webp`, alt: 'Girls Hostel Exterior View 3' },
      { src: `${base}/hostels/h1.webp`, alt: 'Boys Hostel Exterior View 1' },
      { src: `${base}/hostels/h2.webp`, alt: 'Boys Hostel Exterior View 2' },
      { src: `${base}/hostels/h3.webp`, alt: 'Boys Hostel Exterior View 3' },
      { src: `${base}/hostels/h4.webp`, alt: 'Boys Hostel Exterior View 4' },
      { src: `${base}/hostels/h5.webp`, alt: 'Boys Hostel Exterior View 5' },
      { src: `${base}/hostels/h6.webp`, alt: 'Boys Hostel Exterior View 6' },
      { src: `${base}/hostels/h7.webp`, alt: 'Boys Hostel Exterior View 7' },
      { src: `${base}/hostels/h8.webp`, alt: 'Boys Hostel Exterior View 8' },
      { src: `${base}/institute/image01.jpg`, alt: 'Main Institute Building' },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
      {
        src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwnKumpD9IrCm6nx2f0ndrQ9p-vNxee2VQ&s`,
        alt: 'Main Institute Building',
      },
    ],
    [base]
  );

  const [horizontal, setHorizontal] = useState<(Img & { type: 'h' | 'v' })[]>(
    []
  );
  const [vertical, setVertical] = useState<(Img & { type: 'h' | 'v' })[]>([]);

  // Classify images as horizontal or vertical
  useEffect(() => {
    void Promise.all(
      images.map(
        (img) =>
          new Promise<Img & { type: 'h' | 'v' }>((resolve) => {
            const temp = new window.Image();
            temp.src = img.src;
            temp.onload = () =>
              resolve({
                ...img,
                type: temp.naturalWidth > temp.naturalHeight ? 'h' : 'v',
              });
            temp.onerror = () => resolve({ ...img, type: 'v' });
          })
      )
    ).then((classified) => {
      setHorizontal(classified.filter((i) => i.type === 'h'));
      setVertical(classified.filter((i) => i.type === 'v'));
    });
  }, [images]);

  // Merge images according to row patterns
  const rows = useMemo(() => {
    const mergedRows: (Img & { type: 'h' | 'v' })[][] = [];
    let hIndex = 0,
      vIndex = 0;
    let patternIndex = 0;

    while (hIndex < horizontal.length || vIndex < vertical.length) {
      const pattern = rowPatterns[patternIndex % rowPatterns.length];
      const row: (Img & { type: 'h' | 'v' })[] = [];

      for (const type of pattern) {
        if (type === 'h' && hIndex < horizontal.length) {
          row.push(horizontal[hIndex]);
          hIndex++;
        } else if (type === 'v' && vIndex < vertical.length) {
          row.push(vertical[vIndex]);
          vIndex++;
        }
      }

      if (row.length > 0) mergedRows.push(row);
      patternIndex++;
    }

    return mergedRows;
  }, [horizontal, vertical]);

  // Show 3 rows at a time
  const [visibleRowCount, setVisibleRowCount] = useState(3);

  const handleViewMore = useCallback(() => {
    setVisibleRowCount((prev) => prev + 3);
  }, []);

  // Get visible rows and flatten them
  const visibleRows = rows.slice(0, visibleRowCount);
  const visibleImages = visibleRows.flat();
  const hasMoreRows = visibleRowCount < rows.length;

  // Calculate which image should show the View More button
  const viewMorePosition = hasMoreRows ? visibleImages.length - 1 : -1;

  return (
    <div
      className="mx-auto space-y-6"
      style={{ width: '1232px', maxWidth: '100%' }}
    >
      {visibleRows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-4">
          {row.map((img, idx) => {
            const globalIndex =
              row.slice(0, idx + 1).length +
              rows.slice(0, rowIdx).flat().length -
              1;
            const isViewMorePosition = globalIndex === viewMorePosition;

            return (
              <div
                key={`${img.src}-${idx}`}
                className={`relative overflow-hidden rounded ${isViewMorePosition ? '' : 'border-2 border-primary-300'}`}
                style={
                  img.type === 'h'
                    ? { width: 400, height: 300 }
                    : { width: 192, height: 300 }
                }
              >
                {' '}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.type === 'h' ? 400 : 192}
                  height={300}
                  className={`h-full w-full object-cover transition-all ${isViewMorePosition ? 'opacity-30' : 'opacity-100'}`}
                />{' '}
                {isViewMorePosition && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewMore();
                    }}
                    className="bg-black/50 text-white absolute inset-0 flex items-center justify-center text-lg font-semibold"
                  >
                    {' '}
                    View More{' '}
                  </button>
                )}{' '}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
