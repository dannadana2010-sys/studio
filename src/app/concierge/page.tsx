import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/motion-div';
import { Star, UtensilsCrossed, Ticket, Ship, Building2 } from 'lucide-react';
import Image from 'next/image';

const conciergeServices = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: 'Restaurant Reservations',
    description: 'Access to the most exclusive and sought-after tables in the city.'
  },
  {
    icon: <Ticket className="h-8 w-8 text-primary" />,
    title: 'Event & Experience Booking',
    description: 'From sold-out concerts to private gallery viewings, we secure your access.'
  },
  {
    icon: <Ship className="h-8 w-8 text-primary" />,
    title: 'Yacht & Jet Charters',
    description: 'Arrange private travel by sea or air with our extensive network of partners.'
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: 'Luxury Accommodations',
    description: 'Booking the finest hotels, villas, and private residences for your stay.'
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Personalized Shopping',
    description: 'Private appointments at luxury boutiques and access to personal shoppers.'
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
        title="Exclusive Concierge Services"
        subtitle="Your key to unlocking a world of luxury and convenience."
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
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Service Beyond Expectation</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our concierge team is dedicated to fulfilling your every request, no matter how big or small. With unparalleled local knowledge and a global network, we turn your desires into reality. Let us handle the details, so you can enjoy the experience.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {conciergeServices.map(service => (
                  <div key={service.title} className="flex gap-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
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
