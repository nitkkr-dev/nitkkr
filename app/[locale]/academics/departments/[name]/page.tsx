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
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto facilis consectetur provident quas amet sequi quaerat ipsum, minus mollitia suscipit architecto dicta perferendis repellendus libero commodi, autem beatae natus pariatur incidunt praesentium corporis eligendi perspiciatis. At sunt consequuntur aperiam mollitia aut, autem assumenda error labore odit. Aut delectus a iure, iusto officiis non perspiciatis facilis assumenda similique corporis earum quisquam id ipsa. Provident, explicabo repudiandae odio molestiae vel ducimus odit officiis aliquid in, reiciendis repellendus natus ea labore maxime fugiat rerum sequi, quas deserunt laborum inventore perspiciatis.',
    contacts: {
      email: 'abc@gmail.com',
      phone: ['1234567890', '1234567890'],
    },
  };

  return (
    <main className="w-screen">
      <Subnav
        departmentData={departmentData}
        subLinkTitles={text.subLinkTitles}
        locale={locale}
      />
      <section className="container bg-background">
        <section id="#about" className="mt-20">
          <div className="flex items-center justify-center">
            <Heading glyphDirection={'rtl'} href={''}>
              <h2 className="mt-5 font-semibold text-primary-700 md:text-2xl lg:text-3xl">
                {text.sectionTitles[0].toLocaleUpperCase()}
              </h2>
            </Heading>
          </div>
          <article className="flex h-[300px] flex-col items-stretch justify-center rounded-md bg-neutral-50 lg:flex-row">
            <div className="relative h-full w-full lg:w-1/2">
              <Image
                width={300}
                height={300}
                className="h-full w-full rounded-l-md object-cover"
                src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
                alt="About"
              />
            </div>
            <div className="mt-4 flex h-full flex-col justify-center px-4 lg:w-1/2">
              <p className="overflow-hidden">
                quisquam quam exercitationem repellat unde nulla cupiditate,
                quos modi animi quis. Fuga labore aliquam tempora expedita est
                nesciunt obcaecati nemo hic ipsa dolores atque, error, alias
                accusantium porro. Tempora corporis vero, nostrum molestiae iste
                rerum ex aperiam ad possimus, dolor eaque amet temporibus
                accusamus porro suscipit? Eligendi iure, quibusdam ipsa
                laudantium sapiente quaerat voluptates nemo expedita assumenda
                perspiciatis ipsum? Impedit accusantium eveniet perspiciatis sed
                culpa. Commodi distinctio minus explicabo magni quae debitis
                neque quod rerum laborum omnis, odio dolorum!
              </p>
              <Link href="#" className="text-primary-700 hover:underline">
                {text.readMore} &rarr;
              </Link>
            </div>
          </article>
        </section>

        {/*  Mission and Vision*/}
        <section
          id="#missionAndVision"
          className="mt-20 flex h-[300px] items-stretch rounded-md"
        >
          <article className="flex w-1/2 flex-col justify-center rounded-md px-4">
            <h2>{text.sectionTitles[1].toLocaleUpperCase()}</h2>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
            <div>
              <h2>{text.sectionTitles[2].toLocaleUpperCase()}</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda molestias temporibus natus, veniam voluptatum fuga,
                reprehenderit eaque et illum suscipit ipsum sequi eos ullam
                consectetur fugit, quos magnam! Ullam, quia!
              </p>
            </div>
          </article>
          <div className="flex w-1/2 items-center justify-center">
            <Image
              width={300}
              height={300}
              className="h-full w-full rounded-md object-cover"
              src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
              alt="About"
            />
          </div>
        </section>

        {/*  hod's message*/}
        <section id="#hodMessage" className="mt-20">
          <Heading glyphDirection={'rtl'} href={''}>
            <h1 className="mt-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[3].toLocaleUpperCase()}
            </h1>
          </Heading>

          <div className="rounded-md border border-primary-700 bg-neutral-50 p-4">
            <div className="border-brown flex items-center rounded-md">
              <Image
                src={hod.image}
                alt="hod"
                width={300}
                height={400}
                className="rounded-md object-cover"
              />

              <div className="flex flex-col justify-between p-4">
                <h1 className="text-2xl text-primary-700">{hod.name}</h1>
                <p>{hod.message}</p>
              </div>
            </div>
          </div>
        </section>
        {/*Programmes */}
        <section className="mt-20" id="#programmes">
          <Heading glyphDirection={'dual'} href={''} className="items-center">
            <h2 className="mt-5 pl-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[4].toUpperCase()}
            </h2>
          </Heading>
          <section className="] mx-auto grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <button className="flex h-[60px] items-center justify-center rounded-t-md bg-primary-300 px-4 py-2 text-neutral-50">
                <h1 className="my-auto text-lg">UNDER GRADUATE</h1>
              </button>
              <div className="flex items-center justify-between space-x-1 text-primary-300">
                <p>B. Tech</p>{' '}
                <div className="w-[85%] border-b border-l-primary-700" />
              </div>
              <div className="flex flex-col space-y-4 ">
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
            </div>
            <div className="flex flex-col">
              <button className="flex h-[60px] items-center justify-center rounded-t-md bg-primary-700 px-4 py-2 text-neutral-50">
                <h1 className="my-auto text-lg">POST GRADUATE</h1>
              </button>
              <div className="flex items-center justify-between space-x-1 text-primary-700">
                <p>M. Tech</p>{' '}
                <div className="w-[84%] border-b border-l-primary-700" />
              </div>
              <div className="flex flex-col space-y-4">
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  M.tech Computer Engineering
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  Cyber Security
                </button>
              </div>
            </div>
            <div className="flex flex-col ">
              <button className="flex h-[60px] items-center justify-center rounded-t-md bg-primary-900 px-4 py-2 text-neutral-50">
                <h1 className="my-auto text-lg">DOCTORAL</h1>
              </button>
              <div className="flex items-center justify-between space-x-1 text-primary-700">
                <p>Ph. D</p>{' '}
                <div className="w-[89%] border-b border-l-primary-700" />
              </div>
              <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-900 hover:bg-primary-900 hover:text-neutral-50">
                More Information
              </button>
            </div>
          </section>
        </section>
        {/* dno title for this */}
        <article
          id="#achivements"
          className="relative mt-20 flex flex-1 justify-between space-x-4 bg-[url('https://s3-alpha-sig.figma.com/img/32a3/273b/70051ff8670610a0e06d9ff49e7cb675?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6vPstFQBLAj0l7cTLalslHY9fulCefKOvsOineaOXTkm0l4aXO14Q4XlTZP7IsU~Snm3gIr2ITRgpLjRXcoGeokV~I0dV6VcdUeZyWWIEtJa9y0yzn6mqXpGK47f9jKorWWjYgowENmLteeS93qLuSa9ozxzFRqaSunXNfTHj76ltbLC1xtVumVpLVbf~ywkh~lDsyA-VyspcY3gVYnjGi6NaRHcLtJHZVgbIxxGEoG8rzSXzc2OmjRAEgoa8HeGI-WllViUXrDpqIlBu1HLac~a4kV6yV0vVDCwaHZ2-I9ySAiHM-4wWySA77o1acMODptO1KT7LirkEjSUYWASA__')] bg-cover bg-clip-content "
        >
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
