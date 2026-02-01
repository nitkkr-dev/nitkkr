import Image from 'next/image';

import { Card, CardContent, CardFooter } from '~/components/ui/card';

interface Member {
  academicDetails?: {
    student?: {
      person?: {
        name?: string;
        email?: string;
        phone?: string;
      };
    };
    batch?: string;
  };
  position?: string;
};

interface StudentCardProps {
  member: Member;
}

export default function StudentCard({ member }: StudentCardProps) {
  const name = member.academicDetails?.student?.person?.name ?? '';
  const email = member.academicDetails?.student?.person?.email ?? '';
  const phone = member.academicDetails?.student?.person?.phone ?? '';

  return (
    <Card className="bg-white flex h-[360px] w-full flex-col justify-between overflow-hidden rounded-lg border border-primary-700 shadow-lg">
      <CardContent className="p-4">
        <Image
          alt={name}
          src="/fallback/user-image.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-48 w-full rounded-lg object-cover"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-1 pb-4 text-center">
        <h3 className="text-xl font-semibold text-primary-700">{name}</h3>

        <h5 className="text-md text-gray-600 font-medium">{member.position}</h5>

        {email && <p className="text-gray-500 text-sm">{email}</p>}
        {phone && <p className="text-gray-500 text-sm">{phone}</p>}
      </CardFooter>
    </Card>
  );
}
