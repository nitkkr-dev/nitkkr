import Image from 'next/image';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

interface FacultyProps {
  profileImage: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  id: number;
}

export default function FacultyCard({
  profileImage,
  name,
  designation,
  email,
  phone,
  id,
}: FacultyProps) {
  return (
    <Link href={`/faculty-and-staff/${id}`}>
      <div className="flex-start flex cursor-pointer gap-[10px] self-stretch rounded-xl border border-primary-700 bg-neutral-50 p-3">
        {/* Faculty Image */}
        <div className="h-[245px] w-[216px]">
          <Image
            src={profileImage}
            alt="Faculty"
            className="max-h-[245px] rounded-xl object-cover"
            width={200}
            height={240}
          />
        </div>
        {/* Faculty Details */}
        <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-start justify-between self-stretch py-6">
          <div className="flex flex-col items-start gap-2">
            <h1 className="mb-0 font-serif text-4xl font-normal text-primary-700">
              {name}
            </h1>
            <p className="font-sans text-xl font-medium text-neutral-700">
              {designation}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-3 self-stretch">
              <MdEmail size={28} color="#C5291D" />
              <p className="font-sans text-lg font-normal text-neutral-700">
                {email}
              </p>
            </div>
            <div className="flex gap-3 self-stretch">
              <MdPhone size={28} color="#C5291D" />
              <p className="font-sans text-lg font-normal text-neutral-700">
                {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
