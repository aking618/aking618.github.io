import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Ayren King | iOS Developer';
const description =
  'An iOS Developer who still uses an Android phone.';
const url = 'https://ayrenking.dev';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'iOS Developer',
    'Mobile Developer',
    'iOS Engineer',
    'Mobile Engineer',
  ],
  creator: 'Ayren King',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png', // TOOD: Replace
    apple: '/apple-touch-icon.png', // TODO: Replace
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
