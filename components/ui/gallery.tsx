import Image from 'next/image';
import Heading from '../heading';

const Gallery = ({ images }) => {
  const rows = [];
  let idx = 0;
  let isOddRow = true;

  while (idx < images.length) {
    const count = isOddRow ? 4 : 3;
    rows.push(images.slice(idx, idx + count));
    idx += count;
    isOddRow = !isOddRow;
  }

  return (
    <div className="px-20 py-10 space-y-2 bg-white"> {/* Gallery padding */}
     <Heading glyphDirection='ltr' heading='h1' href='' text='Gallery'/>
      {rows.map((row, rowIndex) => {
        const isOdd = rowIndex % 2 === 0;

        return (
          <div
            key={rowIndex}
            className="flex flex-wrap gap-2 w-full"
          >
            {row.map((src, colIndex) => {
              const globalIndex = row.slice(0, colIndex).length + rows.slice(0, rowIndex).reduce((a, r) => a + r.length, 0);
              const isLastImage = globalIndex === images.length - 1;

              let widthClass = 'md:w-full';

              if (isOdd) {
                // 4-image row: wide-narrow-wide-narrow
                if (row.length === 4) {
                  widthClass =
                    colIndex % 2 === 0 ? 'md:basis-[calc(33.33%-0.5rem)]' : 'md:basis-[calc(16.66%-0.5rem)]';
                } else if (row.length === 3) {
                  widthClass = 'md:basis-[calc(33.33%-0.5rem)]';
                } else if (row.length === 2) {
                  widthClass = 'md:basis-[calc(50%-0.5rem)]';
                } else {
                  widthClass = 'md:basis-full';
                }
              } else {
                // 3-image row: equal width
                if (row.length === 3) {
                  widthClass = 'md:basis-[calc(33.33%-0.5rem)]';
                } else if (row.length === 2) {
                  widthClass = 'md:basis-[calc(50%-0.5rem)]';
                } else {
                  widthClass = 'md:basis-full';
                }
              }

              return (
                <div
                  key={colIndex}
                  className={`relative h-[300px] w-full overflow-hidden ${widthClass}`}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${rowIndex}-${colIndex}`}
                    fill
                    className="object-cover rounded-md"
                  />
                  {isLastImage && (
                    <div className="absolute inset-0 bg-opacity-50 bg-neutral-100 flex items-center justify-center rounded-md">
                      <span className="text-black font-semibold text-lg">
                        View more →
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
