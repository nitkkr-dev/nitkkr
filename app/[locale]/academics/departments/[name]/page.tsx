import Image from 'next/image';
import Link from 'next/link';

import { ImLab } from 'react-icons/im';
import { MdBadge, MdMilitaryTech } from 'react-icons/md';

import SubNav from '@/components/DepartmentRelated/subNav';
import MaxWidthWrapper from '@/components/DepartmentRelated/maxWidthWrapper';
import HorsesRunning from '@/components/horses-running';

import Gallery from '@/app/gallery/page';

export default function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const departmentData = {
    name: name.toUpperCase(),
    titleImage:
      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130',
  };
  const hod = {
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
    <div>
      <div className="relative flex h-[493px] w-screen flex-col items-center overflow-hidden">
        <Image
          src={departmentData.titleImage}
          alt={departmentData.name}
          fill
          className="relative -z-20 object-cover"
        />
        <h1 className="mt-48 text-center text-5xl font-bold text-white">
          {decodeURIComponent(departmentData.name)}
        </h1>
        <div className="mt-auto">
          <SubNav />
        </div>
      </div>
      {/* About */}
      <MaxWidthWrapper className="mt-20">
        {/* about section */}
        <div>
          <div className="flex items-center justify-center">
            <HorsesRunning direction={'left'} />
            <span className="text-4xl text-primary-20">ABOUT</span>
          </div>
          <div className="flex items-center rounded-md bg-white">
            <div className="relative w-1/2 rounded-md">
              <Image
                width={300}
                height={300}
                className="h-64 w-full rounded-l-md object-cover"
                src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
                alt="About"
              />
            </div>
            <div className="w-1/2 rounded-md px-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eveniet laborum nesciunt quos voluptates. Tempore,
                soluta quam fugiat hic blanditiis, minima error optio voluptate
                tenetur ex facere placeat nobis quia aut architecto itaque fugit
                illum! Dolore ea alias est, esse expedita molestiae,
                perferendis, sapiente laboriosam atque adipisci voluptate omnis
                minima.
              </p>
              <Link href="#" className="text-primary-20 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
        {/*  Mission and Vision*/}
        <div className="mt-20 flex items-center rounded-md">
          <div className="w-1/2 rounded-md px-4">
            <div>
              <h1 className="text-4xl text-primary-20">Vission</h1>
              <p className="text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda molestias temporibus natus, veniam voluptatum fuga,
                reprehenderit eaque et illum suscipit ipsum sequi eos ullam
                consectetur fugit, quos magnam! Ullam, quia!
              </p>
            </div>
            <div>
              <h1 className="text-4xl text-primary-20">Mession</h1>
              <p className="text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda molestias temporibus natus, veniam voluptatum fuga,
                reprehenderit eaque et illum suscipit ipsum sequi eos ullam
                consectetur fugit, quos magnam! Ullam, quia!
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              width={300}
              height={300}
              className="h-64 w-full rounded-md object-cover"
              src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
              alt="About"
            />
          </div>
        </div>
        {/*  hod's message*/}
        <div className="mt-20">
          <div className="flex items-center">
            <HorsesRunning direction="left" />
            <h1 className="text-4xl text-primary-20">HOD&apos;s Message</h1>
          </div>
          <div className="mt-10 rounded-md border border-primary-20 bg-root p-4">
            <div className="border-brown flex items-center rounded-md">
              <div className="relative h-52 w-52 rounded-md">
                <Image
                  src={hod.image}
                  alt="hod"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4">
                <h1 className="text-2xl text-primary-20">{hod.name}</h1>
                <span>{hod.message}</span>
              </div>
            </div>
          </div>
        </div>
        {/*Programmes */}
        <div className="mt-10">
          <div className="flex">
            <HorsesRunning direction="left" />
            <span className="text-2xl font-semibold text-primary-20">
              Programmes
            </span>
            <HorsesRunning direction="right" />
          </div>
          <div className="mx-auto mt-20 max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-10 px-4 py-2 text-white">
                  <span className="text-lg">UNDER GRADUATE</span>
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-10 hover:bg-primary-10 hover:text-white">
                  B.tech Computer Engineering
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-10 hover:bg-primary-10 hover:text-white">
                  Information Technology
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-10 hover:bg-primary-10 hover:text-white">
                  Artificial Intelligence / Machine Learning
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-20 px-4 py-2 text-white">
                  <span className="text-lg">POST GRADUATE</span>
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-20 hover:bg-primary-20 hover:text-white">
                  M.tech Computer Engineering
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-20 hover:bg-primary-20 hover:text-white">
                  Cyber Security
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-40 px-4 py-2 text-white">
                  <span className="text-lg">Doctoral</span>
                </button>
                <button className="rounded-md bg-white px-4 py-2 text-primary-40 hover:bg-primary-40 hover:text-white">
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* dno title for this */}
        <div className="mt-20 flex flex-1 justify-between space-x-4 p-10">
          <div className="group">
            <div className="flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-30 p-4 font-semibold transition-all duration-300 group-hover:bg-primary-30 group-hover:text-white">
              <MdBadge className="mb-2 h-12 w-12 text-primary-30 group-hover:text-white" />
              <span className="text-xl font-semibold text-primary-30 group-hover:text-white">
                Faculty & Staff
              </span>
            </div>
          </div>
          <div className="group">
            <div className="flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-30 p-4 font-semibold transition-all duration-300 group-hover:bg-primary-30 group-hover:text-white">
              <ImLab className="mb-2 h-12 w-12 text-primary-30 group-hover:text-white" />
              <span className="text-xl font-semibold text-primary-30 group-hover:text-white">
                Laboratories
              </span>
            </div>
          </div>
          <div className="group">
            <div className="flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-30 p-4 font-semibold transition-all duration-300 group-hover:bg-primary-30 group-hover:text-white">
              <MdMilitaryTech className="mb-2 h-12 w-12 text-primary-30 group-hover:text-white" />
              <span className="text-xl font-semibold text-primary-30 group-hover:text-white">
                Student Achievements
              </span>
            </div>
          </div>
        </div>
        <Gallery
          params={{
            locale: locale,
          }}
        />
      </MaxWidthWrapper>
    </div>
  );
}
