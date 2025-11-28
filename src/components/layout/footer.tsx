
"use client";

import Link from 'next/link';
import { Crown, Instagram, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';

export function Footer() {
  const { translations } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsClient(true);
  }, []);


  const legalLinks = [
      { href: "/legal/mentions-legales", label: "Mentions Légales" },
      { href: "/legal/cgv", label: "CGV" },
      { href: "/legal/confidentialite", label: "Politique de Confidentialité" },
      { href: "/legal/cookies", label: "Cookies" },
  ]

  return (
    <footer className="bg-accent text-accent-foreground border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary mb-4">
              <Crown className="h-8 w-8" />
              <span className="font-headline text-2xl font-bold tracking-wider text-white">
                VLS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {translations.footer.tagline}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">{translations.footer.services.title}</h3>
            <ul className="mt-4 space-y-2">
              {translations.footer.services.links.map(link => (
                 <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">{translations.footer.company.title}</h3>
            <ul className="mt-4 space-y-2">
              {translations.footer.company.links.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">{translations.footer.social.title}</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-x-6 gap-y-2 flex-wrap mb-4">
                {legalLinks.map(link => (
                    <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                ))}
            </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
            {isClient && (
              <>
                <p>
                  &copy; {currentYear} {translations.footer.copyright}
                </p>
                <span className="hidden sm:inline">|</span>
                <p className="text-xs text-neutral-600">
                    Designed by <a href="https://www.darkavel.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">Darkavel</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
