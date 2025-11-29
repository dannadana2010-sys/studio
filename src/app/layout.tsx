
"use client";

import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/providers/app-provider';
import { useLanguage } from '@/context/language-context';

// Note: Metadata is defined but cannot be used in a client component.
// This is a trade-off to fix the hydration error. A more advanced solution
// would involve fetching metadata in a server component above this layout.
/*
export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://` + process.env.VERCEL_URL : "http://localhost:3000"),
  title: "Victoire Luxury | Chauffeur Privé & Private Driver - Paris, Cannes, Monaco",
  description: "Service de chauffeur privé de luxe, location de voitures et conciergerie. Luxury private driver, car rental & concierge services in Paris, Cannes, Geneva & Courchevel.",
  openGraph: {
    title: "Victoire Luxury | Chauffeur Privé & Private Driver",
    description: "L'excellence du transport privé. Experience unmatched luxury in Paris, Cannes & Monaco.",
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ar_AE'],
    siteName: 'Victoire Luxury Services'
  }
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
        {children}
    </AppProvider>
  );
}
