"use client";

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Politique de Confidentialité – Victoire Luxury Services",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function ConfidentialitePage() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Politique de Confidentialité</h1>
        
        {isClient ? <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p> : <p>&nbsp;</p>}

        <p>
            Victoire Luxury Services SAS s'engage à protéger la vie privée de ses clients et des visiteurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
        </p>

        <SectionTitle>1. Collecte des Données Personnelles</SectionTitle>
        <p>
            Nous collectons les données que vous nous fournissez directement lorsque vous effectuez une réservation ou que vous nous contactez via notre formulaire, par e-mail ou par téléphone. Ces données incluent :
        </p>
        <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Détails de votre demande (dates, lieux, etc.)</li>
        </ul>

        <SectionTitle>2. Utilisation des Données</SectionTitle>
        <p>
            Vos données personnelles sont utilisées exclusivement pour les finalités suivantes :
        </p>
        <ul>
            <li>Gérer et exécuter votre réservation de transport ou de service de conciergerie.</li>
            <li>Communiquer avec vous concernant votre réservation ou demande.</li>
            <li>Assurer la facturation et le suivi comptable.</li>
            <li>Répondre à nos obligations légales et réglementaires.</li>
        </ul>
        <p>
            Nous ne vendons, ne louons et ne partageons vos données personnelles avec des tiers à des fins de marketing sans votre consentement explicite.
        </p>

        <SectionTitle>3. Sécurité des Données</SectionTitle>
        <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé, la divulgation ou la modification.
        </p>
        
        <SectionTitle>4. Durée de Conservation</SectionTitle>
        <p>
            Vos données sont conservées pour la durée nécessaire à l'exécution de la prestation de service, ainsi que pour respecter nos obligations légales (notamment en matière de facturation).
        </p>

        <SectionTitle>5. Vos Droits (RGPD)</SectionTitle>
        <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles : droit d'accès, de rectification, d'effacement, de limitation du traitement, et de portabilité.
        </p>
        <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse e-mail : <a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>.
        </p>
    </article>
  );
}
