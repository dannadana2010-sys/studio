import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/motion-div';
import { Gauge, Users, Briefcase, Snowflake } from 'lucide-react';

const rentalCategories = [
  {
    category: 'Berlines de Prestige',
    description: 'Confort et raffinement pour vos déplacements.',
    cars: [
      {
        name: 'Mercedes-Benz Classe S',
        image: PlaceHolderImages.find(img => img.id === 'mercedes-s-class-1'),
      },
      {
        name: 'BMW Série 7',
        image: {
            id: 'bmw-7-series',
            imageUrl: 'https://picsum.photos/seed/bmw7/800/600',
            description: 'BMW 7 Series front view',
            imageHint: 'BMW 7 series'
        },
      }
    ]
  },
  {
    category: 'SUV & 4x4',
    description: 'Espace et polyvalence, des villes aux sommets.',
    cars: [
      {
        name: 'Range Rover Vogue',
        image: PlaceHolderImages.find(img => img.id === 'range-rover-1'),
      },
       {
        name: 'BMW X7',
        image: {
            id: 'bmw-x7',
            imageUrl: 'https://picsum.photos/seed/bmwx7/800/600',
            description: 'A dark BMW X7 SUV.',
            imageHint: 'BMW X7'
        },
      }
    ]
  },
  {
    category: 'Supercars',
    description: 'Vivez une expérience de conduite exaltante.',
    cars: [
       {
        name: 'Lamborghini Huracan',
         image: {
            id: 'lambo-1',
            imageUrl: 'https://picsum.photos/seed/lambo1/800/600',
            description: 'A yellow Lamborghini Huracan.',
            imageHint: 'Lamborghini Huracan'
        },
      },
       {
        name: 'Ferrari 296 GTB',
         image: {
            id: 'ferrari-1',
            imageUrl: 'https://picsum.photos/seed/ferrari1/800/600',
            description: 'A red Ferrari 296 GTB sports car.',
            imageHint: 'Ferrari 296'
        },
      }
    ]
  }
];

export default function CarRentalPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'car-rental-fleet');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Location de Voitures de Luxe"
        subtitle="Une flotte exclusive pour une expérience de conduite inoubliable."
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Notre Flotte</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Sélectionnez parmi notre collection de superbes automobiles.
            </p>
             <p className="mt-2 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Snowflake className="h-4 w-4 text-primary" /> Options pneus neige pour Courchevel et Genève disponibles.
            </p>
          </MotionDiv>
          
          <div className="mt-16 space-y-20">
            {rentalCategories.map(category => (
              <div key={category.category}>
                <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="font-headline text-2xl md:text-3xl text-white font-bold">{category.category}</h3>
                    <p className="mt-2 text-muted-foreground">{category.description}</p>
                </MotionDiv>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.cars.map((car, index) => car.image && (
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
                            src={car.image.imageUrl}
                            alt={car.image.description}
                            fill
                            className="object-cover rounded-t-lg"
                            data-ai-hint={car.image.imageHint}
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl text-white">{car.name}</CardTitle>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild className="w-full">
                            <Link href="/contact">Demander ce véhicule</Link>
                            </Button>
                        </CardFooter>
                        </Card>
                    </MotionDiv>
                    ))}
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
            <h3 className="font-headline text-2xl text-white font-bold">Un Service Clé en Main</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Nous simplifions votre expérience de location avec une livraison à votre hôtel, aéroport ou chalet. Une assistance est disponible 24/7 pour vous assurer une tranquillité d'esprit totale.
            </p>
             <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Réserver votre véhicule</Link>
            </Button>
          </MotionDiv>

        </div>
      </section>
    </div>
  );
}
