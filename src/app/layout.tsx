import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senjin Holdings - Building the Future Together",
  description: "Senjin Holdings is a forward-thinking investment company dedicated to identifying and nurturing innovative opportunities that shape tomorrow's landscape.",
  keywords: "investment, innovation, sustainable growth, strategic partnerships, technology, venture capital",
  authors: [{ name: "Senjin Holdings" }],
  creator: "Senjin Holdings",
  publisher: "Senjin Holdings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://senjin-holdings.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ja-JP': '/ja-JP',
    },
  },
  openGraph: {
    title: "Senjin Holdings - Building the Future Together",
    description: "Forward-thinking investment company dedicated to innovative opportunities",
    url: 'https://senjin-holdings.com',
    siteName: 'Senjin Holdings',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Senjin Holdings - Building the Future Together",
    description: "Forward-thinking investment company dedicated to innovative opportunities",
    creator: '@senjinholdings',
    images: ['/twitter-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
