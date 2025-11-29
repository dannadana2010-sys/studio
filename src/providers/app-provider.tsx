
"use client";

import { LanguageProvider, useLanguage } from '@/context/language-context';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';
import { Preloader } from '@/components/preloader';

function MainLayout({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage();

    return (
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} className="dark">
            <head>
                <title>Victoire Luxury | Chauffeur Privé & Private Driver - Paris, Cannes, Monaco</title>
                <meta name="description" content="Service de chauffeur privé de luxe, location de voitures et conciergerie. Luxury private driver, car rental & concierge services in Paris, Cannes, Geneva & Courchevel." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%E2%99%94%3C/text%3E%3C/svg%3E" />
            </head>
            <body className="font-body bg-background text-foreground antialiased overflow-x-hidden">
                <Preloader />
                <CustomCursor />
                <SmoothScroll>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </SmoothScroll>
                <FloatingWhatsApp />
                <Toaster />
            </body>
        </html>
    )
}


export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <MainLayout>{children}</MainLayout>
        </LanguageProvider>
    );
}
