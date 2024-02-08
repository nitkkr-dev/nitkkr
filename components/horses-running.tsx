import Image from 'next/image';

export default function HorsesRunning({
  direction,
}: {
  direction: 'left' | 'right';
}) {
  const directionClass =
    direction === 'left'
      ? ' -scale-y-100 -rotate-180 -mr-[14px] '
      : ' -ml-[14px]';
  return (
    <figure className="mx-[15px] flex">
      {direction === 'right' ? (
        <Image
          alt="Chariot"
          className="-mt-[20px]"
          height={61.72}
          loading="lazy"
          width={122.14}
          src="https://s3-alpha-sig.figma.com/img/f7e6/2feb/3cf2c5cf97a787ba70bee06984bcb084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njXoleH35nMEUIgBD-cL-9eew1RMYWt4qtP~QyyoNATbmwnOCjv~R98vcS6JWRNl3wlL7lHNPza6vlS9A0yt~juberld4Hj-AdeuaVNDRN7V5dbvkIB-XM~s2NrckWWYernXUz~vHOIZADXas~gpDw1vJSYffxQUUc7WvurHxeDgImL8FO2aKD0xxGvcVSzaF89FcO0~COoYZKGkcd4v8Oy6n8UsBtKXPYbpZvwJG3i-Gf~tkSWTcLcvlCWFIrzMp27pu7KmxYjbMFSOaJ80LgIQ3KFth1zP3IrQcbz8dnVgmEDw4DScimyCEdUbqdFW-K0g3R5GLIRUAWBzSQmGqQ__"
        />
      ) : null}

      {[...Array(10)].map((_, index) => (
        <Image
          alt="Horse"
          className={'my-auto' + directionClass}
          height={60}
          key={index}
          loading="lazy"
          width={90}
          src="https://s3-alpha-sig.figma.com/img/5e24/161c/6eb09a82be6d186473ad0178c35ade74?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-nja~GQrWOsm-57VJMNouSehxERMj06MedVZy-OKKC9aY82h4yOBhtMVFNY202Am9Bl4yg-phHAlx2x6-ENHZtJNxOQHTyiwmhgC2m508vD98z3b0iT0ZsmI4MLd9JVkr-3KU~~KlzgbTyfJypt5wDLV2-RZ3ikwgj6x-B~AFAt863TXM7Zz4V0slTutl4XEsa8C-pxcgDOPzDSAyk0l6LThKY48xx4Sfy3C2jbdEwXrQrvZLwOxJSFoHC-Usk3UEMDMS7qX9XqcWKyGIzGHnb-mBNclurh~EUeD5tG8hx9GafBh87ewL9b9zDpGo~hgfEKbD93oSwTRY7PtVEKzQ__"
        />
      ))}

      {direction === 'left' ? (
        <Image
          alt="Chariot"
          className="-mt-[20px] -rotate-180 -scale-y-100"
          height={61.72}
          loading="lazy"
          width={122.14}
          src="https://s3-alpha-sig.figma.com/img/f7e6/2feb/3cf2c5cf97a787ba70bee06984bcb084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njXoleH35nMEUIgBD-cL-9eew1RMYWt4qtP~QyyoNATbmwnOCjv~R98vcS6JWRNl3wlL7lHNPza6vlS9A0yt~juberld4Hj-AdeuaVNDRN7V5dbvkIB-XM~s2NrckWWYernXUz~vHOIZADXas~gpDw1vJSYffxQUUc7WvurHxeDgImL8FO2aKD0xxGvcVSzaF89FcO0~COoYZKGkcd4v8Oy6n8UsBtKXPYbpZvwJG3i-Gf~tkSWTcLcvlCWFIrzMp27pu7KmxYjbMFSOaJ80LgIQ3KFth1zP3IrQcbz8dnVgmEDw4DScimyCEdUbqdFW-K0g3R5GLIRUAWBzSQmGqQ__"
        />
      ) : null}
    </figure>
  );
}
