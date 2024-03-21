import Image from 'next/image';
import {
  MdCalendarToday,
  MdEmail,
  MdLocationOn,
  MdPhone,
} from 'react-icons/md';
import { RxDownload } from 'react-icons/rx';

interface CardContentBase {
  heading: string;
}

interface WebPageCard extends CardContentBase {
  content: string;
}

interface PeopleCard {
  image: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
}

interface DocumentCard {
  content: string;
}

interface EventCard {
  image: string;
  heading: string;
  subHeading: string;
  location: string;
  date: string;
}

interface NewsCard extends CardContentBase {
  content: string;
  image?: string;
}

interface CourseCard extends CardContentBase {
  subHeading: string;
  programme: string;
  programmeDuration: string;
}

interface ClubCard extends CardContentBase {
  image: string;
  subHeading: string;
  delegation: { post: string; name: string }[];
}

interface PostionCard {
  position: string;
  organisation: string;
  names: string[];
  email: string;
  phone: string;
  address: string;
}

export type CardContent =
  | (WebPageCard & { category: 'webPages' })
  | (PeopleCard & { category: 'people' })
  | (DocumentCard & { category: 'documents' })
  | (EventCard & { category: 'events' })
  | (NewsCard & { category: 'news' })
  | (CourseCard & { category: 'courses' })
  | (ClubCard & { category: 'clubs' })
  | (PostionCard & { category: 'positions' });

export interface SearchResult {
  webPages: (WebPageCard & { label: string; value: string })[];
  people: (PeopleCard & { label: string; value: string })[];
  documents: (DocumentCard & { label: string; value: string })[];
  events: (EventCard & { label: string; value: string })[];
  news: (NewsCard & { label: string; value: string })[];
  courses: (CourseCard & { label: string; value: string })[];
  clubs: (ClubCard & { label: string; value: string })[];
  positions: (PostionCard & { label: string; value: string })[];
}

const SearchCard: React.FC<{
  cardContent: CardContent;
}> = ({ cardContent }) => {
  switch (cardContent.category) {
    case 'webPages':
      return (
        <article className="w-full rounded-lg bg-shade-light p-3 md:px-4">
          <h5 className="text-primary-300">{cardContent.heading}</h5>
          <p className="text-neutral-600">{cardContent.content}</p>
        </article>
      );
    case 'people':
      return (
        <article className="rounded-lg bg-shade-light p-3 sm:grid-cols-8 md:grid md:px-4">
          <header className="col-span-3 flex items-center gap-2">
            <Image
              src={cardContent.image}
              alt={cardContent.name}
              width={60}
              height={60}
              className="aspect-square h-14 min-w-14 rounded-lg border border-primary-700 object-cover"
            />
            <div className="ml-2">
              <h5 className="text-primary-300">{cardContent.name}</h5>
              <p className="text-neutral-600">{cardContent.designation}</p>
            </div>
          </header>

          <div className="col-span-5 flex h-max flex-wrap items-center gap-x-10 gap-y-2 pt-2">
            <p className="text-neutral-600">
              <MdEmail className="mr-2 inline-block" />
              {cardContent.email}
            </p>
            <p className="text-neutral-600">
              <MdPhone className="mr-2 inline-block" />
              {cardContent.phone}
            </p>
            <p className="text-neutral-600">
              <MdLocationOn className="mr-2 inline-block" />
              {cardContent.address}
            </p>
          </div>
        </article>
      );
    case 'documents':
      return (
        <article className="flex w-full items-center gap-2 rounded-lg bg-shade-light p-3 md:px-4">
          <RxDownload className="inline-block h-14 min-w-14 p-4" />
          <p className="text-neutral-600">{cardContent.content}</p>
        </article>
      );
    case 'events':
      return (
        <article className="flex w-full items-center gap-8 rounded-lg bg-shade-light p-3 md:px-4">
          <Image
            src={cardContent.image}
            alt={cardContent.heading}
            width={160}
            height={90}
            className="aspect-auto h-max min-w-4 rounded object-fill sm:aspect-video"
          />

          <div className="flex w-full grow flex-wrap gap-x-20 lg:justify-evenly">
            <header>
              <h5 className="text-primary-300">{cardContent.heading}</h5>
              <p className="text-neutral-600">{cardContent.subHeading}</p>
            </header>
            <div>
              <p className="text-neutral-600">
                <MdLocationOn className="mr-2 inline-block" />
                {cardContent.location}
              </p>
              <p className="text-neutral-600">
                <MdCalendarToday className="mr-2 inline-block" />
                {cardContent.date}
              </p>
            </div>
          </div>
        </article>
      );
    case 'news':
      return (
        <article className="w-full rounded-lg bg-shade-light p-3 md:px-4">
          <h5 className="text-primary-300">{cardContent.heading}</h5>
          <div className="flex items-center gap-2">
            <p className="order-1 line-clamp-4 text-neutral-600">
              {cardContent.content}
            </p>
            {cardContent.image && (
              <Image
                src={cardContent.image}
                alt={cardContent.heading}
                width={124}
                height={69}
                className="h-20 min-w-36 rounded border object-cover"
              />
            )}
          </div>
        </article>
      );
    case 'courses':
      return (
        <article className="grid w-full flex-wrap items-center gap-2 rounded-lg bg-shade-light p-3 sm:grid-cols-2 md:px-4">
          <header>
            <h5>{cardContent.heading}</h5>
            <p className="font-semibold text-primary-300">
              {cardContent.subHeading}
            </p>
          </header>
          <div>
            <p className="text-sm md:text-base">{cardContent.programme}</p>
            <p className="text-sm text-primary-300 md:text-base">
              {cardContent.programmeDuration}
            </p>
          </div>
        </article>
      );
    case 'clubs':
      return (
        <article className="flex w-full flex-wrap gap-2 rounded-lg bg-shade-light p-3">
          <header className="flex gap-2">
            <Image
              src={cardContent.image}
              alt={cardContent.heading}
              width={60}
              height={60}
              className="aspect-square min-h-full w-14 rounded border object-cover py-2"
            />
            <div>
              <h5 className="text-primary-300">{cardContent.heading}</h5>
              <p className="font-semibold">{cardContent.subHeading}</p>
            </div>
          </header>
          <ol className="flex grow flex-wrap items-center justify-between gap-x-8 px-4 md:flex-nowrap md:justify-around">
            {cardContent.delegation.map((member, index) => (
              <li key={index}>
                <h6 className="font-sans font-medium text-neutral-600">
                  {member.post}
                </h6>
                <p className="text-neutral-600">{member.name}</p>
              </li>
            ))}
          </ol>
        </article>
      );
    case 'positions':
      return (
        <article className="flex w-full flex-wrap items-center  gap-5 rounded-lg bg-shade-light p-3 md:px-4">
          <header>
            <h5 className="text-primary-300">
              {cardContent.position}
              <strong className="block text-shade-dark">
                {cardContent.organisation}
              </strong>
            </h5>
            <p className="font-semibold">{cardContent.names.join(', ')}</p>
          </header>
          <div className="xl:m-auto">
            <p className="text-neutral-600">
              <MdEmail className="mr-2 inline-block" />
              {cardContent.email}
            </p>
            <p className="text-neutral-600">
              <MdPhone className="mr-2 inline-block" />
              {cardContent.phone}
            </p>
            <p className="text-neutral-600">
              <MdLocationOn className="mr-2 inline-block" />
              {cardContent.address}
            </p>
          </div>
        </article>
      );
    default:
      return (
        <article>
          <h5>Error</h5>
          <p>Invalid card index</p>
        </article>
      );
  }
};

export default SearchCard;
