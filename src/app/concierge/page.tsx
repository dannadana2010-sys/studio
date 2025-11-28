import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/motion-div';
import { Star, UtensilsCrossed, Ticket, Ship, Building2, Mountain, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const conciergeServices = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: 'Réservations Gastronomiques',
    description: 'Accédez aux tables les plus prisées et aux expériences culinaires uniques.'
  },
  {
    icon: <Ticket className="h-8 w-8 text-primary" />,
    title: 'Billetterie & Événements VIP',
    description: 'Concerts, opéras, événements sportifs, défilés de mode... Nous vous ouvrons les portes.'
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: 'Hébergement de Prestige',
    description: 'Réservation des plus beaux hôtels 5 étoiles, palaces, chalets privés et villas.'
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: 'Expériences Shopping',
    description: 'Accès à des personal shoppers, essayages privés et collections exclusives.'
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: 'Séjours d\'hiver à Courchevel',
    description: 'Organisation complète : hébergement, forfaits, moniteurs de ski privés, et plus encore.'
  },
  {
    icon: <Ship className="h-8 w-8 text-primary" />,
    title: 'Charters de Yachts & Jets Privés',
    description: 'Voyagez en toute exclusivité et confidentialité grâce à notre réseau de partenaires.'
  }
];

export default function ConciergePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'concierge-desk');
  const sideImage = PlaceHolderImages.find(img => img.id === 'monaco-harbor');

  if (!heroImage || !sideImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Conciergerie de Luxe"
        subtitle="Votre passeport pour un monde de privilèges et d'expériences inoubliables."
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Un Service Sans Limites</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Notre équipe de concierges est dédiée à anticiper et satisfaire vos moindres désirs. Avec une connaissance locale inégalée et un réseau mondial, nous transformons l'impossible en réalité. Confiez-nous les détails, savourez l'instant.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {conciergeServices.map(service => (
                  <MotionDiv 
                    key={service.title} 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mt-1">{service.icon}</div>
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
