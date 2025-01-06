'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025</title>
        <meta name="description" content="Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="keywords" content="Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="google-site-verification" content="your-verification-id" />
        <meta name="application-name" content="Lanaya88" />
        <link rel="author" href="{window.location.href}" />
        <meta name="author" content="Lanaya88" />
        <meta name="publisher" content="Lanaya88" />
        <meta name="copyright" content="Lanaya88" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025" />
        <meta property="og:description" content="Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Lanaya88" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content="{window.location.href}" />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Lanaya88" />
        <meta name="twitter:title" content="Lanaya88 Agen Slot Online Terpercaya, Bandar Judi Slot Maxwin 2025" />
        <meta name="twitter:description" content="Lanaya88 agen slot Online terpercaya, bandar judi slot maxwin 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content="{window.location.href}" />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
