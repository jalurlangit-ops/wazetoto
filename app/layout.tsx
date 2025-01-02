import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Masukkan Deskripsi Disini',
  keywords: 'Masukkan keywords',
  applicationName: 'brandA',
  authors: [
    { name: 'brandA', 
      url: 'https://nextjs.org' 
    }],
  category: 'ini category',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  publisher: 'brandA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ini OG:TITLE',
    description: 'ini OG:DESC',
    images: [
      {
        url: 'ini OG;URL',
        width: '840',
        height: '480',
    },
  ],
    siteName: 'aaaaaa',
    url: 'aaa',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: "summary",
    title: "Your title",
    description: "Your description",
    creator: "brandA",
    images: ["you_url_here"],
  },
  // icons: {
  //   icon: '/icon.png',
  // },
  other: {
    'geo.region': 'ID',
    'geo.placename': 'Indonesia',
    'language': 'id-ID',
    'rating': 'general',
    'geo.country': 'ID',
    'page-locale': 'id,en',
    'copyright': 'brandA',
    'HandheldFriendly': 'true',
    'MobileOptimized': 'width',
    'distribution': 'global',
  },verification: {
    google: "your-verification-id",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
