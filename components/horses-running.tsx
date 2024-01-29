import Image from 'next/image';

export default function HorsesRunning({ direction }: { direction: string }) {
  const directionClass =
    direction === 'left'
      ? ' -scale-y-100 -rotate-180 -mr-[14px] '
      : ' -ml-[14px]';
  return (
    <>
      {direction === 'right' ? (
        <Image
          width={122.14}
          height={61.72}
          src="/images/cart.png"
          alt="cart"
          className="-mt-[20px]"
        />
      ) : null}

      {[...Array(10)].map((_, i) => (
        <Image
          key={i}
          height={60}
          width={90}
          alt="horses"
          className={'my-auto' + directionClass}
          src="/images/three-horses.png"
        />
      ))}

      {direction === 'left' ? (
        <Image
          width={122.14}
          height={61.72}
          src="/images/cart.png"
          alt="cart"
          className="-mt-[20px] -scale-y-100 -rotate-180"
        />
      ) : null}
    </>
  );
}
