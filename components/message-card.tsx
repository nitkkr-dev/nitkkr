import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail, MdFax } from 'react-icons/md';
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
}: {
  className?: string;
  image: string;
  name: string;
  position: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
}) {
  return (
    <article
  className={cn(
    'flex flex-col items-center gap-6 rounded-xl border border-gray-300 p-6 shadow-md md:flex-row md:items-start md:p-8 mx-auto',
    className
  )}
  style={{
    width: '75vw',              
    backgroundColor: 'rgb(250, 250, 250)' 
  }}
>
  {/* Director Image */}
  <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
    <Image
      alt={name}
      className="h-auto w-[180px] rounded-lg object-cover md:w-[220px]"
      height={220}
      width={180}
      src={image}
    />
  </div>

  {/* Director Info */}
  <div className="flex-1 space-y-2">
    <h3 className="text-xl font-bold text-red-700 md:text-2xl">{name}</h3>
<p className="text-2xl md:text-3xl text-gray-800">{position}</p>

    <ul className="mt-3 space-y-1 text-sm md:text-base">
      <li>
        <strong>Phone No.:</strong>{' '}
        <span className="text-gray-700 hover:underline">{phone}</span>
      </li>
      <li>
        <strong>Fax No.:</strong>{' '}
        <span className="text-gray-700">{fax}</span>
      </li>
      <li>
        <strong>Mobile No.:</strong>{' '}
        <span className="text-gray-700 hover:underline">{mobile}</span>
      </li>
      <li>
        <strong>Email-ID:</strong>{' '}
        <a href={`mailto:${email}`} className="text-blue-700 hover:underline">
          {email}
        </a>
      </li>
    </ul>
  </div>
</article>

  );
}
