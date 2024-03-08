import type { Metadata } from 'next';

import '~/styles/globals.css';
import Footer from './footer';
import Header from './header';

export const metadata: Metadata = {
  title: 'National Institute of Technology, Kurukshetra',
  description: 'Institution of National Importance',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (params === undefined) return null;
  const { locale } = params;

  return (
    <html lang={locale}>
      <body className="flex flex-col">
        <Header locale={locale} />
        <section className="flex grow">{children}</section>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
