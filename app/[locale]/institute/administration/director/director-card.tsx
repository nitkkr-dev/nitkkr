import Image from 'next/image';

import { cn } from '~/lib/utils';

export default function DirectorCard({
  className,
  image,
  name,
  position,
  phone,
  fax,
  mobile,
  email,
  labels,
}: {
  className?: string;
  image: string;
  name: string;
  position: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
  labels: {
    phoneNo: string;
    faxNo: string;
    mobileNo: string;
    emailId: string;
  };
}) {
  return (
    <article
      className={cn(
        'mx-auto flex w-[95vw] flex-row items-start gap-3 rounded-xl border border-neutral-300 bg-neutral-50 p-2 shadow-md sm:w-[85vw] sm:gap-4 sm:p-3 md:w-[75vw] md:gap-6 md:p-4 lg:w-[60vw]',
        className
      )}
    >
      {/* Director Image */}
      <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
        <Image
          alt={name}
          className="h-auto w-20 rounded-lg object-cover sm:w-28 md:w-36 lg:w-44"
          height={220}
          width={180}
          src={image}
        />
      </div>

      {/* Director Info */}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold text-primary-500 sm:text-lg md:text-xl lg:text-2xl">
          {name}
        </h3>
        <p className="text-sm font-semibold text-neutral-900 sm:text-base md:text-lg lg:text-xl">
          {position}
        </p>

        <ul className="mt-2 space-y-0.5 text-xs sm:mt-3 sm:space-y-1 sm:text-sm md:mt-4 md:text-base lg:mt-6 lg:text-lg">
          <li>
            <strong>{labels.phoneNo}</strong>{' '}
            <span className="text-neutral-900 underline">{phone}</span>
          </li>
          <li>
            <strong>{labels.faxNo}</strong>{' '}
            <span className="text-neutral-900">{fax}</span>
          </li>
          <li>
            <strong>{labels.mobileNo}</strong>{' '}
            <span className="text-neutral-900 underline">{mobile}</span>
          </li>
          <li>
            <strong>{labels.emailId}</strong>{' '}
            <a
              href={`mailto:${email}`}
              className="text-blue-700 break-all underline"
            >
              {email}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
