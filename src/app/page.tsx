import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';

const services = [
  {
    title: 'Chauffeur Privé',
    description: 'Transferts aéroports, mises à disposition et déplacements VIP.',
    link: '/private-chauffeur',
    image: PlaceHolderImages.find(img => img.id === 'chauffeur-service')
  },
  {
    title: 'Location de Luxe',
    description: 'Berlines, SUV et Supercars pour vos séjours.',
    link: '/car-rental',
    image: PlaceHolderImages.find(img => img.id === 'car-rental-fleet')
  },
  {
    title: 'Conciergerie',
    description: 'Réservations hôtels 5★, restaurants et événements exclusifs.',
    link: '/concierge',
    image: PlaceHolderImages.find(img => img.id === 'concierge-desk')
  },
];

const destinations = [
  {
    name: 'Paris',
    description: 'Élégance & Services Premium'
  },
  {
    name: 'Cannes',
    description: 'Glamour & Événements'
  },
  {
    name: 'Monaco',
    description: 'Luxe & Exclusivité'
  },
  {
    name: 'Genève',
    description: 'Affaires & Discrétion'
  },
  {
    name: 'Courchevel',
    description: 'Sommets & Prestige'
  }
];

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Sécurité & Discrétion',
    description: 'Votre sécurité et confidentialité sont notre priorité. Nos chauffeurs sont des professionnels agréés.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Disponibilité 24/7',
    description: 'Nous sommes à votre service 24h/24, 7j/7, pour répondre à tous vos besoins.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Qualité Inégalée',
    description: 'Découvrez le summum du luxe avec nos véhicules impeccables et un service exceptionnel.'
  }
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

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
            Chauffeur Privé de Luxe à Paris, Cannes, Monaco, Genève & Courchevel
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Bienvenue chez Victoire Luxury service (VLS), référence absolue du transport privé de luxe. Une expérience raffinée, élégante et entièrement personnalisée.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">Réserver un Chauffeur <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Nos Services Exclusifs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Conçus pour offrir le summum du luxe et de la commodité.
            </p>
          </MotionDiv>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => service.image && (
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
                        src={service.image.imageUrl}
                        alt={service.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={service.image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   </div>
                  <CardHeader className="mt-auto z-10 p-4 pt-0">
                    <CardTitle className="font-headline text-2xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col p-4 pt-0">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button asChild variant="link" className="mt-auto p-0 justify-start text-primary h-auto">
                        <Link href={service.link}>En savoir plus <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Nos Destinations d'Excellence</h2>
          </MotionDiv>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {destinations.map((destination, index) => (
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">L'Excellence VLS</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              L'engagement de l'excellence dans chaque détail de votre voyage.
            </p>
          </MotionDiv>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-background mx-auto">
                  {feature.icon}
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
