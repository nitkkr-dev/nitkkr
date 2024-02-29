import Image from 'next/image';
import Link from 'next/link';
import { ImLab } from 'react-icons/im';
import { MdBadge, MdMilitaryTech } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import HorsesRunning from '~/components/horses-running';
import DepartmentGallery from '~/components/department-gallery';

export default async function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const text = (await getTranslations(locale)).Departments;

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
      <header className="relative flex w-screen flex-col items-center overflow-hidden md:h-auto lg:h-[493px]">
        <Image
          src={departmentData.titleImage}
          alt={departmentData.name}
          fill
          className="relative -z-20 object-cover"
        />
        <h1 className="mt-48 text-center text-5xl font-bold text-neutral-50 md:mt-12 md:text-3xl">
          {decodeURIComponent(departmentData.name)}
        </h1>
        <div className="mt-auto">
          <div className="sticky top-10">
            <div className="mb-3 ">
              <div className="flex justify-evenly space-x-10 rounded-full bg-background p-1 md:justify-start md:space-x-4">
                {text.subLinks.map((btn) => (
                  <Link
                    key={btn.key}
                    href={btn.link}
                    className="rounded-full p-3 transition-all duration-300 hover:bg-primary-700 hover:text-background"
                  >
                    {btn.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mt-20">
        {/* about section */}
        <section>
          <div className="flex items-center justify-center">
            <HorsesRunning direction={'left'} />
            <h2 className="font-semibold text-primary-700 md:text-2xl lg:text-3xl">
              {text.sectionTitles[0]}
            </h2>
          </div>
          <article className="mt-10 flex flex-col items-center rounded-md bg-neutral-50 lg:flex-row">
            <div className="relative w-full flex-1 rounded-md lg:w-1/2 lg:max-w-md">
              <Image
                width={300}
                height={300}
                className="h-64 w-full rounded-l-md object-cover"
                src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
                alt="About"
              />
            </div>
            <div className="mt-4 flex-1 rounded-md px-4 md:mt-0 lg:w-1/2 lg:max-w-md">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eveniet laborum nesciunt quos voluptates. Tempore,
                soluta quam fugiat hic blanditiis, minima error optio voluptate
                tenetur ex facere placeat nobis quia aut architecto itaque fugit
                illum! Dolore ea alias est, esse expedita molestiae,
                perferendis, sapiente laboriosam atque adipisci voluptate omnis
                minima.
              </p>
              <Link href="#" className="text-primary-700 hover:underline">
                {text.readMore}
              </Link>
            </div>
          </article>
        </section>

        {/*  Mission and Vision*/}
        <section className="mt-20 flex items-center rounded-md">
          <article className="w-1/2 rounded-md px-4">
            <div className="flex">
              <h2>{text.sectionTitles[1]}</h2>
            </div>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
            <div>
              <div className="flex">
                <h2>{text.sectionTitles[2]}</h2>
              </div>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda molestias temporibus natus, veniam voluptatum fuga,
                reprehenderit eaque et illum suscipit ipsum sequi eos ullam
                consectetur fugit, quos magnam! Ullam, quia!
              </p>
            </div>
          </article>
          <div className="w-1/2">
            <Image
              width={300}
              height={300}
              className="h-64 w-full rounded-md object-cover"
              src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
              alt="About"
            />
          </div>
        </section>
        {/*  hod's message*/}
        <section className="mt-20">
          <div className="flex items-center">
            <HorsesRunning direction="left" />
            <h1 className="text-3xl font-semibold text-primary-700">
              {text.sectionTitles[3]}
            </h1>
          </div>
          <div className="mt-10 rounded-md border border-primary-700 bg-neutral-50 p-4">
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
                <h1 className="text-2xl text-primary-700">{hod.name}</h1>
                <span>{hod.message}</span>
              </div>
            </div>
          </div>
        </section>
        {/*Programmes */}
        <section className="mt-10">
          <div className="flex items-center justify-evenly">
            <HorsesRunning direction="left" />
            <h2 className="pl-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[4]}
            </h2>
            <HorsesRunning direction="right" />
          </div>
          <section className="mx-auto mt-20 max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-300 px-4 py-2 text-neutral-50">
                  <span className="text-lg">UNDER GRADUATE</span>
                </button>
                <span className="flex">
                  <span className="text-primary-300">B. Tech</span>
                  <div className="w-[80%] border-b-2 border-b-primary-300" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  B.tech Computer Engineering
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  Information Technology
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  Artificial Intelligence / Machine Learning
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-700 px-4 py-2 text-neutral-50">
                  <span className="text-lg">POST GRADUATE</span>
                </button>
                <span className="flex">
                  <span className="text-primary-700">M. Tech</span>
                  <div className="w-[80%] border-b-2 border-b-primary-700" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  M.tech Computer Engineering
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  Cyber Security
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-900 px-4 py-2 text-neutral-50">
                  <span className="text-lg">Doctoral</span>
                </button>
                <span className="flex">
                  <span className="text-primary-900">PH. D</span>
                  <div className="w-[80%] border-b-2 border-b-primary-900" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-900 hover:bg-primary-900 hover:text-neutral-50">
                  More Information
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* dno title for this */}
        <article
          className="relative mt-20 flex flex-1 justify-between space-x-4 bg-clip-text p-10"
          style={{
            backgroundImage: `url(${'https://s3-alpha-sig.figma.com/img/32a3/273b/70051ff8670610a0e06d9ff49e7cb675?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6vPstFQBLAj0l7cTLalslHY9fulCefKOvsOineaOXTkm0l4aXO14Q4XlTZP7IsU~Snm3gIr2ITRgpLjRXcoGeokV~I0dV6VcdUeZyWWIEtJa9y0yzn6mqXpGK47f9jKorWWjYgowENmLteeS93qLuSa9ozxzFRqaSunXNfTHj76ltbLC1xtVumVpLVbf~ywkh~lDsyA-VyspcY3gVYnjGi6NaRHcLtJHZVgbIxxGEoG8rzSXzc2OmjRAEgoa8HeGI-WllViUXrDpqIlBu1HLac~a4kV6yV0vVDCwaHZ2-I9ySAiHM-4wWySA77o1acMODptO1KT7LirkEjSUYWASA__'})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50 ">
            <MdBadge className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50 ">
              {text.sectionTitles[5]}
            </span>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50 ">
            <ImLab className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[6]}
            </span>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50 ">
            <MdMilitaryTech className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[7]}
            </span>
          </div>
        </article>

        <DepartmentGallery locale={locale} />
      </main>
    </div>
  );
}
