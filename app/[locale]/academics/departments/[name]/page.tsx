import Image from 'next/image';
import Link from 'next/link';
import { ImLab } from 'react-icons/im';
import { MdBadge, MdMilitaryTech } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import DepartmentGallery from '~/components/department-gallery';
import Subnav from '~/components/subnav';
import Heading from '~/components/heading';

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
    <main className=" w-screen">
      <header className="relative h-[481px] w-full">
        <Image
          alt="department image"
          className="-z-50 object-cover"
          src={departmentData.titleImage}
          fill
        />
        <div className="w-full text-center">
          <h1 className="pt-52 text-background ">
            {decodeURIComponent(departmentData.name)}
          </h1>
        </div>
        <Subnav subLinkTitles={text.subLinkTitles} />
      </header>
      <section className="container bg-background pt-20">
        <section>
          <div className="flex items-center justify-center">
            <Heading glyphDirection={'rtl'} href={''}>
              <h2 className="mt-5 font-semibold text-primary-700 md:text-2xl lg:text-3xl">
                {' '}
                {text.sectionTitles[0].toLocaleUpperCase()}
              </h2>
            </Heading>
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
              <h2>{text.sectionTitles[1].toLocaleUpperCase()}</h2>
            </div>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
            <div>
              <div className="flex">
                <h2>{text.sectionTitles[2].toLocaleUpperCase()}</h2>
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
          <Heading glyphDirection={'rtl'} href={''}>
            <h1 className="mt-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[3].toLocaleUpperCase()}
            </h1>
          </Heading>

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
            <Heading glyphDirection={'dual'} href={''} className="items-center">
              <h2 className="mt-5 pl-5 text-3xl font-semibold text-primary-700">
                {text.sectionTitles[4].toUpperCase()}
              </h2>
            </Heading>
          </div>
          <section className="mx-auto mt-20 max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-300 px-4 py-2 text-neutral-50">
                  <h1 className="text-lg">UNDER GRADUATE</h1>
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
                  <h1 className="text-lg">POST GRADUATE</h1>
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
                  <h1 className="text-lg">DOCTORAL</h1>
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
        <article className="relative mt-20 flex flex-1 justify-between space-x-4 bg-[url('https://s3-alpha-sig.figma.com/img/32a3/273b/70051ff8670610a0e06d9ff49e7cb675?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6vPstFQBLAj0l7cTLalslHY9fulCefKOvsOineaOXTkm0l4aXO14Q4XlTZP7IsU~Snm3gIr2ITRgpLjRXcoGeokV~I0dV6VcdUeZyWWIEtJa9y0yzn6mqXpGK47f9jKorWWjYgowENmLteeS93qLuSa9ozxzFRqaSunXNfTHj76ltbLC1xtVumVpLVbf~ywkh~lDsyA-VyspcY3gVYnjGi6NaRHcLtJHZVgbIxxGEoG8rzSXzc2OmjRAEgoa8HeGI-WllViUXrDpqIlBu1HLac~a4kV6yV0vVDCwaHZ2-I9ySAiHM-4wWySA77o1acMODptO1KT7LirkEjSUYWASA__')] bg-cover bg-clip-content p-10 opacity-55">
          <div className="group  flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 ">
            <MdBadge className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50 ">
              {text.sectionTitles[5]}
            </h3>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 ">
            <ImLab className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[6]}
            </h3>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 ">
            <MdMilitaryTech className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[7]}
            </h3>
          </div>
        </article>

        <DepartmentGallery locale={locale} />
      </section>
    </main>
  );
}
