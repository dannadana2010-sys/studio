"use client";

import { LanguageProvider } from '@/context/language-context';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}
