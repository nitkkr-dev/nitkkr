import Image from 'next/image';
import Link from 'next/link';
import { ImLab } from 'react-icons/im';
import { MdBadge, MdEmail, MdMilitaryTech } from 'react-icons/md';
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import { getTranslations } from '~/i18n/translations';
import Subnav from '~/components/subnav';
import Heading from '~/components/heading';
import {
  buttonVariants,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui';
import { Card, CardFooter } from '~/components/ui/card';
import { cn } from '~/lib/utils';

interface HodDetailProps {
  icon: IconType;
  items: string[];
}

const HodDetail: React.FC<HodDetailProps> = ({ icon: Icon, items }) => {
  return (
    <div className="flex items-center space-x-1">
      <Icon className="font-semibolde text-base text-primary-700" />
      <div className="flex flex-col text-neutral-700">
        {items.map((item, index) => (
          <p className="text-sm lg:text-base" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

interface AchievementLinkProps {
  href: string;
  icon: IconType;
  title: string;
}

const AchievementLink: React.FC<AchievementLinkProps> = ({
  href,
  icon: Icon,
  title,
}) => {
  return (
    <Link
      href={href}
      className="group flex h-48 w-full flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500/80 group-hover:text-neutral-50 lg:h-64 lg:w-80"
    >
      <Icon className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
      <h3 className="text-lg font-semibold text-primary-500 group-hover:text-neutral-50">
        {title}
      </h3>
    </Link>
  );
};

interface ProgrammesSectionItemProps {
  title: string;
  programmeType: string;
  items: string[];
  textColor: string;
  bgHoverColor: string;
}

const ProgrammesSectionItem: React.FC<ProgrammesSectionItemProps> = ({
  title,
  programmeType,
  items,
  bgHoverColor,
  textColor,
}) => {
  return (
    <div className="flex flex-col">
      <button
        className={cn(
          'flex h-[60px] items-center justify-center rounded-md px-4 py-2 text-neutral-50',
          bgHoverColor
        )}
      >
        <h1 className="my-auto text-lg">{title.toUpperCase()}</h1>
      </button>
      <div
        className={cn('flex items-center justify-between space-x-1', textColor)}
      >
        <p>{programmeType}</p>{' '}
        <div
          className={cn(
            'border-b border-l-primary-700',
            items.length > 1 ? 'w-[80%]' : 'w-[86%]'
          )}
        />
      </div>
      <div className="flex flex-col space-y-4 ">
        {items.map((item, i) => (
          <button
            key={i}
            className={cn(
              'rounded-md bg-neutral-50 px-4 py-2',
              textColor,
              `hover:${bgHoverColor}`,
              `hover:text-neutral-50`
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

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
        <Heading glyphDirection={'rtl'} href={''}>
          <h2>ABOUT</h2>
        </Heading>
        <section className="flex w-full flex-col-reverse justify-between rounded-b-md rounded-t-md bg-neutral-50 lg:flex lg:h-[44vh] lg:flex-row lg:items-center lg:justify-between lg:rounded-r-md">
          <Image
            className="w-full rounded-b-md lg:h-full lg:w-2/5 lg:rounded-l-md"
            alt="department front"
            width={300}
            height={300}
            src={
              'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
            }
          />
          <div className="p-2 lg:w-3/5">
            <p className="inline-block text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur natus porro ut consectetur dolores, saepe earum itaque
              minus vel corrupti maxime ipsum totam eligendi est mollitia
              assumenda fuga placeat deleniti aut provident tempora
              consequuntur? Ea vel atque consequuntur error eveniet modi
              maiores. Nihil porro blanditiis doloremque pariatur dolores
              consequuntur a libero assumenda dicta architecto aspernatur facere
              officia quasi tempore repellat ipsam rerum, suscipit perspiciatis?
              Doloribus id repellendus molestias soluta ad dolore aliquam
              laboriosam porro veniam vel velit magni quaerat, dicta molestiae
              illo quae temporibus eaque officia fuga? Incidunt quae, vel ipsam
              cupiditate consequatur, molestias totam deserunt quisquam
              blanditiis ut quo.
              <Link
                href={''}
                className={cn('ml-2', buttonVariants({ variant: 'link' }))}
              >
                READ MORE &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/*  Mission and Vision*/}
        <section
          id="missionAndVision"
          className="mt-20 items-center lg:flex lg:justify-between lg:space-x-4 "
        >
          <section className="flex h-full flex-col justify-between space-y-7 lg:w-1/2">
            <div className="flex flex-col">
              <h2 className="m-0">
                {text.sectionTitles[1].toLocaleUpperCase()}
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                quasi eaque enim cum esse doloremque magni explicabo quos,
                assumenda beatae totam nesciunt sunt tenetur omnis dolorum nemo
                cupiditate cumque corrupti provident doloribus! Blanditiis
                quaerat itaque atque illo, modi est fugiat.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="m-0">
                {text.sectionTitles[2].toLocaleUpperCase()}
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                quasi eaque enim cum esse doloremque magni explicabo quos,
                assumenda beatae totam nesciunt sunt tenetur omnis dolorum nemo
                cupiditate cumque corrupti provident doloribus! Blanditiis
                quaerat itaque atque illo, modi est fugiat.
              </p>
            </div>
          </section>
          <div className="relative hidden lg:block lg:h-full lg:w-1/2">
            <Image
              className="h-full w-full rounded-md"
              alt={departmentData.name}
              width={300}
              height={400}
              src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
            />
          </div>
        </section>

        {/*  hod's message*/}
        <section className="mt-20 rounded-md border border-primary-700 bg-neutral-50 p-5 lg:flex lg:space-x-4">
          <section className="hidden w-full flex-col lg:flex lg:w-1/4">
            <Image
              src={
                'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
              }
              alt="hod"
              width={350}
              height={450}
              className="h-[295px] w-64 rounded-md xl:h-[300px] xl:w-96"
            />
            <div className=" lg:mt-4 lg:space-y-1">
              <HodDetail
                icon={MdEmail}
                items={['jitenderchhabra@nitkkr.ac.in']}
              />
              <HodDetail
                icon={FaPhoneAlt}
                items={['+91-1744-233482 (Off-Direct)', '9416733789 (Mob)']}
              />
              <HodDetail
                icon={FaRegCalendarAlt}
                items={['Dated Academic Session 2010 - 2025']}
              />
            </div>
          </section>
          <div className="flex w-full flex-col space-y-20 lg:w-3/4">
            <blockquote>
              <div className="mb-5 flex items-center space-x-5">
                <Image
                  src={
                    'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130'
                  }
                  alt="hod"
                  width={150}
                  height={200}
                  className="block rounded-md lg:hidden "
                />
                <h3 className="mb-2">Professor R.K. Chhabra</h3>
              </div>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                magni dolorum ad eligendi consequatur excepturi repudiandae,
                consectetur quisquam qui quae, eum at ipsum amet. Eum similique
                incidunt minima adipisci repellat doloribus doloremque totam
                omnis alias ad, id quas suscipit corporis iste error! Veritatis
                fugiat quaerat vitae! Cum autem non accusamus nemo, voluptatum
                error iure possimus illum a quis eaque voluptates nostrum
                commodi omnis in necessitatibus repellendus nam! Recusandae
                laboriosam natus doloribus quam debitis inventore et,
                reprehenderit iusto. Eveniet similique eaque nisi nostrum
                dignissimos, numquam dolorem, doloremque eligendi eum quo dolor.
                Iure eveniet qui aperiam neque cumque. Quidem cupiditate impedit
                harum?
              </p>
            </blockquote>
            <h5 className="mt-4">
              I heartily welcome everyone who visits the website of this
              institution.
            </h5>
          </div>
        </section>

        {/*Programmes */}
        <section className="mt-20" id="programmes">
          <Heading glyphDirection={'dual'} href={''} className="items-center">
            <h2 className="mt-5 pl-5 text-3xl font-semibold text-primary-700">
              {text.sectionTitles[4].toUpperCase()}
            </h2>
          </Heading>
          <section className="mx-auto grid grid-cols-1 gap-y-7 lg:grid-cols-3 lg:gap-4">
            <ProgrammesSectionItem
              title={'UNDER GRADUATE'}
              programmeType={'B. Tech'}
              items={[
                'B.tech Computer Engineering',
                ' Information Technology',
                'Artificial Intelligence / Machine Learning',
              ]}
              textColor={'text-primary-300'}
              bgHoverColor={'bg-primary-300'}
            />
            <ProgrammesSectionItem
              title={'POST GRADUATE'}
              programmeType={'M. Tech'}
              items={['M.tech Computer Engineering', ' Cyber Security']}
              textColor={'text-primary-700'}
              bgHoverColor={'bg-primary-700'}
            />
            <ProgrammesSectionItem
              title={'DOCTORAL'}
              programmeType={'Ph. D'}
              items={['More Information']}
              textColor={'text-primary-900'}
              bgHoverColor={'bg-primary-900'}
            />
          </section>
        </section>
        {/* dno title for this */}

        <article className="mt-20 flex flex-col items-center space-y-10 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-y-0 ">
          {[
            { icon: MdBadge, title: text.sectionTitles[5] },
            { icon: ImLab, title: text.sectionTitles[6] },
            { icon: MdMilitaryTech, title: text.sectionTitles[7] },
          ].map((obj, i) => (
            <AchievementLink
              key={i}
              href={''}
              icon={obj.icon}
              title={obj.title}
            />
          ))}
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
            <CarouselPrevious className="text-base text-primary-500" />
            <CarouselNext className="text-base text-primary-500" />
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
