
"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-div';
import { CheckCircle, Plane, Briefcase, Mountain, Star } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const icons: { [key: string]: React.ReactNode } = {
  transfers: <Plane className="h-8 w-8 text-primary" />,
  business: <Briefcase className="h-8 w-8 text-primary" />,
  ski: <Mountain className="h-8 w-8 text-primary" />,
  events: <Star className="h-8 w-8 text-primary" />,
};

export default function PrivateChauffeurPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'mercedes-s-class-1');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title={translations.privateChauffeur.hero.title}
        subtitle={translations.privateChauffeur.hero.subtitle}
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.privateChauffeur.bespokeServices.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {translations.privateChauffeur.bespokeServices.subtitle}
            </p>
          </MotionDiv>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {translations.privateChauffeur.bespokeServices.features.map((feature, index) => (
                <MotionDiv
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full bg-accent border-border hover:border-primary transition-colors duration-300 p-6 flex items-start gap-6 text-start">
                        <div className="flex-shrink-0 mt-1">{icons[feature.icon]}</div>
                        <div>
                            <h3 className="font-headline text-xl text-white font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    </Card>
                </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative aspect-video w-full">
                    <Image
                        src={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.imageUrl || ''}
                        alt={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.description || ''}
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                        data-ai-hint={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.imageHint}
                    />
                </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-start"
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.privateChauffeur.commitment.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translations.privateChauffeur.commitment.subtitle}
              </p>
               <ul className="mt-8 space-y-4">
                {translations.privateChauffeur.commitment.pillars.map(pillar => (
                  <li key={pillar} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{pillar}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
