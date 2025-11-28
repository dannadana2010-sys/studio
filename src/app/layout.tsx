import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { AppProvider } from '@/providers/app-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';
import { Preloader } from '@/components/preloader';

const defaultUrl = process.env.VERCEL_URL
  ? `https://` + process.env.VERCEL_URL
  : "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Victoire Luxury | Chauffeur Privé & Private Driver - Paris, Cannes, Monaco",
  description: "Service de chauffeur privé de luxe, location de voitures et conciergerie. Luxury private driver, car rental & concierge services in Paris, Cannes, Geneva & Courchevel.",
  openGraph: {
    title: "Victoire Luxury | Chauffeur Privé & Private Driver",
    description: "L'excellence du transport privé. Experience unmatched luxury in Paris, Cannes & Monaco.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Victoire Luxury Services'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👑</text></svg>" />
      </head>
      <body className="font-body bg-background text-foreground antialiased overflow-x-hidden">
        <AppProvider>
            <Preloader />
            <CustomCursor />
            <SmoothScroll>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScroll>
            <FloatingWhatsApp />
            <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
