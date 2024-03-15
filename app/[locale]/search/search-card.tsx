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
  | WebPageCard
  | PeopleCard
  | DocumentCard
  | EventCard
  | NewsCard
  | CourseCard
  | ClubCard
  | PostionCard;

const SearchCard: React.FC<{ index: number; cardContent: CardContent }> = ({
  index,
  cardContent,
}) => {
  switch (index) {
    case 0:
      return (
        <article className="w-full rounded-lg bg-shade-light p-2">
          <h6 className="text-primary-300">
            {(cardContent as WebPageCard).heading}
          </h6>
          <p className="text-neutral-600">
            {(cardContent as WebPageCard).content}
          </p>
        </article>
      );
    case 1:
      return (
        <article className="rounded-lg bg-shade-light p-2 sm:grid-cols-8 md:grid">
          <header className="col-span-3 flex items-center gap-2">
            <Image
              src={(cardContent as PeopleCard).image}
              alt={(cardContent as PeopleCard).name}
              width={60}
              height={60}
              className="aspect-square h-14 min-w-14 rounded-lg border border-primary-700 object-cover"
            />
            <div className="ml-2">
              <h6 className="text-primary-300">
                {(cardContent as PeopleCard).name}
              </h6>
              <p className="mb-0 text-neutral-600">
                {(cardContent as PeopleCard).designation}
              </p>
            </div>
          </header>

          <div className="col-span-5 flex h-max flex-wrap items-center gap-x-10 gap-y-2 pt-2 text-sm">
            <p className="mb-0 text-neutral-600">
              <MdEmail className="mr-2 inline-block" />
              {(cardContent as PeopleCard).email}
            </p>
            <p className="mb-0 text-neutral-600">
              <MdPhone className="mr-2 inline-block" />
              {(cardContent as PeopleCard).phone}
            </p>
            <p className="mb-0 text-neutral-600">
              <MdLocationOn className="mr-2 inline-block" />
              {(cardContent as PeopleCard).address}
            </p>
          </div>
        </article>
      );
    case 2:
      return (
        <article className="flex w-full items-center gap-2 rounded-lg bg-shade-light p-2">
          <RxDownload className="inline-block h-14 min-w-14 p-4" />
          <p className="mb-0 text-neutral-600">
            {(cardContent as DocumentCard).content}
          </p>
        </article>
      );
    case 3:
      return (
        <article className="flex w-full items-center gap-8 rounded-lg bg-shade-light p-2">
          <Image
            src={(cardContent as EventCard).image}
            alt={(cardContent as EventCard).heading}
            width={160}
            height={90}
            className="aspect-auto h-max min-w-4 rounded object-fill sm:aspect-video"
          />

          <div className="flex w-full grow flex-wrap gap-x-20 lg:justify-evenly">
            <header>
              <h6 className="text-primary-300">
                {(cardContent as EventCard).heading}
              </h6>
              <p className="mb-0 text-neutral-600">
                {(cardContent as EventCard).subHeading}
              </p>
            </header>
            <div>
              <p className="mb-0 text-neutral-600">
                <MdLocationOn className="mr-2 inline-block" />
                {(cardContent as EventCard).location}
              </p>
              <p className="mb-0 text-neutral-600">
                <MdCalendarToday className="mr-2 inline-block" />
                {(cardContent as EventCard).date}
              </p>
            </div>
          </div>
        </article>
      );
    case 4:
      return (
        <article className="w-full rounded-lg bg-shade-light p-2">
          <h6 className="text-primary-300">
            {(cardContent as NewsCard).heading}
          </h6>
          <div className="flex items-center gap-2">
            <p className="order-1 line-clamp-4 text-sm text-neutral-600">
              {(cardContent as NewsCard).content}
            </p>
            {(cardContent as NewsCard).image && (
              <Image
                src={(cardContent as NewsCard).image!}
                alt={(cardContent as NewsCard).heading}
                width={124}
                height={69}
                className="h-20 min-w-36 rounded border object-cover"
              />
            )}
          </div>
        </article>
      );
    case 5:
      return (
        <article className="grid w-full flex-wrap items-center gap-2 rounded-lg bg-shade-light p-2 sm:grid-cols-2">
          <header>
            <h6>{(cardContent as CourseCard).heading}</h6>
            <p className="mb-0 font-semibold text-primary-300">
              {(cardContent as CourseCard).subHeading}
            </p>
          </header>
          <div>
            <p className="mb-0 text-sm">
              {(cardContent as CourseCard).programme}
            </p>
            <p className="mb-0 text-sm text-primary-300">
              {(cardContent as CourseCard).programmeDuration}
            </p>
          </div>
        </article>
      );
    case 6:
      return (
        <article className="flex w-full flex-wrap gap-2 rounded-lg bg-shade-light p-2">
          <header className="flex gap-2">
            <Image
              src={(cardContent as ClubCard).image}
              alt={(cardContent as ClubCard).heading}
              width={60}
              height={60}
              className="aspect-square min-h-full w-14 rounded border object-cover py-2"
            />
            <div>
              <h6 className="text-primary-300">
                {(cardContent as ClubCard).heading}
              </h6>
              <p className="mb-0 font-semibold">
                {(cardContent as ClubCard).subHeading}
              </p>
            </div>
          </header>
          <ol className="flex grow flex-wrap items-center justify-between gap-x-8 px-4 md:flex-nowrap md:justify-around">
            {(cardContent as ClubCard).delegation.map((member, index) => (
              <li key={index}>
                <h6 className="font-sans font-medium text-neutral-600">
                  {member.post}
                </h6>
                <p className="mb-0 text-neutral-600">{member.name}</p>
              </li>
            ))}
          </ol>
        </article>
      );
    case 7:
      return (
        <article className="flex w-full flex-wrap items-center  gap-5 rounded-lg bg-shade-light p-2">
          <header>
            <h6 className="text-primary-300">
              {(cardContent as PostionCard).position}
              <strong className="block text-shade-dark">
                {(cardContent as PostionCard).organisation}
              </strong>
            </h6>
            <p className="mb-0 font-semibold">
              {(cardContent as PostionCard).names.toString()}
            </p>
          </header>
          <div className="lg:m-auto">
            <p className="mb-0 text-neutral-600">
              <MdEmail className="mr-2 inline-block" />
              {(cardContent as PostionCard).email}
            </p>
            <p className="mb-0 text-neutral-600">
              <MdPhone className="mr-2 inline-block" />
              {(cardContent as PostionCard).phone}
            </p>
            <p className="mb-0 text-neutral-600">
              <MdLocationOn className="mr-2 inline-block" />
              {(cardContent as PostionCard).address}
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
