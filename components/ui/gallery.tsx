'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface Img {
  src: string;
}

interface GalleryProps {
  base: string;
  images: Img[];
}

type ClassifiedImg = Img & { type: 'h' | 'v' };

export default function Gallery({ base, images }: GalleryProps) {
  const [horizontal, setHorizontal] = useState<ClassifiedImg[]>([]);
  const [vertical, setVertical] = useState<ClassifiedImg[]>([]);

  // Classify Images

  useEffect(() => {
    if (!base) return;

    void Promise.all(
      images.map(
        (img) =>
          new Promise<ClassifiedImg>((resolve) => {
            const fullSrc = `${base}/${img.src}`;
            const temp = new window.Image();
            temp.src = fullSrc;

            temp.onload = () =>
              resolve({
                src: fullSrc,
                type: temp.naturalWidth > temp.naturalHeight ? 'h' : 'v',
              });

            temp.onerror = () => resolve({ src: fullSrc, type: 'v' });
          })
      )
    ).then((classified) => {
      setHorizontal(classified.filter((i) => i.type === 'h'));
      setVertical(classified.filter((i) => i.type === 'v'));
    });
  }, [base, images]);

  // Build rows using patterns
  const rows = useMemo(() => {
    const mergedRows: ClassifiedImg[][] = [];
    let hIndex = 0;
    let vIndex = 0;
    let n = 0;
    const hArr = horizontal;
    const vArr = vertical;

    while (hIndex < hArr.length || vIndex < vArr.length) {
      const remainingH = hArr.length - hIndex;
      const remainingV = vArr.length - vIndex;
      const totalRemaining = remainingH + remainingV;
      let pattern: ('h' | 'v')[] = [];

      if (totalRemaining > 0 && totalRemaining <= 3) {
        for (let i = 0; i < remainingH; i++) pattern.push('h');
        for (let i = 0; i < remainingV; i++) pattern.push('v');
      } else {
        const mod4 = n % 4;
        if (mod4 === 0 && remainingH >= 2 && remainingV >= 2)
          pattern = ['h', 'v', 'h', 'v'];
        else if ((mod4 === 1 || mod4 === 3) && remainingH >= 3)
          pattern = ['h', 'h', 'h'];
        else if (mod4 === 2 && remainingH >= 2 && remainingV >= 2)
          pattern = ['v', 'h', 'v', 'h'];
        else if (remainingH >= 2 && remainingV >= 1) pattern = ['h', 'v', 'h'];
        else if (remainingH >= 1 && remainingV >= 2) pattern = ['v', 'h', 'v'];
        else if (remainingH > 0)
          pattern = Array(Math.min(remainingH, 3)).fill('h') as ('h' | 'v')[];
        else if (remainingV > 0)
          pattern = Array(Math.min(remainingV, 4)).fill('v') as ('h' | 'v')[];
      }

      const row: ClassifiedImg[] = [];
      for (const type of pattern) {
        if (type === 'h' && hIndex < hArr.length) {
          row.push(hArr[hIndex]);
          hIndex++;
        } else if (type === 'v' && vIndex < vArr.length) {
          row.push(vArr[vIndex]);
          vIndex++;
        }
      }

      if (row.length > 0) mergedRows.push(row);
      n++;
    }

    return mergedRows;
  }, [horizontal, vertical]);

  const [visibleRowCount, setVisibleRowCount] = useState(3);
  const handleViewMore = useCallback(
    () => setVisibleRowCount((prev) => prev + 3),
    []
  );
  const visibleRows = rows.slice(0, visibleRowCount);
  const visibleImages = visibleRows.flat();
  const hasMoreRows = visibleRowCount < rows.length;
  const viewMorePosition = hasMoreRows ? visibleImages.length - 1 : -1;

  return (
    <div className="mx-auto w-full max-w-[1232px] space-y-6 px-4">
      {visibleRows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6"
        >
          {row.map((img, idx) => {
            console.log('RENDERING IMAGE SRC →', img.src);

            const globalIndex =
              row.slice(0, idx + 1).length +
              rows.slice(0, rowIdx).flat().length -
              1;
            const isViewMorePosition = globalIndex === viewMorePosition;

            return (
              <div
                key={`${img.src}-${idx}`}
                className={`relative overflow-hidden rounded ${
                  isViewMorePosition ? '' : 'border-2 border-primary-300'
                } ${
                  img.type === 'h'
                    ? 'aspect-[4/3] w-full flex-[2] sm:w-[48%] lg:max-w-[400px]'
                    : 'aspect-[2/3] w-full flex-[1] sm:w-[30%] lg:max-w-[192px]'
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  unoptimized
                  className={`object-cover transition-all ${isViewMorePosition ? 'opacity-30' : 'opacity-100'}`}
                />
                {isViewMorePosition && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewMore();
                    }}
                    className="bg-black/50 text-white absolute inset-0 flex items-center justify-center text-sm font-semibold sm:text-base lg:text-lg"
                  >
                    View More
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
