import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/motion-div';
import { Gauge, Users, Briefcase } from 'lucide-react';

const rentalCars = [
  {
    name: 'Mercedes S-Class',
    specs: ['3.0L V6', '4 Seats', '2 Bags'],
    image: PlaceHolderImages.find(img => img.id === 'mercedes-s-class-1'),
  },
  {
    name: 'Range Rover Vogue',
    specs: ['4.4L V8', '5 Seats', '4 Bags'],
    image: PlaceHolderImages.find(img => img.id === 'range-rover-1'),
  },
  {
    name: 'Luxury Sedan Interior',
    specs: ['Luxury', 'Comfort', 'Style'],
    image: PlaceHolderImages.find(img => img.id === 'luxury-car-interior'),
  },
   {
    name: 'Mountain Explorer',
    specs: ['4x4', '5 Seats', '5 Bags'],
    image: PlaceHolderImages.find(img => img.id === 'snowy-mountains'),
  }
];

export default function CarRentalPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'car-rental-fleet');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Luxury Car Rental"
        subtitle="An exclusive fleet for an unforgettable driving experience."
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Our Fleet</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Select from our curated collection of the world's finest automobiles.
            </p>
          </MotionDiv>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalCars.map((car, index) => car.image && (
              <MotionDiv
                key={index}
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
                    <CardTitle className="font-headline text-2xl text-white">{car.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex justify-around text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" />
                        <span>{car.specs[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>{car.specs[1]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <span>{car.specs[2]}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
