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
        'flex items-center gap-2 rounded-lg border border-gray-300 p-4 shadow-sm md:gap-3 md:p-5 mx-auto',
        className
      )}
      style={{
        width: '45vw',
        backgroundColor: 'rgb(250, 250, 250)',
      }}
    >
      {/* Image */}
      <div className="flex-shrink-0 overflow-hidden rounded-md shadow-sm">
        <Image
          alt={name}
          className="h-[90px] w-[90px] rounded-md object-cover md:h-[110px] md:w-[110px]"
          height={110}
          width={110}
          src={image}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center space-y-1 text-sm md:text-base">
        <h3 className="text-lg font-semibold text-red-700 md:text-xl">{name}</h3>
        <p className="text-gray-800">{position}</p>

        <div className="mt-1 space-y-1">
          <p className="flex items-center gap-2 text-gray-700">
            <MdEmail className="text-red-700" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaPhone className="text-red-700" />
            {phone}
          </p>
        </div>
      </div>
    </article>
  );
}
