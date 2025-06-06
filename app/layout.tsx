import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';

export const metadata: Metadata = {
  title: {
    default: 'موج پاک - دستگاه‌های تصفیه آب با کیفیت',
    template: '%s | موج پاک',
  },
  description: 'خرید دستگاه‌های تصفیه آب با کیفیت بالا برای آب پاک و سالم در خانه و کسب‌وکار شما با موج پاک.',
  keywords: ['تصفیه آب', 'دستگاه تصفیه آب', 'آب پاک', 'موج پاک', 'فیلتر آب', 'سلامتی', 'تجهیزات خانگی'],
  authors: [{ name: 'تیم موج پاک', url: 'https://mojepak.ir' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mojepak.ir',
    languages: {
      'fa-IR': 'https://mojepak.ir',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://mojepak.ir',
    siteName: 'موج پاک',
    title: 'موج پاک - دستگاه‌های تصفیه آب با کیفیت',
    description: 'خرید دستگاه‌های تصفیه آب با کیفیت بالا برای آب پاک و سالم در خانه و کسب‌وکار شما.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'دستگاه تصفیه آب موج پاک',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Mojepak',
    creator: '@Mojepak',
    title: 'موج پاک - دستگاه‌های تصفیه آب با کیفیت',
    description: 'خرید دستگاه‌های تصفیه آب با کیفیت بالا برای آب پاک و سالم در خانه و کسب‌وکار شما.',
    images: '/images/og-image.jpg',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Organization
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'موج پاک',
    url: 'https://mojepak.ir',
    logo: 'https://mojepak.ir/images/logo.png',
    description: 'موج پاک ارائه‌دهنده دستگاه‌های تصفیه آب با کیفیت بالا برای آب پاک و سالم در خانه و کسب‌وکار شما.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-12345678',
      contactType: 'Customer Service',
      areaServed: 'IR',
      availableLanguage: 'Persian',
    },
    sameAs: [
      'https://facebook.com/mojepak',
      'https://twitter.com/mojepak',
      'https://instagram.com/mojepak',
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Preload Vazir Font for Performance */}
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" type="text/css" />
        {/* Viewport Meta for Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#1E88E5" />
        {/* Structured Data (JSON-LD) */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <ConfigProvider locale={faIR} direction='rtl' theme={{
        token: {
          fontFamily: 'Vazir'
        }
      }}>
        <body className="font-vazir">{children}</body>
      </ConfigProvider>
    </html>
  );
}