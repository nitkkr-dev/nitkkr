import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail, MdPhone } from 'react-icons/md';

import Notifications from '~/app/notifications';
import { Button } from '~/components/buttons';
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/carousels';
import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';
import { getTranslations } from '~/i18n/translations';
import { type events, type notifications } from '~/server/db';

import Events from './events';
import EmployeCard from '~/components/employe-card';

export default async function Home({
  params: { locale },
  searchParams: {
    notificationCategory = 'academic',
    eventsCategory = 'featured',
  },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?: (typeof notifications.category.enumValues)[number];
    eventsCategory?:
      | (typeof events.category.enumValues)[number]
      | 'recents'
      | 'featured';
  };
}) {
  const text = (await getTranslations(locale)).Main;

  return (
    <>
      <style>
        {`.header-sticky-ness {
          position: fixed;
        }`}
      </style>

      <AutoplayCarousel autoplayOptions={{ delay: 7000 }}>
        <CarouselContent>
          {text.slideshow.map(({ image, title, subtitle }, index) => (
            <CarouselItem key={index} className="relative max-h-screen">
              <figure className="relative h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-800/80"></div>
                <article className="absolute inset-x-0 top-[35%] mx-auto text-center drop-shadow-md">
                  <h4 className="text-shade-light">{text.title.secondary}</h4>
                  <h1 className="text-lg text-shade-light md:text-4xl lg:text-6xl">
                    {text.title.primary}
                  </h1>
                </article>

                <Image
                  alt={`slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={1080}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width={1920}
                  src={image}
                />

                {title && (
                  <figcaption className="container absolute inset-x-0 bottom-0 justify-start pb-8 lg:block">
                    <article className="max-w-[90%]">
                      <h4 className="pl-2 text-sm text-neutral-100 md:text-2xl">
                        {title}
                      </h4>
                      <p className="line-clamp-1 pl-2 text-xs text-neutral-100 md:text-lg">
                        {title}
                      </p>
                    </article>
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <section className="container absolute inset-0 top-[50%] flex h-0 justify-between">
          <CarouselPrevious className="static text-neutral-100 drop-shadow-2xl" />
          <CarouselNext className="static text-neutral-100 drop-shadow-2xl" />
        </section>

        <section className="container absolute inset-x-0 bottom-0 hidden h-0 justify-end lg:flex">
          <section className="absolute bottom-0 flex flex-col space-y-4 pb-8">
            {[
              { href: 'mailto:Director@nitkkr.ac.in', icon: MdEmail },
              { href: 'tel:+911742238570', icon: MdPhone },
              {
                href: 'https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana',
                icon: BsLinkedin,
              },
            ].map(({ href, icon: Icon }, index) => (
              <a href={href} key={index}>
                <Button
                  className="size-16 rounded-full border border-shade-light text-neutral-900 backdrop-blur-md hover:bg-shade-light/20"
                  variant="icon"
                >
                  <Icon className="size-5 text-shade-light lg:size-8" />
                </Button>
              </a>
            ))}
          </section>
        </section>
      </AutoplayCarousel>

      <Notifications category={notificationCategory} locale={locale} />
      <Events category={eventsCategory} locale={locale} />

      <section className="container mb-32 mt-10" id="Directors-corner">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#Directors-corner"
          text={text.Director.title[0]}
        />
  <MessageCard
    image="assets/director.jpeg"
    name={text.Director.name}
    position={text.Director.position}
    phone={text.Director.phone}
    fax={text.Director.fax}
    mobile={text.Director.mobile}
    email={text.Director.email}
  />
        
       
      </section>

      <Heading
          glyphDirection="dual"
          heading="h2"
          href="#Directors-corner"
          text={text.Director.title[1]}
        />


       <p>{text.Director.cv[0]}</p>
      <br/>
      <p>{text.Director.cv[1]}</p>
      <br/>
      <p>{text.Director.cv[2]}</p>
      <br/>
      <p>{text.Director.cv[3]}</p>
      <Heading
          glyphDirection="dual"
          heading="h2"
          href="#Directors-corner"
          text={text.Director.title[2]}
        />
      <p>{text.Director.DirectorMessage[0]}</p>
      <br/>
      <p>{text.Director.DirectorMessage[1]}</p>
      <br/>
   
      <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#Directors-corner"
          text={text.Director.title[3]}
        />
<div className="grid grid-cols-2 gap-6">
  {text.Director.employes.map((employe, index) => (
    <EmployeCard
      key={index}
      name={employe.name}
      position={employe.position}
      phone={employe.phone}
      email={employe.email}
      image="assets/director.jpeg"
    />
  ))}
</div>

        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#Directors-corner"
          text={text.Director.title[4]}
        />
      
  {text.Director.preDirectors.map((director, index) => (
  <><MessageCard
      key={index}
      name={director.name}
      position={director.position}
      phone={director.phone}
      fax={director.fax}
      mobile={director.mobile}
      email={director.email}
      image="assets/director.jpeg" /><br /></>
))}


    
    </>
  );
}
