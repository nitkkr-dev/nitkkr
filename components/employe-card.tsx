import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { cn } from '~/lib/utils';

export default function EmployeeCard({
  className,
  image,
  name,
  position,
  phone,
  email,
}: {
  className?: string;
  image: string;
  name: string;
  position: string;
  phone: string;
  email: string;
}) {
  return (
    <article
      className={cn(
        'border-gray-300 mx-auto flex items-center gap-3 rounded-lg border p-3 shadow-sm transition-all duration-300 sm:gap-4 sm:p-5',
        className
      )}
      style={{
        width: '90vw',
        maxWidth: '600px',
        backgroundColor: 'rgb(250, 250, 250)',
      }}
    >
      {/* Image */}
      <div className="flex-shrink-0 overflow-hidden rounded-md shadow-sm">
        <Image
          alt={name}
          className="h-[70px] w-[70px] rounded-md object-cover sm:h-[90px] sm:w-[90px] md:h-[110px] md:w-[110px]"
          height={110}
          width={110}
          src={image}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center space-y-1 text-[13px] sm:text-sm md:text-base">
        <h3 className="text-red-700 text-base font-semibold sm:text-lg md:text-xl">
          {name}
        </h3>
        <p className="text-gray-800 font-semibold">{position}</p>

        <div className="mt-1 space-y-[2px] sm:space-y-1">
          <p className="text-gray-700 flex items-center gap-2 break-all">
            <MdEmail className="text-red-700 flex-shrink-0" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <FaPhone className="text-red-700 flex-shrink-0" />
            {phone}
          </p>
        </div>
      </div>
    </article>
  );
}
