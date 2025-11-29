
"use client";

import React from 'react';
import { useLanguage } from '@/context/language-context';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-headline text-white mt-8 mb-4">{children}</h2>
);

export default function CGVPage() {
  const [isClient, setIsClient] = React.useState(false);
  const { language } = useLanguage();
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const lastUpdated = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'ar-AE');
  
  if (language === 'ar') {
    return (
        <article className="prose prose-invert max-w-none text-right">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">شروط البيع العامة</h1>
            
            {isClient ? <p>آخر تحديث: {lastUpdated}</p> : <p>&nbsp;</p>}

            <SectionTitle>المادة 1: الموضوع</SectionTitle>
            <p>
                تنظم شروط البيع العامة هذه العلاقات التعاقدية بين شركة Victoire Luxury Services SAS وعملائها في إطار خدمات نقل الأشخاص بواسطة مركبة نقل مع سائق (VTC). إن تأكيد الحجز يعني قبول العميل دون تحفظ لهذه الشروط.
            </p>

            <SectionTitle>المادة 2: الحجز</SectionTitle>
            <p>
                يجب أن تكون كل خدمة موضوع حجز مسبق، يؤكده Victoire Luxury Services SAS عبر البريد الإلكتروني أو أي وسيلة كتابية أخرى. يجب على العميل تقديم جميع المعلومات اللازمة للتنفيذ السليم للخدمة (الاسم، وقت الاستقبال، مكان المغادرة والوصول، عدد الركاب، إلخ).
            </p>

            <SectionTitle>المادة 3: الأسعار والدفع</SectionTitle>
            <p>
                الأسعار مذكورة باليورو شاملة الضرائب. يمكن الدفع عن طريق التحويل المصرفي أو بطاقة الائتمان (عبر رابط دفع آمن أو على متن السيارة) قبل أو في بداية الخدمة. للعملاء الذين لديهم حساب، يمكن إصدار فاتورة شهرية وفقًا للشروط المتفق عليها.
            </p>

            <SectionTitle>المادة 4: الإلغاء</SectionTitle>
            <p>
                يكون الإلغاء من قبل العميل مجانيًا إذا تم قبل أكثر من 24 ساعة من بدء الخدمة.
                لأي إلغاء يتم قبل أقل من 24 ساعة من وقت الاستقبال، سيتم فرض 50% من المبلغ الإجمالي للخدمة.
                في حالة الإلغاء قبل أقل من 4 ساعات أو في حالة عدم حضور العميل ("no-show")، يكون المبلغ الكامل للخدمة مستحقًا.
            </p>
            
            <SectionTitle>المادة 5: التزامات العميل والركاب</SectionTitle>
            <p>
                يلتزم العميل والركاب باحترام قواعد السلامة والتشريعات المعمول بها. حزام الأمان إلزامي. يمنع منعا باتا التدخين (بما في ذلك السجائر الإلكترونية) واستهلاك الكحول أو المواد غير المشروعة على متن السيارة. أي ضرر يلحق بداخل السيارة من قبل العميل أو أحد الركاب سيتم تحميله على العميل.
            </p>

            <SectionTitle>المادة 6: المسؤولية</SectionTitle>
            <p>
                تلتزم Victoire Luxury Services SAS بتوفير سيارة وسائق مطابقين للوائح المعمول بها وبذل كل جهد ممكن لضمان سلامة وراحة ركابها. لا يمكن تحميلنا المسؤولية في حالة التأخير بسبب ظروف غير متوقعة (ازدحام مروري، حوادث، أحوال جوية قاسية، إلخ).
            </p>

        </article>
    );
  }

  if (language === 'en') {
    return (
        <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">General Terms of Sale</h1>
            
            {isClient ? <p>Last updated: {lastUpdated}</p> : <p>&nbsp;</p>}

            <SectionTitle>Article 1: Purpose</SectionTitle>
            <p>
                These General Terms of Sale (GTS) govern the contractual relations between the company Victoire Luxury Services SAS and its client within the framework of its passenger transport services by chauffeured vehicle (VTC). The validation of a reservation implies the client's unreserved acceptance of these GTS.
            </p>

            <SectionTitle>Article 2: Reservation</SectionTitle>
            <p>
                All services must be subject to a prior reservation, confirmed by Victoire Luxury Services SAS by e-mail or another written medium. The client must provide all information necessary for the proper execution of the service (name, pick-up time, departure and arrival location, number of passengers, etc.).
            </p>

            <SectionTitle>Article 3: Rates and Payment</SectionTitle>
            <p>
                Rates are indicated in euros including all taxes. Payment can be made by bank transfer, credit card (via a secure payment link or on board the vehicle) before or at the beginning of the service. For account customers, monthly invoicing is possible according to the agreed terms.
            </p>

            <SectionTitle>Article 4: Cancellation</SectionTitle>
            <p>
                Cancellation by the client is free of charge if it occurs more than 24 hours before the start of the service.
                For any cancellation made less than 24 hours before the pick-up time, 50% of the total amount of the service will be charged.
                For a cancellation less than 4 hours before or in the event of a client no-show, the full amount of the service is due.
            </p>
            
            <SectionTitle>Article 5: Obligations of the Client and Passengers</SectionTitle>
            <p>
                The client and passengers agree to respect safety rules and current legislation. Seat belts are mandatory. It is strictly forbidden to smoke (including electronic cigarettes), consume alcohol, or illicit substances on board the vehicle. Any damage caused to the interior of the vehicle by the client or a passenger will be charged to the client.
            </p>

            <SectionTitle>Article 6: Liability</SectionTitle>
            <p>
                Victoire Luxury Services SAS undertakes to provide a vehicle and a driver compliant with current regulations and to make every effort to ensure the safety and comfort of its passengers. Our liability cannot be engaged in case of delay due to unforeseen circumstances (traffic jams, accidents, extreme weather conditions, etc.).
            </p>

        </article>
      );
  }

  return (
    <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline text-primary text-center mb-12">Conditions Générales de Vente</h1>
        
        {isClient ? <p>Dernière mise à jour : {lastUpdated}</p> : <p>&nbsp;</p>}

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
