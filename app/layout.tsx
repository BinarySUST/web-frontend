import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/header';
import {cn} from '@/lib/utils';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Binary SUST',
  description: 'Technology for real life',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn('dark', inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
