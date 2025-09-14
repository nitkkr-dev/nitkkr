'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Img {
  src: string;
  alt: string;
}

interface GalleryProps {
  base: string;
}

// pattern
function* patternGenerator() {
  const pattern: ('h' | 'v')[] = [
    'h',
    'v',
    'h',
    'v',
    'h',
    'h',
    'h',
    'v',
    'h',
    'v',
    'h',
    'h',
    'h',
    'h',
  ];
  let i = 0;
  while (true) {
    yield pattern[i];
    i = (i + 1) % pattern.length;
  }
}

export default function Gallery({ base }: GalleryProps) {
  // static images with base from server + random vertical images for better testing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images: Img[] = [
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
  ];

  const [horizontal, setHorizontal] = useState<Img[]>([]);
  const [vertical, setVertical] = useState<Img[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  // classify images into horizontal/vertical
  useEffect(() => {
    if (!images?.length) {
      setHorizontal([]);
      setVertical([]);
      return;
    }

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
            temp.onerror = () => resolve({ ...img, type: 'v' }); // fallback
          })
      )
    ).then((classified) => {
      setHorizontal(classified.filter((i) => i.type === 'h'));
      setVertical(classified.filter((i) => i.type === 'v'));
    });
  }, [images]);

  // merge following the pattern
  const merged = useMemo(() => {
    const out: { src: string; alt: string; type: 'h' | 'v' }[] = [];
    let h = 0,
      v = 0;
    const gen = patternGenerator();

    while (h < horizontal.length || v < vertical.length) {
      const curr = gen.next().value;
      if (curr === 'h' && h < horizontal.length) {
        out.push({ ...horizontal[h], type: 'h' });
        h++;
      } else if (curr === 'v' && v < vertical.length) {
        out.push({ ...vertical[v], type: 'v' });
        v++;
      }
    }
    return out;
  }, [horizontal, vertical]);

  // batching logic-11
  const batchSize = 11;
  const [visibleCount, setVisibleCount] = useState(batchSize);

  const handleViewMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + batchSize, merged.length));
  }, [merged.length]);

  const handleCloseModal = useCallback(() => setSelected(null), []);

  const visibleImages = merged.slice(0, visibleCount);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-wrap justify-center gap-4">
          {visibleImages.map((img, idx) => {
            const isBatchEnd =
              idx === visibleImages.length - 1 && visibleCount < merged.length;

            return (
              <div
                key={`${img.src}-${idx}`}
                className={`relative cursor-pointer overflow-hidden rounded 
                  ${isBatchEnd ? '' : 'border-2 border-primary-300'}`}
                style={
                  img.type === 'h'
                    ? { width: 400, height: 300 }
                    : { width: 192, height: 300 }
                }
                onClick={() => {
                  if (!isBatchEnd) setSelected(idx);
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.type === 'h' ? 400 : 192}
                  height={300}
                  className={`h-full w-full object-cover transition-all ${
                    isBatchEnd ? 'opacity-30' : 'opacity-100'
                  }`}
                />

                {isBatchEnd && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewMore();
                    }}
                    className="bg-black/50 text-white absolute inset-0 flex items-center justify-center text-lg font-semibold"
                  >
                    View More
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-80"
          onClick={handleCloseModal}
        >
          <div className="relative max-h-[90vh] max-w-4xl p-4">
            <Image
              src={visibleImages[selected].src}
              alt={visibleImages[selected].alt}
              width={1000}
              height={600}
              className="h-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="text-white absolute right-2 top-2 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
