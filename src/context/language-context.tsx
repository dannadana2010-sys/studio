
"use client";

import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { translations, type Translations } from '@/constants/translations';

type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // You could add logic here to detect browser language or load from local storage
    const storedLang = localStorage.getItem('vls_language') as Language | null;
    if (storedLang && ['fr', 'en', 'ar'].includes(storedLang)) {
        setLanguage(storedLang);
    }
  }, []);

  const setAndStoreLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('vls_language', lang);
  }

  const value = useMemo(() => {
    const currentTranslations = translations[language];
    return {
      language,
      setLanguage: setAndStoreLanguage,
      translations: currentTranslations,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
