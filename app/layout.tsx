import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Novo Enviro | Institutional Climate Finance Consultancy',
  description:
    'Institutional climate finance consultancy developing high-integrity carbon reduction and removal projects, and internationally certified plastic credit solutions. Offices in Sofia, Bulgaria and Istanbul, Türkiye.',
  keywords: [
    'climate finance',
    'carbon credits',
    'carbon reduction',
    'carbon removal',
    'plastic credits',
    'VERs',
    'Verra',
    'Gold Standard',
    'PPRS',
    'Sofia',
    'Istanbul',
    'consultancy',
  ],
  authors: [{ name: 'Novo Enviro' }],
  openGraph: {
    title: 'Novo Enviro | Institutional Climate Finance Consultancy',
    description:
      'Institutional climate finance consultancy developing high-integrity carbon reduction and removal projects, and internationally certified plastic credit solutions. Offices in Sofia, Bulgaria and Istanbul, Türkiye.',
    type: 'website',
    url: 'https://www.novoenviro.com',
    siteName: 'Novo Enviro',
    images: [
      {
        url: '/images/logo.png',
        width: 2044,
        height: 576,
        alt: 'Novo Enviro Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novo Enviro | Institutional Climate Finance Consultancy',
    description:
      'Institutional climate finance consultancy developing high-integrity carbon reduction and removal projects, and internationally certified plastic credit solutions. Offices in Sofia, Bulgaria and Istanbul, Türkiye.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-white text-[#212121] antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-[72px] sm:pt-[84px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
