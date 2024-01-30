import type { Metadata } from 'next';

import '@/styles/globals.css';
import Footer from './[lang]/footer';
import Header from './[lang]/header';

export const metadata: Metadata = {
  title: 'National Institute of Technology, Kurukshetra',
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
