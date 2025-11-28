"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <MotionDiv 
          className="relative z-10 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {translations.home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            {translations.home.hero.subtitle}
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">{translations.home.hero.cta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </MotionDiv>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.home.services.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {translations.home.services.subtitle}
            </p>
          </MotionDiv>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.home.services.cards.map((service, index) => {
              const image = PlaceHolderImages.find(img => img.id === service.image);
              return image && (
              <MotionDiv 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                   <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   </div>
                  <CardHeader className="mt-auto z-10 p-4 pt-0">
                    <CardTitle className="font-headline text-2xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col p-4 pt-0">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button asChild variant="link" className="mt-auto p-0 justify-start text-primary h-auto">
                        <Link href={service.link}>{translations.common.learnMore} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            )})}
          </div>
        </div>
      </section>

      {/* Nos Destinations Section */}
      <section className="py-20 sm:py-32 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.home.destinations.title}</h2>
          </MotionDiv>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {translations.home.destinations.places.map((destination, index) => (
              <MotionDiv
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <MapPin className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-headline text-2xl text-white font-semibold">{destination.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{destination.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-32 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.home.advantage.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {translations.home.advantage.subtitle}
            </p>
          </MotionDiv>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {translations.home.advantage.features.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-background mx-auto">
                  {index === 0 && <ShieldCheck className="h-10 w-10 text-primary" />}
                  {index === 1 && <Clock className="h-10 w-10 text-primary" />}
                  {index === 2 && <Award className="h-10 w-10 text-primary" />}
                </div>
                <h3 className="mt-6 font-headline text-xl text-white font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
