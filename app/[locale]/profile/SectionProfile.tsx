import Image from 'next/image';

import { ScrollArea } from '~/components/ui';
import { cn } from '~/lib/utils';

import { LogOut } from './client-utils';

interface SectionProfileProps {
  section: {
    id: number;
    name: string;
    email: string;
  };
  locale: string;
  text: {
    logout: string;
    sectionProfile: string;
    email: string;
  };
}

export function SectionProfile({ section, locale, text }: SectionProfileProps) {
  return (
    <section
      className={cn(
        'container my-4 flex max-md:flex-col',
        'gap-4 md:gap-6 lg:gap-8 xl:gap-10'
      )}
    >
      <article
        className={cn(
          'h-fit md:sticky md:top-[88px]', // DEPENDS-ON: header.tsx
          'rounded bg-neutral-50 text-center',
          'space-y-4 lg:space-y-5 xl:space-y-6',
          'px-4 py-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10',
          'md:min-w-72 lg:min-w-80 xl:min-w-96'
        )}
      >
        <figure className="space-y-4">
          {/* Section icon/logo placeholder */}
          <div className="mx-auto flex size-28 items-center justify-center rounded-full border border-primary-700 bg-primary-100">
            <span className="text-3xl font-bold text-primary-700">
              {section.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 3)
                .toUpperCase()}
            </span>
          </div>
          <figcaption>
            <p className="font-serif text-lg font-medium text-primary-700 md:text-xl">
              {text.sectionProfile}
            </p>
            <p className="font-serif text-lg font-medium">{section.name}</p>
            <p className="text-sm text-neutral-600">{section.email}</p>
          </figcaption>
        </figure>

        <LogOut className="px-3 py-2" text={text.logout} />
      </article>

      <main className="flex-1">
        <div className="rounded bg-neutral-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-primary-700">
            {section.name}
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">{text.email}:</span>{' '}
              <a
                href={`mailto:${section.email}`}
                className="text-primary-600 hover:underline"
              >
                {section.email}
              </a>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
