"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/motion-div';
import { Snowflake } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function CarRentalPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'car-rental-fleet');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title={translations.carRental.hero.title}
        subtitle={translations.carRental.hero.subtitle}
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.carRental.fleet.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {translations.carRental.fleet.subtitle}
            </p>
             <p className="mt-2 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Snowflake className="h-4 w-4 text-primary" /> {translations.carRental.fleet.snowTires}
            </p>
          </MotionDiv>
          
          <div className="mt-16 space-y-20">
            {translations.carRental.fleet.categories.map(category => (
              <div key={category.title}>
                <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="font-headline text-2xl md:text-3xl text-white font-bold">{category.title}</h3>
                    <p className="mt-2 text-muted-foreground">{category.description}</p>
                </MotionDiv>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.cars.map((car, index) => {
                      const carImage = PlaceHolderImages.find(img => img.id === car.imageId) || {
                        imageUrl: `https://picsum.photos/seed/${car.imageId}/800/600`,
                        description: car.name,
                        imageHint: car.name
                      };
                      return (
                        <MotionDiv
                            key={car.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col bg-accent border-border hover:border-primary transition-colors duration-300">
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                src={carImage.imageUrl}
                                alt={carImage.description}
                                fill
                                className="object-cover rounded-t-lg"
                                data-ai-hint={carImage.imageHint}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl text-white">{car.name}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <Button asChild className="w-full">
                                <Link href="/contact">{translations.carRental.cta.request}</Link>
                                </Button>
                            </CardFooter>
                            </Card>
                        </MotionDiv>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

           <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <h3 className="font-headline text-2xl text-white font-bold">{translations.carRental.service.title}</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {translations.carRental.service.description}
            </p>
             <Button asChild size="lg" className="mt-8">
              <Link href="/contact">{translations.carRental.cta.book}</Link>
            </Button>
          </MotionDiv>

        </div>
      </section>
    </div>
  );
}
