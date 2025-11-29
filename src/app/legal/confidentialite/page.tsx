
"use client";

import React from 'react';
import { useLanguage } from '@/context/language-context';


const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function ConfidentialitePage() {
  const [isClient, setIsClient] = React.useState(false);
  const { language } = useLanguage();
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const lastUpdated = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'ar-AE');

  if (language === 'ar') {
    return (
        <article className="prose prose-invert max-w-none text-right">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">سياسة الخصوصية</h1>
            
            {isClient ? <p>آخر تحديث: {lastUpdated}</p> : <p>&nbsp;</p>}

            <p>
                تلتزم شركة Victoire Luxury Services SAS بحماية خصوصية عملائها وزوار موقعها الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمع بياناتك الشخصية واستخدامها وحمايتها.
            </p>

            <SectionTitle>1. جمع البيانات الشخصية</SectionTitle>
            <p>
                نقوم بجمع البيانات التي تقدمها لنا مباشرة عند إجراء حجز أو عند الاتصال بنا عبر نموذج الاتصال الخاص بنا أو عبر البريد الإلكتروني أو الهاتف. تشمل هذه البيانات:
            </p>
            <ul>
                <li>الاسم واللقب</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>رقم الهاتف</li>
                <li>تفاصيل طلبك (التواريخ، الأماكن، إلخ.)</li>
            </ul>

            <SectionTitle>2. استخدام البيانات</SectionTitle>
            <p>
                تستخدم بياناتك الشخصية حصريًا للأغراض التالية:
            </p>
            <ul>
                <li>إدارة وتنفيذ حجز النقل أو خدمة الكونسيرج الخاصة بك.</li>
                <li>التواصل معك بخصوص حجزك أو طلبك.</li>
                <li>ضمان الفوترة والمتابعة المحاسبية.</li>
                <li>الاستجابة لالتزاماتنا القانونية والتنظيمية.</li>
            </ul>
            <p>
                نحن لا نبيع بياناتك الشخصية أو نؤجرها أو نشاركها مع أطراف ثالثة لأغراض تسويقية دون موافقتك الصريحة.
            </p>

            <SectionTitle>3. أمان البيانات</SectionTitle>
            <p>
                نطبق تدابير أمنية فنية وتنظيمية مناسبة لحماية بياناتك من الضياع أو الوصول غير المصرح به أو الكشف أو التعديل.
            </p>
            
            <SectionTitle>4. مدة الاحتفاظ بالبيانات</SectionTitle>
            <p>
                يتم الاحتفاظ ببياناتك للمدة اللازمة لتنفيذ الخدمة، وكذلك للامتثال لالتزاماتنا القانونية (خاصة فيما يتعلق بالفوترة).
            </p>

            <SectionTitle>5. حقوقك (GDPR)</SectionTitle>
            <p>
                وفقًا للائحة العامة لحماية البيانات (GDPR)، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية: الحق في الوصول، والتصحيح، والمحو، وتقييد المعالجة، وقابلية نقل البيانات.
            </p>
            <p>
                لممارسة هذه الحقوق، يمكنك الاتصال بنا على عنوان البريد الإلكتروني: <a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>.
            </p>
        </article>
    );
  }

  if (language === 'en') {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Privacy Policy</h1>
            
            {isClient ? <p>Last updated: {lastUpdated}</p> : <p>&nbsp;</p>}

            <p>
                Victoire Luxury Services SAS is committed to protecting the privacy of its clients and website visitors. This privacy policy explains how we collect, use, and protect your personal data.
            </p>

            <SectionTitle>1. Collection of Personal Data</SectionTitle>
            <p>
                We collect data that you provide to us directly when you make a reservation or contact us via our contact form, by e-mail, or by phone. This data includes:
            </p>
            <ul>
                <li>First and last name</li>
                <li>E-mail address</li>
                <li>Phone number</li>
                <li>Details of your request (dates, locations, etc.)</li>
            </ul>

            <SectionTitle>2. Use of Data</SectionTitle>
            <p>
                Your personal data is used exclusively for the following purposes:
            </p>
            <ul>
                <li>To manage and execute your transportation or concierge service reservation.</li>
                <li>To communicate with you regarding your reservation or request.</li>
                <li>To ensure invoicing and accounting follow-up.</li>
                <li>To comply with our legal and regulatory obligations.</li>
            </ul>
            <p>
                We do not sell, rent, or share your personal data with third parties for marketing purposes without your explicit consent.
            </p>

            <SectionTitle>3. Data Security</SectionTitle>
            <p>
                We implement appropriate technical and organizational security measures to protect your data against loss, unauthorized access, disclosure, or alteration.
            </p>
            
            <SectionTitle>4. Retention Period</SectionTitle>
            <p>
                Your data is kept for the period necessary to perform the service, as well as to comply with our legal obligations (particularly in terms of invoicing).
            </p>

            <SectionTitle>5. Your Rights (GDPR)</SectionTitle>
            <p>
                In accordance with the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data: right of access, rectification, erasure, limitation of processing, and portability.
            </p>
            <p>
                To exercise these rights, you can contact us at the e-mail address: <a href="mailto:contact@victoire-luxury.com" className="text-primary hover:underline">contact@victoire-luxury.com</a>.
            </p>
        </article>
      );
  }

  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Politique de Confidentialité</h1>
        
        {isClient ? <p>Dernière mise à jour : {lastUpdated}</p> : <p>&nbsp;</p>}

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
