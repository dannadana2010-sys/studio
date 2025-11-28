import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-div';
import { CheckCircle } from 'lucide-react';

const cars = [
  PlaceHolderImages.find(img => img.id === 'mercedes-s-class-1'),
  PlaceHolderImages.find(img => img.id === 'range-rover-1'),
  PlaceHolderImages.find(img => img.id === 'luxury-car-interior'),
];

const serviceFeatures = [
  "Professional, multilingual chauffeurs",
  "Punctuality and reliability guaranteed",
  "Discretion and privacy assured",
  "Airport transfers, city tours, and corporate travel",
  "Complimentary water and Wi-Fi",
  "Impeccably maintained luxury vehicles"
];

export default function PrivateChauffeurPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'chauffeur-service');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Private Chauffeur Service"
        subtitle="Travel in ultimate comfort, style, and safety."
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">The Art of Travel</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our private chauffeur service redefines luxury travel. Whether you're in Paris for business, Monaco for pleasure, or Courchevel for the slopes, our commitment is to provide a seamless, first-class experience from start to finish. Our chauffeurs are more than drivers; they are personal assistants on the road.
              </p>
              <ul className="mt-8 space-y-4">
                {serviceFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
            <MotionDiv
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {cars.map((car, index) => car && (
                <Card key={index} className="overflow-hidden border-border group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={car.imageUrl}
                      alt={car.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={car.imageHint}
                    />
                  </div>
                </Card>
              ))}
              <Card className="overflow-hidden border-border group col-span-2">
                 <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={PlaceHolderImages.find(img => img.id === 'paris-street')?.imageUrl || ''}
                      alt={PlaceHolderImages.find(img => img.id === 'paris-street')?.description || ''}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={PlaceHolderImages.find(img => img.id === 'paris-street')?.imageHint}
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
