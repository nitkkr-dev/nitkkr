import type { Metadata } from 'next';
import { Suspense } from 'react';

import Footer from '~/app/footer';
import Header from '~/app/header';
import Loading from '~/components/loading';
import { Toaster } from '~/components/ui';
import { cn } from '~/lib/utils';
import '~/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nitkkr-dev.vercel.app'),
  alternates: {
    canonical: 'https://nitkkr-dev.vercel.app',
    languages: {
      en: 'https://nitkkr-dev.vercel.app/en',
      hi: 'https://nitkkr-dev.vercel.app/hi',
    },
  },

  title: {
    default: 'NIT Kurukshetra',
    template: '%s | NIT Kurukshetra',
  },
  description: 'Institution of National Importance',

  creator: 'Institute Software Application Club',
  authors: [
    {
      name: 'Institute Software Application Club',
      url: 'https://nitkkr-dev.vercel.app/student-activities/clubs/institute-software-application-club',
    },
  ],

  openGraph: {
    title: 'NIT Kurukshetra',
    description: 'Institution of National Importance',
    url: 'https://nitkkr-dev.vercel.app',
    siteName: 'NIT Kurukshetra',
    type: 'website',

    locale: 'en',
    alternateLocale: 'hi',

    countryName: 'India',
    emails: 'registrar@nitkkr.ac.in',
    phoneNumbers: '+01744-233208',
    faxNumbers: '238350',
  },

  robots: 'index, follow',
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hi' }];
}

export default function RootLayout({
  children,
  params,
  modals,
}: {
  children: React.ReactNode;
  params: { locale: string };
  modals: React.ReactNode;
}) {
  if (params === undefined) return null;
  const { locale } = params;

  return (
    <html className="scroll-smooth" lang={locale}>
      <body
        className={cn(
          'flex flex-col bg-background',
          'text-xs sm:text-sm md:text-base'
        )}
      >
        <Suspense fallback={<Loading />}>
          {modals}
          <Header locale={locale} />
          <section className="grow">{children}</section>
          <Footer locale={locale} />
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
