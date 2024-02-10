import Image from 'next/image';
import MaxWidthWrapper from './maxWidthWrapper';
import HorsesRunning from '../horses-running';

export default function HodMessage() {
  const director = {
    name: 'John does',
    image:
      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut adipisci error voluptates reiciendis reprehenderit veniam consequatur vitae a atque?',
    contacts: {
      email: 'abc@gmail.com',
      phone: ['1234567890', '1234567890'],
    },
  };
  return (
    <MaxWidthWrapper className="mb-20 mt-20 rounded-md">
      <div className="flex items-center">
        <HorsesRunning direction="left" />
        <h1 className="text-4xl">HOD's Message</h1>
      </div>
      <div className="mt-10 rounded-md border border-black bg-gray-300 p-4">
        <div className="border-brown flex items-center rounded-md bg-white">
          <div className="relative h-52 w-52">
            <Image
              src={director.image}
              alt="director"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-4">
            <h1>{director.name}</h1>
            <span>{director.message}</span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
