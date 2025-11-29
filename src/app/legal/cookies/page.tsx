
"use client";

import React from 'react';
import { useLanguage } from '@/context/language-context';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function CookiesPage() {
  const [isClient, setIsClient] = React.useState(false);
  const { language } = useLanguage();
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  
  const lastUpdated = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'ar-AE');

  if (language === 'ar') {
    return (
        <article className="prose prose-invert max-w-none text-right">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">سياسة الكوكيز</h1>
            
            {isClient ? <p>آخر تحديث: {lastUpdated}</p> : <p>&nbsp;</p>}

            <SectionTitle>ما هو ملف تعريف الارتباط (الكوكيز)؟</SectionTitle>
            <p>
                ملف تعريف الارتباط هو ملف نصي صغير يتم وضعه على جهاز الكمبيوتر أو الهاتف المحمول أو الجهاز اللوحي عند زيارة موقع ما. يهدف إلى جمع معلومات حول تصفحك وتقديم خدمات مخصصة لك.
            </p>

            <SectionTitle>الكوكيز المستخدمة على موقعنا</SectionTitle>
            <p>
                يستخدم موقعنا فقط ملفات تعريف الارتباط "التقنية" أو "الأساسية". هذه الملفات ضرورية لحسن سير عمل الموقع ولا يمكن تعطيلها في أنظمتنا. يتم تعيينها عادةً استجابةً للإجراءات التي تقوم بها والتي تشكل طلبًا للخدمات، مثل اختيار لغتك أو الحفاظ على جلستك.
            </p>
            <p>
                لا تخزن هذه الملفات أي معلومات تعريف شخصية. نحن لا نستخدم ملفات تعريف الارتباط الإعلانية أو ملفات تعريف ارتباط قياس الجمهور (تحليلات) من جهات خارجية أو ملفات تعريف ارتباط الشبكات الاجتماعية.
            </p>

            <SectionTitle>إدارة الكوكيز</SectionTitle>
            <p>
                نظرًا لأننا نستخدم ملفات تعريف الارتباط الأساسية فقط، فإننا لا نقدم آلية للموافقة. ومع ذلك، يمكنك تكوين متصفحك لحظر هذه الملفات أو تنبيهك بشأنها، ولكن قد لا تعمل بعض أجزاء الموقع بعد ذلك.
            </p>
        </article>
    );
  }

  if (language === 'en') {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Cookie Policy</h1>
            
            {isClient ? <p>Last updated: {lastUpdated}</p> : <p>&nbsp;</p>}

            <SectionTitle>What is a cookie?</SectionTitle>
            <p>
                A cookie is a small text file placed on your computer, mobile, or tablet when you visit a site. Its purpose is to collect information about your browsing and to provide you with personalized services.
            </p>

            <SectionTitle>Cookies Used on Our Site</SectionTitle>
            <p>
                Our site only uses so-called "technical" or "essential" cookies. These cookies are indispensable for the proper functioning of the site and cannot be deactivated in our systems. They are usually set in response to actions you have taken that constitute a request for services, such as choosing your language or maintaining your session.
            </p>
            <p>
                These cookies do not store any personally identifiable information. We do not use advertising cookies, third-party audience measurement (analytics) cookies, or social network cookies.
            </p>

            <SectionTitle>Managing Cookies</SectionTitle>
            <p>
                Since we only use essential cookies, we do not offer a consent mechanism. However, you can configure your browser to block or be alerted to the use of these cookies, but some parts of the site may then not work.
            </p>
        </article>
    );
  }

  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Politique de Cookies</h1>
        
        {isClient ? <p>Dernière mise à jour : {lastUpdated}</p> : <p>&nbsp;</p>}

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
