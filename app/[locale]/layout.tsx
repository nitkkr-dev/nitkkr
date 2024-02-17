import type { Metadata } from 'next';
import { DM_Serif_Display } from 'next/font/google';

import '@/styles/globals.css';
import Footer from './footer';
import Header from './header';

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
});

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

  return (
    <html>
      <body className="flex flex-col">
        <div className={dm_serif_display.className}>
          <Header locale={params.locale} />
          <section className="flex grow">{children}</section>
          <Footer locale={params.locale} />
        </div>
      </body>
    </html>
  );
}
