"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { MotionDiv } from '@/components/motion-div';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Gem, Users } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export default function AboutPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'paris-street');
  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title={translations.about.hero.title}
        subtitle={translations.about.hero.subtitle}
      />
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative aspect-square w-full max-w-md mx-auto">
                    <Image
                        src={PlaceHolderImages.find(img => img.id === 'about-us-team')?.imageUrl || ''}
                        alt={PlaceHolderImages.find(img => img.id === 'about-us-team')?.description || ''}
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                        data-ai-hint={PlaceHolderImages.find(img => img.id === 'about-us-team')?.imageHint}
                    />
                </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.about.story.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translations.about.story.p1}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {translations.about.story.p2}
              </p>
            </MotionDiv>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Target className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">{translations.about.values.mission.title}</h3>
                <p className="mt-2 text-muted-foreground">{translations.about.values.mission.text}</p>
            </MotionDiv>
             <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Gem className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">{translations.about.values.values.title}</h3>
                <p className="mt-2 text-muted-foreground">{translations.about.values.values.text}</p>
            </MotionDiv>
             <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">{translations.about.values.team.title}</h3>
                <p className="mt-2 text-muted-foreground">{translations.about.values.team.text}</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">{translations.about.management.title}</h2>
            </MotionDiv>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {translations.about.management.members.map((member, index) => (
                    <MotionDiv 
                        key={member.name}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Avatar className="h-32 w-32 mx-auto border-4 border-primary">
                            <AvatarImage src={`https://picsum.photos/seed/${member.name.split(' ')[0]}/200/200`} alt={member.name} data-ai-hint={member.hint} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 font-headline text-xl text-white font-semibold">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                    </MotionDiv>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}

    