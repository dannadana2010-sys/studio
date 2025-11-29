
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Crown, Globe } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { language, setLanguage, translations } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = translations.navLinks;
  const languages: { code: 'fr' | 'en' | 'ar'; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  const changeLanguage = (lang: 'fr' | 'en' | 'ar') => {
    setLanguage(lang);
  };

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
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map(lang => (
                <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
           <Button asChild variant="default">
              <Link href="/contact">{translations.common.bookNow}</Link>
           </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'left' : 'right'} className="bg-black/80 backdrop-blur-lg border-border p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigation principale du site</SheetDescription>
                </SheetHeader>
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
                            <span className="sr-only">Fermer le menu</span>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full">
                              <Globe className="h-4 w-4 mr-2" />
                              {language === 'fr' && 'Français'}
                              {language === 'en' && 'English'}
                              {language === 'ar' && 'العربية'}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]]">
                            {languages.map(lang => (
                              <DropdownMenuItem key={lang.code} onClick={() => { changeLanguage(lang.code); setMobileMenuOpen(false); }}>
                                {lang.code === 'fr' && 'Français'}
                                {lang.code === 'en' && 'English'}
                                {lang.code === 'ar' && 'العربية'}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
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
