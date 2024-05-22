import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

import { getForms } from '~/actions/form.actions';
import Loading from '~/components/loading';
import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import { FormsList, SearchInput, Types } from './client-utils';

export default async function Forms({
  params: { locale },
  searchParams: { types: formType, query },
}: {
  params: { locale: string };
  searchParams: { types?: string; query?: string };
}) {
  const text = (await getTranslations(locale)).Forms;
  return (
    <section
      className={cn(
        'container my-6 grid gap-x-4 space-y-6 xl:gap-x-8',
        'sm:grid-cols-[auto,50%] lg:grid-cols-[2fr,1fr] xl:grid-cols-[30%,auto] xl:grid-rows-[2.5rem,auto]'
      )}
    >
      <search
        className={cn(
          'h-fit xl:row-span-2 xl:inline xl:rounded xl:p-4',
          'xl:sticky xl:top-[88px]', // DEPENDS-ON: header.tsx
          'xl:border xl:border-primary-700 xl:bg-neutral-50'
        )}
      >
        <Types types={text.types} />
      </search>

      <SearchInput defaultValue={query} placeholder={text.placeholder} />

      <ol className="space-y-4 max-xl:sm:col-span-2">
        <Suspense fallback={<Loading />} key={`${query}-${formType}`}>
          <FormsDisplay
            locale={locale}
            transText={{
              active: text.active,
              closed: text.inactive,
              opened: text.opened,
              download: text.download,
            }}
            loginPlease={{
              login: text.loginPlease.login,
              unauthorized: text.loginPlease.unathorised,
            }}
          />
        </Suspense>
      </ol>
    </section>
  );
}

const FormsDisplay = async ({
  locale,
  loginPlease: { login, unauthorized },
  transText,
}: {
  locale: string;
  loginPlease: { login: string; unauthorized: string };
  transText: {
    active: string;
    closed: string;
    opened: string;
    download: string;
  };
}) => {
  const formsList = await getForms();
  if (formsList instanceof Error)
    return (
      <main className="flex h-[60dvh] flex-col items-center justify-center">
        <h3>{unauthorized}</h3>
        <Link href={`/${locale}/login`}>
          <Button className="p-1">{login}</Button>
        </Link>
      </main>
    );
  return (
    <main className="grid grid-cols-2">
      <FormsList forms={formsList} locale={locale} transText={transText} />
    </main>
  );
};

export const FormsCard = ({
  form: { id, isActive, persistentUrl, expiryDate, title },
  transText: { active, closed, opened, download },
  locale,
}: {
  form: {
    id: number;
    isActive: boolean;
    type: 'academic' | 'all' | 'factulty feedback' | 'placement' | 'other';
    persistentUrl: string | null;
    expiryDate: Date | null;
    title: string;
  };
  transText: {
    active: string;
    closed: string;
    opened: string;
    download: string;
  };
  locale: string;
}) => {
  return (
    <li
      key={id}
      className="block rounded-md border-l-2 border-primary-700 bg-shade-light p-4 shadow-md"
    >
      <Link href={`${locale}/forms/${persistentUrl ?? id}`}>
        <span className="flex items-center gap-2">
          <figure className="flex w-fit items-center gap-1 rounded-full bg-secondary-100/30 px-2 py-[0.05rem]">
            <svg
              width="101"
              height="101"
              viewBox="0 0 101 101"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3 fill-secondary-500"
            >
              <circle cx="51" cy="51" r="49" className="opacity-30" />
              <circle cx="51" cy="51" r="20" />
            </svg>
            <figcaption className="inline text-xs font-semibold text-secondary-300">
              {isActive ? active : closed}
            </figcaption>
          </figure>
          <p>
            <span className="text-neutral-500">{opened}:</span>
            {expiryDate?.toLocaleDateString(locale)}
          </p>
          <Button
            variant="icon"
            className="ms-auto !rounded-sm bg-primary-900 p-1 text-shade-light hover:bg-primary-300"
          >
            <MdOutlineFileDownload className="size-4" />
            <p className="sr-only">{download}</p>
          </Button>
        </span>
        <h4 className="text-shade-dark">{title}</h4>
      </Link>
    </li>
  );
};
