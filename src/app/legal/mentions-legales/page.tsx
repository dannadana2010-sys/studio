
"use client";

import type { Metadata } from 'next';
import { useLanguage } from '@/context/language-context';

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
  const { language } = useLanguage();

  if (language === 'ar') {
    return (
        <article className="prose prose-invert max-w-none text-right">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">إشعار قانوني</h1>
            
            <SectionTitle>ناشر الموقع</SectionTitle>
            <div className="space-y-2">
                <InfoRow label="الاسم التجاري" value="Victoire Luxury Services SAS" />
                <InfoRow label="عنوان المقر الرئيسي" value="3 rue Étienne Marcel, 75001 Paris, France" />
                <InfoRow label="رقم SIREN" value="988 598 876 (R.C.S. Paris)" />
                <InfoRow label="رأس المال" value="5,000 يورو" />
                <InfoRow label="البريد الإلكتروني" value={<a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>} />
                <InfoRow label="مدير النشر" value="الإدارة" />
            </div>

            <SectionTitle>استضافة الموقع</SectionTitle>
             <div className="space-y-2">
                <p>يتم استضافة هذا الموقع بواسطة:</p>
                <p>
                    <strong>Vercel Inc.</strong><br />
                    العنوان: 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                    الموقع: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
                </p>
            </div>

            <SectionTitle>الملكية الفكرية</SectionTitle>
            <p>
                يشكل هذا الموقع بأكمله (المحتويات، النصوص، الصور، الفيديوهات، الشعارات، اسم العلامة التجارية Victoire Luxury Services) عملاً محمياً بموجب التشريعات الحالية المتعلقة بحقوق المؤلف والملكية الفكرية. جميع حقوق النسخ محفوظة، بما في ذلك للمستندات القابلة للتنزيل والتمثيلات الأيقونية والصور الفوتوغرافية.
            </p>
            <p>
                أي نسخ أو تمثيل، كلي أو جزئي، بأي وسيلة كانت، لمحتوى الموقع، يتم دون إذن صريح من Victoire Luxury Services SAS هو غير قانوني ويشكل تقليداً.
            </p>
        </article>
    );
  }

  if (language === 'en') {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Legal Notice</h1>
            
            <SectionTitle>Site Editor</SectionTitle>
            <div className="space-y-2">
                <InfoRow label="Company Name" value="Victoire Luxury Services SAS" />
                <InfoRow label="Head Office Address" value="3 rue Étienne Marcel, 75001 Paris, France" />
                <InfoRow label="SIREN Number" value="988 598 876 (R.C.S. Paris)" />
                <InfoRow label="Share Capital" value="€5,000" />
                <InfoRow label="Email Address" value={<a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>} />
                <InfoRow label="Publication Director" value="The Management" />
            </div>

            <SectionTitle>Site Hosting</SectionTitle>
             <div className="space-y-2">
                <p>This site is hosted by:</p>
                <p>
                    <strong>Vercel Inc.</strong><br />
                    Address: 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                    Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
                </p>
            </div>

            <SectionTitle>Intellectual Property</SectionTitle>
            <p>
                The entirety of this site (content, texts, images, videos, logos, Victoire Luxury Services brand name) constitutes a work protected by current legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.
            </p>
            <p>
                Any reproduction or representation, in whole or in part, by any means whatsoever, of the site's content, made without the express authorization of Victoire Luxury Services SAS is illegal and constitutes an infringement.
            </p>

        </article>
    );
  }
  
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
