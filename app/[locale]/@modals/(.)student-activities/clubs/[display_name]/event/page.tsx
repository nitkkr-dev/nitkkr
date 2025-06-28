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
      title: 'Saarang',
      date: '2021-10-10',
      image: ['student-activities/clubs/spicmacay/6.jpg'],
      description:
        'Saarang is one of SPICMACAY NIT Kurukshetra’s flagship cultural events, showcasing the vibrant diversity of Indian classical music and dance. It brings together student performers and promotes traditional art forms through themed performances, often held during Confluence, the annual cultural fest.',
    },
    {
      id: 1,
      title: 'Virasat',
      date: '2021-10-10',
      image: ['student-activities/clubs/spicmacay/10.jpg'],
      description:
        'Virasat is a prestigious series under SPICMACAY that invites renowned classical artists to the campus, offering students a direct experience of India’s rich cultural heritage. The event features live performances, interactive sessions, and workshops, celebrating the timeless traditions of music, dance, and art.',
    },
    {
      id: 2,
      title: 'JAM Project',
      date: '2021-10-10',
      image: ['student-activities/clubs/spicmacay/3.jpg'],
      description:
        'The JAM Project is a grand performance event organized by SPICMACAY, where club members—especially juniors—showcase their talents through classical and fusion performances. It serves as a platform to celebrate and appreciate new talent, featuring vibrant acts that blend tradition with creativity, and marks a key highlight in the club’s yearly calendar.',
    },
    {
      id: 3,
      title: 'Workshops',
      date: '2021-10-10',
      image: ['student-activities/clubs/spicmacay/1.jpg'],
      description:
        'SPICMACAY regularly conducts instrumental and vocal workshops to help students explore classical music practically. These sessions are guided by skilled artists or senior members and focus on instruments like harmonium, tabla, and vocals, creating an inclusive space for learning and collaboration.',
    },
    {
      id: 4,
      title: 'Battle Street',
      date: '2021-10-10',
      image: ['student-activities/clubs/spicmacay/2.jpg'],
      description:
        'Battle Street is an electrifying face-to-face dance battle event where dancers compete in intense 1v1 showdowns. Organized as part of the cultural fest, it features a high-energy environment with freestyle, hip-hop, and street dance styles. Participants go head-to-head in knockout rounds, judged live on the spot, showcasing their skills, rhythm, and stage presence in front of an enthusiastic crowd.',
    },
  ] as ClubEvent[];

  const id = parseInt(searchParams.club_event);
  const clubEvent = events[id];
  const imageCount = clubEvent.image.length;

  return (
    <Dialog className="mx-4 mx-auto flex max-w-5xl flex-col items-center rounded-xl border border-primary-500 bg-background p-8 shadow-xl">
      <h2 className="text-primary-800 mb-4 self-start text-3xl font-bold">
        {clubEvent.title}
      </h2>

      <GalleryCarousel
        className="mb-6 w-full overflow-hidden rounded-lg"
        itemClassName="w-full"
      >
        {[...Array<number>(imageCount)].map((_, index) => (
          <Image
            alt={String(index)}
            height={400}
            key={index}
            src={clubEvent.image[index]}
            width={1000}
            className="h-auto max-h-[500px] w-full rounded-lg object-contain"
          />
        ))}
      </GalleryCarousel>

      <p className="text-gray-700 text-base leading-relaxed">
        SPICMACAY regularly conducts instrumental and vocal workshops to help
        students explore classical music practically. These sessions are guided
        by skilled artists or senior members and focus on instruments like
        harmonium, tabla, and vocals, creating an inclusive space for learning
        and collaboration.
      </p>
    </Dialog>
  );
}
