import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente – Victoire Luxury Services",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function CGVPage() {
  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Conditions Générales de Vente</h1>
        
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <SectionTitle>Article 1 : Objet</SectionTitle>
        <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société Victoire Luxury Services SAS et son client dans le cadre de ses services de transport de personnes par véhicule de transport avec chauffeur (VTC). La validation d'une réservation implique l'acceptation sans réserve par le client des présentes CGV.
        </p>

        <SectionTitle>Article 2 : Réservation</SectionTitle>
        <p>
            Toute prestation doit faire l'objet d'une réservation préalable, confirmée par Victoire Luxury Services SAS par e-mail ou via un autre support écrit. Le client doit fournir toutes les informations nécessaires à la bonne exécution de la prestation (nom, heure de prise en charge, lieu de départ et d'arrivée, nombre de passagers, etc.).
        </p>

        <SectionTitle>Article 3 : Tarifs et Paiement</SectionTitle>
        <p>
            Les tarifs sont indiqués en euros TTC. Le paiement peut s'effectuer par virement bancaire, carte de crédit (via un lien de paiement sécurisé ou à bord du véhicule) avant ou au début de la prestation. Pour les clients en compte, la facturation mensuelle est possible selon les termes convenus.
        </p>

        <SectionTitle>Article 4 : Annulation</SectionTitle>
        <p>
            L'annulation par le client est gratuite si elle intervient plus de 24 heures avant le début de la prestation.
            Pour toute annulation effectuée moins de 24 heures avant l'heure de prise en charge, 50% du montant total de la prestation sera facturé.
            Pour une annulation moins de 4 heures avant ou en cas de non-présentation du client ("no-show"), l'intégralité du montant de la prestation est due.
        </p>
        
        <SectionTitle>Article 5 : Obligations du Client et des Passagers</SectionTitle>
        <p>
            Le client et les passagers s'engagent à respecter les règles de sécurité et la législation en vigueur. Le port de la ceinture de sécurité est obligatoire. Il est strictement interdit de fumer (y compris cigarette électronique), de consommer de l'alcool ou des substances illicites à bord du véhicule. Tout dommage causé à l'intérieur du véhicule par le client ou un passager sera facturé au client.
        </p>

        <SectionTitle>Article 6 : Responsabilité</SectionTitle>
        <p>
            Victoire Luxury Services SAS s'engage à fournir un véhicule et un chauffeur conformes à la réglementation en vigueur et à mettre tout en œuvre pour assurer la sécurité et le confort de ses passagers. Notre responsabilité ne pourra être engagée en cas de retard dû à des circonstances imprévues (embouteillages, accidents, conditions météorologiques extrêmes, etc.).
        </p>

    </article>
  );
}
