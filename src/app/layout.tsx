import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Ayren King | iOS Developer';
const description =
  'An iOS Developer who still uses an Android phone.';
const url = 'https://ayrenking.dev';
const image = '/images/opengraph-banner.png';

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
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: image,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewportFit: 'cover',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  width: 'device-width',
  height: 'device-height',
  userScalable: false,
  }

