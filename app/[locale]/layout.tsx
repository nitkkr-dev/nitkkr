import type { Metadata } from 'next';

import Footer from '~/app/footer';
import Header from '~/app/header';
import { Toaster } from '~/components/ui';
import { cn } from '~/lib/utils';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'National Institute of Technology, Kurukshetra',
  description: 'Institution of National Importance',
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
    <html lang={locale}>
      <body
        className={cn(
          'flex flex-col bg-background',
          'text-xs sm:text-sm md:text-base'
        )}
      >
        {modals}
        <Header locale={locale} />
        <section className="grow">{children}</section>
        <Footer locale={locale} />
        <Toaster /> {/*temp for preview*/}
      </body>
    </html>
  );
}
