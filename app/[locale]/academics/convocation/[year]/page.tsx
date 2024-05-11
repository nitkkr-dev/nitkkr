import Image from 'next/image';
import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import { getConvocationData } from '../utils';

export default async function Page({
  params: { locale, year },
}: {
  params: { locale: string; year: string };
}) {
  const text = (await getTranslations(locale)).Convocation;

  const data = getConvocationData(year);

  return (
    <>
      <ImageHeader
        title={`${year} Convocation`}
        src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
      />

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={text.notification}
      />
      <section className="container w-full rounded-md border border-primary-500">
        <ul className={cn('w-full space-y-5 py-5')}>
          {data.notifications.map((note, i) => (
            <li
              key={i}
              className={cn(
                'group w-full rounded-lg p-5 transition-all duration-300',
                i % 2 === 0
                  ? 'bg-background hover:bg-neutral-200'
                  : 'bg-primary-500 hover:bg-primary-700'
              )}
            >
              <Link
                href={note.href}
                className={cn(
                  'line-clamp-1 max-w-full text-ellipsis text-lg font-semibold transition-colors duration-300',
                  i % 2 === 0
                    ? 'text-primary-500 hover:text-primary-700'
                    : 'hover:text-background-light text-background'
                )}
              >
                {note.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
