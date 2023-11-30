import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/header';
import Providers from '@/providers/providers';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Binary SUST',
  description: 'Technology for real life',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
