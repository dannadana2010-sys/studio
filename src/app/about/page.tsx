import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { MotionDiv } from '@/components/motion-div';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Gem, Users } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Jean-Pierre Dubois",
    role: "Founder & CEO",
    avatar: "https://picsum.photos/seed/jp/200/200",
    hint: "man portrait"
  },
  {
    name: "Céline Moreau",
    role: "Head of Operations",
    avatar: "https://picsum.photos/seed/cm/200/200",
    hint: "woman portrait"
  },
  {
    name: "Louis Chevalier",
    role: "Lead Chauffeur",
    avatar: "https://picsum.photos/seed/lc/200/200",
    hint: "man portrait smiling"
  }
];

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'paris-street');
  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="About Victoire"
        subtitle="Crafting extraordinary journeys since 2010."
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
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded on the principles of excellence, reliability, and unparalleled customer service, Victoire Luxury Services SAS has grown from a single sedan to a premier luxury service provider in Europe. Our passion is to deliver more than just a ride; we deliver an experience.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                From the bustling streets of Paris to the serene coasts of the French Riviera, our team is dedicated to ensuring your journey is as flawless and memorable as the destination itself.
              </p>
            </MotionDiv>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Target className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">To provide the most luxurious, reliable, and discreet transport and concierge services, exceeding our clients' expectations every time.</p>
            </MotionDiv>
             <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Gem className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">Our Values</h3>
                <p className="mt-2 text-muted-foreground">Excellence, Integrity, Punctuality, and a deep commitment to our clients' satisfaction and privacy.</p>
            </MotionDiv>
             <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-semibold text-white">Our Team</h3>
                <p className="mt-2 text-muted-foreground">A curated team of experienced professionals dedicated to delivering a world-class service experience.</p>
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
                <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Meet The Leadership</h2>
            </MotionDiv>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <MotionDiv 
                        key={member.name}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Avatar className="h-32 w-32 mx-auto border-4 border-primary">
                            <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
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
