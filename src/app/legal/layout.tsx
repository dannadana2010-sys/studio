
"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  return (
    <div className="bg-neutral-950 min-h-screen text-gray-300 font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="absolute top-8 left-8 rtl:right-8 rtl:left-auto">
            <Button asChild variant="ghost">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4 rtl:hidden" />
                     <ArrowLeft className="ml-2 h-4 w-4 ltr:hidden rtl:rotate-180" />
                    {language === 'fr' ? "Retour à l'accueil" : language === 'en' ? 'Back to Home' : 'العودة إلى الرئيسية'}
                </Link>
            </Button>
        </div>
        <div className="max-w-4xl mx-auto">
            {children}
        </div>
      </div>
    </div>
  );
}
