import { Footer, footerContent } from '@/components/footer';
import { Navbar, navbarContent } from '@/components/navbar';
import { PageGlow } from '@/components/ui';
import { abarMid } from '@/fonts';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gilmar',
  description: 'GILMAR TEST',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fa" dir="rtl" className={`${abarMid.variable} ${geistSans.variable}`}>
      <body>
        <Providers>
          <PageGlow placement="top" />
          <Navbar content={navbarContent} />
          {children}
          <Footer content={footerContent} />
          <PageGlow placement="bottom" />
        </Providers>
      </body>
    </html>
  );
}
