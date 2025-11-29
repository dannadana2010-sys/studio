"use client";

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Politique de Cookies – Victoire Luxury Services",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function CookiesPage() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Politique de Cookies</h1>
        
        {isClient ? <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p> : <p>&nbsp;</p>}

        <SectionTitle>Qu'est-ce qu'un cookie ?</SectionTitle>
        <p>
            Un cookie est un petit fichier texte déposé sur votre ordinateur, votre mobile ou votre tablette lors de la visite d'un site. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services personnalisés.
        </p>

        <SectionTitle>Les Cookies Utilisés sur notre Site</SectionTitle>
        <p>
            Notre site utilise uniquement des cookies dits "techniques" ou "essentiels". Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes. Ils sont généralement établis en réponse à des actions que vous avez effectuées et qui constituent une demande de services, telles que le choix de votre langue ou le maintien de votre session.
        </p>
        <p>
            Ces cookies ne stockent aucune information d'identification personnelle. Nous n'utilisons pas de cookies publicitaires, de cookies de mesure d'audience (analytics) tiers, ou de cookies de réseaux sociaux.
        </p>

        <SectionTitle>Gestion des Cookies</SectionTitle>
        <p>
            Puisque nous n'utilisons que des cookies essentiels, nous ne proposons pas de mécanisme de consentement. Toutefois, vous pouvez configurer votre navigateur pour bloquer ou être alerté de l'utilisation de ces cookies, mais certaines parties du site pourraient alors ne pas fonctionner.
        </p>
    </article>
  );
}
