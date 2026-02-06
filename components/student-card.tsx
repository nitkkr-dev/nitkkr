import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

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
  return (
    <article className="flex min-h-[380px] w-[300px] flex-col items-center overflow-hidden rounded-lg border border-primary-500 bg-neutral-50 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Image
        alt={name}
        src={image ?? 'fallback/user-image.jpg'}
        width={280}
        height={280}
        className="flex-shrink-0 rounded-lg object-cover"
      />

      <h4 className="mb-0 mt-3 line-clamp-1 text-center font-serif text-xl font-bold text-primary-700">
        {name}
      </h4>

      {designation && (
        <p className="text-center text-base font-medium text-neutral-600">
          {designation}
        </p>
      )}

      {email && (
        <p className="flex items-center gap-1 text-xs text-neutral-700">
          <MdEmail className="flex-shrink-0 text-primary-700" />
          <span>{email}</span>
        </p>
      )}

      {phone && (
        <p className="flex items-center gap-1 text-xs text-neutral-700">
          <FaPhone className="flex-shrink-0 text-primary-700" />
          <span>{phone}</span>
        </p>
      )}
    </article>
  );
}
