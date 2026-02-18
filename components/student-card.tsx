import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

import { Card, CardContent, CardFooter } from '~/components/ui/card';

interface StudentCardProps {
  name: string;
  email?: string | null;
  phone?: string | null;
  image?: string | null;
  designation?: string;
}

export default function StudentCard({
  name,
  email,
  phone,
  image,
  designation,
}: StudentCardProps) {
  const displayName =
    name && (name === name.toUpperCase() || name === name.toLowerCase())
      ? name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
      : name;

  return (
    <Card className="bg-white flex min-h-[320px] w-full max-w-[300px] flex-col justify-between overflow-hidden rounded-lg border border-primary-700 shadow-lg sm:min-h-[360px]">
      <CardContent className="!p-3 sm:!p-4">
        <Image
          alt={name}
          src={image ?? 'fallback/user-image.jpg'}
          width={0}
          height={0}
          sizes="100vw"
          className="h-40 w-full rounded-lg object-cover sm:h-48"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-1 !p-3 !pb-3 !pt-1 text-center sm:!p-4 sm:!pb-4 sm:!pt-2">
        <h3 className="min-h-[2.5rem] text-lg font-semibold normal-case leading-tight text-primary-700 sm:min-h-0 sm:text-xl">
          {displayName}
        </h3>

        {designation && (
          <h5 className="text-sm text-primary-500 sm:text-base lg:text-lg">
            {designation}
          </h5>
        )}

        {email && (
          <p className="flex min-w-0 items-center gap-1 text-xs text-neutral-700 sm:text-sm">
            <MdEmail className="flex-shrink-0 text-primary-700" />
            <span className="truncate">{email}</span>
          </p>
        )}
        {phone && (
          <p className="flex items-center gap-1 text-xs text-neutral-700 sm:text-sm">
            <FaPhone className="flex-shrink-0 text-primary-700" />
            <span>{phone}</span>
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
