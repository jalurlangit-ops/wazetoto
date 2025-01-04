import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'a Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025',
  description: 'Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!',
  keywords: 'Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!',
  applicationName: 'Lanaya88',
  authors: [
    { name: 'Lanaya88', 
      url: '/' 
    }],
  category: 'slot',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  publisher: 'Lanaya88',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `${origin}/user-listings`,
  },
  openGraph: {
    title: 'Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025',
    description: 'Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!',
    images: [
      {
        url: 'ini OG;URL',
        width: '840',
        height: '480',
    },
  ],
    siteName: 'Lanaya88',
    url: '/',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: "summary",
    title: "Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025",
    description: "Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!",
    creator: "Lanaya88",
    images: ["you_url_here"],
  },
  other: {
    'geo.region': 'ID',
    'geo.placename': 'Indonesia',
    'language': 'id-ID',
    'rating': 'general',
    'geo.country': 'ID',
    'page-locale': 'id,en',
    'copyright': 'Lanaya88',
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
    <html lang="id" data-browser="chrome">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
