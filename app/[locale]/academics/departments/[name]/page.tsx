import Image from 'next/image';
import Link from 'next/link';
import { ImLab } from 'react-icons/im';
import { MdBadge, MdEmail, MdMilitaryTech } from 'react-icons/md';
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';

import { getTranslations } from '~/i18n/translations';
import Subnav from '~/components/subnav';
import Heading from '~/components/heading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui';
import { Card, CardFooter } from '~/components/ui/card';

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

  return (
    <main className="w-screen">
      <Subnav
        departmentData={departmentData}
        subLinkTitles={text.subLinkTitles}
        locale={locale}
      />
      <section className="container">
        {/* about */}
        <section id="about" className="mt-20">
          <Heading glyphDirection={'rtl'} href={''}>
            <h2 className="font-semibold text-primary-700 md:text-2xl lg:text-3xl">
              {text.sectionTitles[0].toLocaleUpperCase()}
            </h2>
          </Heading>
          <article className="flex h-[50vh] items-center space-x-4 rounded-md bg-neutral-50">
            <div className="relative flex h-full w-1/2">
              <Image
                className="h-full w-full rounded-l-md"
                fill
                alt={departmentData.name}
                src={
                  'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
                }
              />
            </div>
            <span className="w-1/2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo molestiae voluptatem quas omnis ullam eligendi,
              dignissimos adipisci corrupti maxime exercitationem totam illum
              reiciendis neque officia accusantium? Qui omnis ad suscipit autem
              doloremque delectus aliquam dicta! Beatae nemo similique et
              deserunt tenetur iure reiciendis optio incidunt delectus maxime
              expedita libero, perspiciatis, veritatis debitis molestiae culpa
              porro blanditiis omnis. Corporis at quod quia amet odit quisquam
              exercitationem in quaerat nam, ut officia laudantium voluptates id
              vel possimus, saepe, consectetur ipsa aut laborum. Ad ex cum ipsa
              blanditiis a totam eum quos, illum minima sunt quibusdam libero
              officia fugiat nisi culpa deserunt quia.
              <span> </span>
              <Link
                href={'read more'}
                className="text-primary-700 hover:underline"
              >
                READ MORE &rarr;
              </Link>
            </span>
          </article>
        </section>

        {/*  Mission and Vision*/}
        <section
          id="missionAndVision"
          className="mt-20 flex h-[400px] items-center space-x-4 rounded-md"
        >
          <div className="mb-2 mt-2 flex h-full w-1/2 flex-col justify-between">
            <section className="flex flex-col space-y-3 ">
              <h2 className="mb-0">
                {text.sectionTitles[1].toLocaleUpperCase()}
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                quasi eaque enim cum esse doloremque magni explicabo quos,
                assumenda beatae totam nesciunt sunt tenetur omnis dolorum nemo
                cupiditate cumque corrupti provident doloribus! Blanditiis
                quaerat itaque atque illo, modi est fugiat.
              </p>
            </section>
            <section className="mt-auto flex flex-col space-y-3">
              <h2 className="mb-0">
                {text.sectionTitles[2].toLocaleUpperCase()}
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                quasi eaque enim cum esse doloremque magni explicabo quos,
                assumenda beatae totam nesciunt sunt tenetur omnis dolorum nemo
                cupiditate cumque corrupti provident doloribus! Blanditiis
                quaerat itaque atque illo, modi est fugiat.
              </p>
            </section>
          </div>
          <div className="relative flex h-full w-1/2">
            <Image
              className="h-full w-full rounded-md"
              fill
              alt={departmentData.name}
              src={
                'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
              }
            />
          </div>
        </section>

        {/*  hod's message*/}
        <section id="hodMessage" className="mt-20 w-full">
          <Heading glyphDirection={'rtl'} href={''}>
            <h1 className="mt-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[3].toLocaleUpperCase()}
            </h1>
          </Heading>
          <section className="flex h-[55vh] w-full space-x-5 rounded-md border border-primary-700 bg-neutral-50 p-10">
            <div className="w-[16vw] flex-shrink-0 p-1">
              <div className="h-full w-full">
                <div className="relative h-3/4 w-full">
                  <Image
                    className="h-auto max-w-full rounded-md"
                    src={
                      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
                    }
                    alt="hod"
                    fill
                  />
                </div>
                <div className="mt-2 flex h-1/5 flex-col justify-between space-y-1">
                  <span className="flex items-center space-x-2">
                    <MdEmail className="text-xs text-primary-700" />
                    <p className="text-xs text-neutral-700">
                      jitenderchhabra@nitkkr.ac.in
                    </p>
                  </span>
                  <span className="flex items-center space-x-2 text-xs">
                    <FaPhoneAlt className="text-xs text-primary-700" />
                    <span className="items-start">
                      <p className="text-xs text-neutral-700">
                        {'+91-1744-233482 (Off-Direct)'}
                      </p>
                      <p className="text-xs text-neutral-700">
                        {'9416733789 (Mob)'}
                      </p>
                    </span>
                  </span>
                  <span className="flex items-center space-x-2 text-xs">
                    <FaRegCalendarAlt className="text-xs text-primary-700" />
                    <p className="text-xs text-neutral-700">
                      Dated Academic Session 2010 - 2025
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-4/5">
              <h3 className="font-semibold">Professor J.K. Chhabra</h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident enim, reprehenderit incidunt suscipit, quam ipsam
                voluptas velit esse, perferendis necessitatibus quis id commodi
                labore officiis porro numquam tempore saepe obcaecati modi
                dolores quasi molestiae? Quod, voluptate nulla quae ut harum
                dolore nemo placeat magnam esse praesentium laboriosam eligendi
                corrupti tempore quasi ipsam minus optio neque architecto
                corporis sit ex error. Hic fugiat voluptatem sit deserunt,
                quaerat, voluptatum blanditiis est ipsam asperiores temporibus
                ea dolor nam corporis beatae neque totam odit! Incidunt porro,
                sit obcaecati animi officiis at amet tempora. Provident
                molestias error minima nihil, placeat est perferendis iure at
                sequi.
              </p>
              <h5 className="mt-5">
                I heartily welcome everyone who visits the website of this
                institution.
              </h5>
            </div>
          </section>
        </section>

        {/*Programmes */}
        <section className="mt-20" id="programmes">
          <Heading glyphDirection={'dual'} href={''} className="items-center">
            <h2 className="mt-5 pl-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[4].toUpperCase()}
            </h2>
          </Heading>
          <section className="] mx-auto grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <button className="flex h-[60px] items-center justify-center rounded-md bg-primary-300 px-4 py-2 text-neutral-50">
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
              <button className="flex h-[60px] items-center justify-center rounded-md bg-primary-700 px-4 py-2 text-neutral-50">
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
              <button className="flex h-[60px] items-center justify-center rounded-md bg-primary-900 px-4 py-2 text-neutral-50">
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
          id="achivements"
          className="relative mt-20 flex flex-1 justify-center space-x-32 bg-[url('https://s3-alpha-sig.figma.com/img/32a3/273b/70051ff8670610a0e06d9ff49e7cb675?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6vPstFQBLAj0l7cTLalslHY9fulCefKOvsOineaOXTkm0l4aXO14Q4XlTZP7IsU~Snm3gIr2ITRgpLjRXcoGeokV~I0dV6VcdUeZyWWIEtJa9y0yzn6mqXpGK47f9jKorWWjYgowENmLteeS93qLuSa9ozxzFRqaSunXNfTHj76ltbLC1xtVumVpLVbf~ywkh~lDsyA-VyspcY3gVYnjGi6NaRHcLtJHZVgbIxxGEoG8rzSXzc2OmjRAEgoa8HeGI-WllViUXrDpqIlBu1HLac~a4kV6yV0vVDCwaHZ2-I9ySAiHM-4wWySA77o1acMODptO1KT7LirkEjSUYWASA__')] bg-cover bg-clip-content "
        >
          <Link
            href={''}
            className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 "
          >
            <MdBadge className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50 ">
              {text.sectionTitles[5]}
            </h3>
          </Link>

          <Link
            href={''}
            className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 "
          >
            <ImLab className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[6]}
            </h3>
          </Link>

          <Link
            href={''}
            className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 "
          >
            <MdMilitaryTech className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50">
              {text.sectionTitles[7]}
            </h3>
          </Link>
        </article>

        <section id="gallery" className="container mt-20">
          <Heading glyphDirection={'ltr'} href={''}>
            <h1 className="mt-5 text-3xl font-semibold text-primary-500">
              {text.sectionTitles[8].toLocaleUpperCase()}
            </h1>
          </Heading>

          <Carousel
            className="my-5 w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    {/* this url will be replaced url from database, thus have used inline style */}
                    <Card
                      className="w-full rounded-md border-none"
                      style={{
                        backgroundImage: `url('https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <CardFooter className="relative z-10 h-64 opacity-0 transition-opacity duration-300 hover:bg-neutral-900 hover:bg-opacity-25 group-hover:opacity-100">
                        <h5 className="mt-auto text-neutral-50">
                          Computer Science Students Hold National conference of
                          CS In NIT KKR...
                        </h5>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary-500 " />
            <CarouselNext className="text-primary-500" />
          </Carousel>
          <div className="mb-5 flex w-full justify-center text-center hover:text-background">
            <Link
              href={''}
              className="rounded-md border border-primary-700 p-2 text-primary-700 "
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
