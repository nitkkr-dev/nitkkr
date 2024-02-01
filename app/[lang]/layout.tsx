import type { Metadata } from 'next';

import '@/styles/globals.css';
import Footer from './footer';
import Header from './header';

export const metadata: Metadata = {
  title: 'National Institute of Technology, Kurukshetra',
  description: 'The official NIT-KKR website',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html>
      <body className="flex flex-col">
        <Header lang={params.lang} />
        <section className="flex grow">{children}</section>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
