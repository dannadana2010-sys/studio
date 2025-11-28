"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { translations, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = translations.navLinks;

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Crown className="h-8 w-8" />
          <span className="font-headline text-2xl font-bold tracking-wider text-white">
            VLS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gray-300 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
           <Button onClick={toggleLanguage} variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
            {language === 'fr' ? 'EN' : 'FR'}
          </Button>
           <Button asChild variant="default">
              <Link href="/contact">{translations.common.bookNow}</Link>
           </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/80 backdrop-blur-lg border-l-border p-0">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-border">
                         <Link href="/" className="flex items-center gap-2 text-primary" onClick={() => setMobileMenuOpen(false)}>
                            <Crown className="h-6 w-6" />
                            <span className="font-headline text-xl font-bold text-white">
                                VLS
                            </span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                            <X className="h-6 w-6 text-white" />
                        </Button>
                    </div>
                    <nav className="flex flex-col items-start gap-6 p-6">
                        {navLinks.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-body text-lg font-medium text-gray-200 transition-colors hover:text-primary"
                            >
                            {link.label}
                            </Link>
                        ))}
                    </nav>
                     <div className="mt-auto p-6 border-t border-border space-y-4">
                        <Button onClick={toggleLanguage} variant="outline" className="w-full">
                          {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                        </Button>
                        <Button asChild variant="default" className="w-full">
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{translations.common.bookNow}</Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
