"use client";

import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/context/language-context';

const WhatsappIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.052 24l1.68-6.162A11.91 11.91 0 0112.052.5a11.9 11.9 0 0111.9 11.9c0 6.57-5.33 11.9-11.9 11.9a11.89 11.89 0 01-5.61-1.46L.052 24zm4.84-2.825l.36.215a9.88 9.88 0 005.01 1.455h.005c5.45 0 9.89-4.44 9.89-9.89s-4.44-9.89-9.89-9.89-9.89 4.44-9.89 9.89a9.88 9.88 0 002.04 5.92l.24.4-.15.35-1.15 4.18 4.28-1.13zm6.18-3.555c-.29-.145-1.72-.85-1.98-.95-.26-.1-.45-.145-.64.145-.19.29-.75.95-.92 1.14-.17.19-.34.215-.63.07-.3-.14-1.25-.46-2.38-1.46-1.13-.99-1.89-2.22-2.1-2.59s-.22-.58-.07-.73c.14-.14.3-.39.45-.58.15-.19.2-.29.29-.48s.05-.36-.02-.51c-.07-.14-.64-1.54-.87-2.1-.23-.56-.47-.48-.64-.48-.17 0-.36-.02-.55-.02s-.5.07-.75.36c-.25.29-.98 1.09-.98 2.65s1 3.08 1.14 3.3c.14.22 1.98 3.02 4.8 4.25s2.82.8 3.84.77c1.02-.03 1.72-.7 1.96-1.36.24-.66.24-1.22.17-1.36-.07-.15-.26-.24-.55-.39z" />
  </svg>
);

export default function ContactPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'monaco-harbor');
  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title={translations.contact.hero.title}
        subtitle={translations.contact.hero.subtitle}
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.contact.getInTouch.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translations.contact.getInTouch.subtitle}
              </p>
              <div className="mt-12 space-y-6">
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white">
                  <Link href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon />
                    {translations.contact.getInTouch.whatsapp}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href="tel:+33123456789">
                    <Phone className="h-5 w-5" />
                    {translations.contact.getInTouch.call}
                  </a>
                </Button>
              </div>

              <div className="mt-12">
                <h3 className="font-headline text-xl text-white font-semibold">{translations.contact.serviceAreas.title}</h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  {translations.contact.serviceAreas.cities.map(city => (
                    <div key={city} className="flex items-center gap-2 bg-accent p-3 rounded-md">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-white">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.contact.faq.title}</h2>
            </MotionDiv>
            <MotionDiv
                 className="mt-12 max-w-3xl mx-auto"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Accordion type="single" collapsible className="w-full">
                    {translations.contact.faq.items.map((item, index) => (
                         <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-white font-headline text-lg hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </MotionDiv>
        </div>
      </section>
    </div>
  );
}
