import Image from 'next/image';
import MaxWidthWrapper from './maxWidthWrapper';
import Link from 'next/link';

export default function AboutDisplay() {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center rounded-md bg-white">
        <div className="w-1/2 rounded-md">
          <img
            className="h-64 w-full rounded-l-md object-cover"
            src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
            alt="About"
          />
        </div>
        <div className="w-1/2 rounded-md px-4">
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eveniet laborum nesciunt quos voluptates. Tempore, soluta quam
            fugiat hic blanditiis, minima error optio voluptate tenetur ex
            facere placeat nobis quia aut architecto itaque fugit illum! Dolore
            ea alias est, esse expedita molestiae, perferendis, sapiente
            laboriosam atque adipisci voluptate omnis minima.
          </p>
          <Link href="#" className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
