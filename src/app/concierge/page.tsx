
"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card } from '@/components/ui/card';
import { MotionDiv } from '@/components/motion-div';
import { UtensilsCrossed, Ticket, Ship, Building2, Mountain, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const icons: { [key: string]: React.ReactNode } = {
  gastronomy: <UtensilsCrossed className="h-8 w-8 text-primary" />,
  events: <Ticket className="h-8 w-8 text-primary" />,
  accommodation: <Building2 className="h-8 w-8 text-primary" />,
  shopping: <ShoppingBag className="h-8 w-8 text-primary" />,
  winterStays: <Mountain className="h-8 w-8 text-primary" />,
  charters: <Ship className="h-8 w-8 text-primary" />,
};

export default function ConciergePage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'concierge-desk');
  const sideImage = PlaceHolderImages.find(img => img.id === 'monaco-harbor');

  if (!heroImage || !sideImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title={translations.concierge.hero.title}
        subtitle={translations.concierge.hero.subtitle}
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-start"
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.concierge.limitless.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translations.concierge.limitless.description}
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {translations.concierge.limitless.services.map(service => (
                  <MotionDiv 
                    key={service.title} 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mt-1">{icons[service.icon]}</div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden border-primary border-2 shadow-2xl shadow-primary/20">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={sideImage.imageUrl}
                    alt={sideImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={sideImage.imageHint}
                  />
                </div>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
