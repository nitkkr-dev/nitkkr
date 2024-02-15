import Link from 'next/link';
import Image from 'next/image';

import MaxWidthWrapper from './maxWidthWrapper';

export default function MessionAndVission() {
  return (
    <MaxWidthWrapper>
      <div className="mt-20 flex items-center rounded-md">
        <div className="w-1/2 rounded-md px-4">
          <div>
            <h1 className="text-4xl text-primary-20">Vission</h1>
            <p className="text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-primary-20">Mession</h1>
            <p className="text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
          </div>
          <Link href="#" className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            width={300}
            height={300}
            className="h-64 w-full rounded-md object-cover"
            src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
            alt="About"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
