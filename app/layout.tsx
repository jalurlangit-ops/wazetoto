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
  keywords: 'aaabbcc',
  applicationName: 'asdaddddd',
  authors: [{ name: 'Josh', url: 'https://nextjs.org' }],
  category: 'ini category',
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
    images: 'ini OG:IMAGES',
  },
  twitter: {
    card: "summary_large_image",
    title: "Your title",
    description: "Your description",
    creator: "@author_name",
    images: ["you_url_here"],
  },
  // icons: {
  //   icon: '/icon.png',
  // },
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
