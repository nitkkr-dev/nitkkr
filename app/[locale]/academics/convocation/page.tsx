import Link from 'next/link';

import { cn } from '~/lib/utils';
import Heading from '~/components/heading';

export default async function Convocation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="container h-screen">
      <Heading glyphDirection={'dual'} heading={'h1'} text={'Convocations'} />
      <ul
        className={cn(
          'container mb-2 sm:mb-4 lg:mb-6 xl:mb-8',
          'grid grid-cols-1 gap-2',
          'sm:grid-cols-2 sm:gap-4',
          'lg:grid-cols-3 lg:gap-6',
          'xl:grid-cols-4 xl:gap-8'
        )}
      >
        {['19th', '18th', '17th', '16th'].map((convocation, i) => (
          <li key={i}>
            <Link
              className={cn(
                'flex items-center gap-2 md:gap-3',
                'group bg-neutral-50 font-serif hover:bg-primary-500',
                'rounded p-2 drop-shadow hover:drop-shadow-lg xl:p-3'
              )}
              href={`/${locale}/academics/convocation/${convocation}`}
            >
              <h5
                className={cn(
                  'size-8 p-1',
                  'sm:h-12 sm:min-w-12 sm:p-3',
                  'lg:h-20 lg:min-w-20 lg:p-5',
                  'rounded bg-primary-700 fill-neutral-50 text-neutral-50 drop-shadow group-hover:bg-neutral-50 group-hover:text-primary-700'
                )}
              >
                {convocation}
              </h5>
              <h5
                className={cn(
                  'text-primary-700 group-hover:text-neutral-50',
                  'transition-colors duration-200'
                )}
              >
                Convocation
              </h5>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
