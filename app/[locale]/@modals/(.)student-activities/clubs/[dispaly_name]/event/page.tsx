import Image from 'next/image';

import { GalleryCarousel } from '~/components/carousels';
import { Dialog } from '~/components/dialog';

interface ClubEvent {
  id: number;
  title: string;
  date: string;
  image: [string];
  description: string;
}

export default function EventPage({
  searchParams,
}: {
  params: { locale: string };
  searchParams: { club_event: string };
}) {
  const events = [
    {
      id: 0,
      title: 'Event 1',
      date: '2021-10-10',
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      ],
      description: 'This is the description of the event',
    },
    {
      id: 1,
      title: 'Event 2',
      date: '2021-10-10',
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      ],
      description: 'This is the description of the event',
    },
    {
      id: 2,
      title: 'Event 3',
      date: '2021-10-10',
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      ],
      description: 'This is the description of the event',
    },
    {
      id: 3,
      title: 'Event 4',
      date: '2021-10-10',
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      ],
      description: 'This is the description of the event',
    },
    {
      id: 4,
      title: 'Event 5',
      date: '2021-10-10',
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      ],
      description: 'This is the description of the event',
    },
  ] as ClubEvent[];

  const id = parseInt(searchParams.club_event);
  const clubEvent = events[id];
  const imageCount = clubEvent.image.length;

  return (
    <Dialog className="container mx-auto flex flex-col items-start space-y-6 rounded-lg border border-primary-500 bg-background p-6 shadow-lg md:flex-row md:items-center md:space-x-6 md:space-y-0">
      <GalleryCarousel
        className="hidden h-80 w-full max-w-sm items-center justify-center overflow-hidden rounded-lg md:flex md:max-w-md"
        itemClassName=""
      >
        {[...Array<number>(imageCount)].map((_, index) => (
          <Image
            alt={String(index)}
            height={400}
            key={index}
            src={clubEvent.image[index]}
            width={400}
            className="h-full w-full rounded-lg object-cover"
          />
        ))}
      </GalleryCarousel>
      <section className="flex-1">
        <h2 className="text-primary-800 mb-4 text-2xl font-bold">
          {clubEvent.title}
        </h2>
        <GalleryCarousel
          className="flex h-80 w-full max-w-sm items-center justify-center overflow-hidden rounded-lg md:hidden md:max-w-md"
          itemClassName=""
        >
          {[...Array<number>(imageCount)].map((_, index) => (
            <Image
              alt={String(index)}
              height={400}
              key={index}
              src={clubEvent.image[index]}
              width={400}
              className="h-full w-full rounded-lg object-cover"
            />
          ))}
        </GalleryCarousel>
        <br className="md:hidden" />
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quis
          optio adipisci, voluptates nobis eos nisi tempora eius assumenda
          maxime et velit reiciendis reprehenderit libero aut rem, vero, dolorum
          animi! Voluptatum assumenda rerum, non consequatur labore vitae
          repudiandae maxime beatae in doloribus itaque, quaerat dolorem
          nesciunt modi quas provident officia, necessitatibus ut amet qui
          voluptatibus facere. Aut aliquid veritatis cum, nihil, minima
          laudantium perferendis assumenda doloribus quam aspernatur nulla
          porro!
        </p>
      </section>
    </Dialog>
  );
}
