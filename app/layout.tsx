import type { Metadata } from 'next';

import '@/styles/globals.css';
import Footer from './footer';
import Header from './header';

export const metadata: Metadata = {
  title: 'Institute Software Application Center',
  description: 'The official NIT-KKR website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col">
        <Header />
        <section className="flex grow">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
