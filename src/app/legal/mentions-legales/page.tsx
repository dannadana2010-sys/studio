
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales – Victoire Luxury Services",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

const InfoRow = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
    <p><strong className="text-white">{label}:</strong> {value}</p>
);

export default function MentionsLegalesPage() {
  
  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Mentions Légales</h1>
        
        <SectionTitle>Éditeur du Site</SectionTitle>
        <div className="space-y-2">
            <InfoRow label="Dénomination sociale" value="Victoire Luxury Services SAS" />
            <InfoRow label="Adresse du siège social" value="3 rue Étienne Marcel, 75001 Paris, France" />
            <InfoRow label="Numéro SIREN" value="988 598 876 (R.C.S. Paris)" />
            <InfoRow label="Capital social" value="5 000 €" />
            <InfoRow label="Adresse e-mail" value={<a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>} />
            <InfoRow label="Directeur de la publication" value="La Direction" />
        </div>

        <SectionTitle>Hébergement du Site</SectionTitle>
         <div className="space-y-2">
            <p>Ce site est hébergé par :</p>
            <p>
                <strong>Vercel Inc.</strong><br />
                Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
            </p>
        </div>

        <SectionTitle>Propriété Intellectuelle</SectionTitle>
        <p>
            L'ensemble de ce site (contenus, textes, images, vidéos, logos, nom de marque Victoire Luxury Services) constitue une œuvre protégée par la législation en vigueur sur les droits d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
        <p>
            Toute reproduction ou représentation, intégrale ou partielle, par quelque procédé que ce soit, du contenu du site, faite sans l'autorisation expresse de Victoire Luxury Services SAS est illicite et constitue une contrefaçon.
        </p>

    </article>
  );
}
