'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.daftshow.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.daftshow.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Wazetoto : Slot Dana Tanpa Rekening Dan Deposit Slot Via Dana",
            "reviewBody": "Wazetoto hadir sebagai platform slot online yang memudahkan pemain dengan menawarkan kemudahan dalam bertransaksi. Salah satu fitur unggulan dari Wazetoto adalah Slot Dana Tanpa Rekening, yang memungkinkan pemain untuk bermain tanpa harus memiliki rekening bank. Dengan menggunakan Dana, pemain dapat langsung melakukan transaksi deposit atau penarikan dengan lebih cepat dan praktis"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921018,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>Title : Wazetoto : Slot Dana Tanpa Rekening Dan Deposit Slot Via Dana</title>
        <meta name="description" content="Wazetoto hadir sebagai platform slot online yang memudahkan pemain dengan menawarkan kemudahan dalam bertransaksi. Salah satu fitur unggulan dari Wazetoto adalah Slot Dana Tanpa Rekening, yang memungkinkan pemain untuk bermain tanpa harus memiliki rekening bank. Dengan menggunakan Dana, pemain dapat langsung melakukan transaksi deposit atau penarikan dengan lebih cepat dan praktis" />
        <meta name="keywords" content="Wazetoto, Slot Dana Tanpa Rekening, Deposit Slot Via Dana, Deposit 5000 Via Dana, Cara Deposit Slot Via Ovo, Deposit 5000 Via Qris, Slot Depo 5K Via Dana, Situs Slot Deposit 5000 Via Dana, Deposit Dana 5RB, Game Slot Online Dana" />
        <meta name="google-site-verification" content="jQe1adMZdV_iX41dhW9ekou1qmlHAOHg2h6yLD1cWss" />
        <meta name="application-name" content="wazetoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="wazetoto" />
        <meta name="publisher" content="wazetoto" />
        <meta name="copyright" content="wazetoto" />
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
        <meta property="og:title" content="Wazetoto : Slot Dana Tanpa Rekening Dan Deposit Slot Via Dana" />
        <meta property="og:description" content="Wazetoto hadir sebagai platform slot online yang memudahkan pemain dengan menawarkan kemudahan dalam bertransaksi. Salah satu fitur unggulan dari Wazetoto adalah Slot Dana Tanpa Rekening, yang memungkinkan pemain untuk bermain tanpa harus memiliki rekening bank. Dengan menggunakan Dana, pemain dapat langsung melakukan transaksi deposit atau penarikan dengan lebih cepat dan praktis" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="wazetoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="wazetoto" />
        <meta name="twitter:title" content="Title : Wazetoto : Slot Dana Tanpa Rekening Dan Deposit Slot Via Dana" />
        <meta name="twitter:description" content="Wazetoto hadir sebagai platform slot online yang memudahkan pemain dengan menawarkan kemudahan dalam bertransaksi. Salah satu fitur unggulan dari Wazetoto adalah Slot Dana Tanpa Rekening, yang memungkinkan pemain untuk bermain tanpa harus memiliki rekening bank. Dengan menggunakan Dana, pemain dapat langsung melakukan transaksi deposit atau penarikan dengan lebih cepat dan praktis" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
