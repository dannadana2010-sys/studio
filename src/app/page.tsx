import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';

const services = [
  {
    title: 'Private Chauffeur',
    description: 'Travel in ultimate comfort and style with our professional chauffeurs.',
    link: '/private-chauffeur',
    image: PlaceHolderImages.find(img => img.id === 'chauffeur-service')
  },
  {
    title: 'Luxury Car Rental',
    description: 'Choose from our exclusive fleet of high-end vehicles.',
    link: '/car-rental',
    image: PlaceHolderImages.find(img => img.id === 'car-rental-fleet')
  },
  {
    title: 'Exclusive Concierge',
    description: 'Personalized services to meet your every need and desire.',
    link: '/concierge',
    image: PlaceHolderImages.find(img => img.id === 'concierge-desk')
  },
];

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Safety & Discretion',
    description: 'Our top priority is your safety and privacy. All our drivers are vetted professionals.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: '24/7 Availability',
    description: 'We are at your service around the clock, ready to meet your schedule.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Unmatched Quality',
    description: 'Experience the pinnacle of luxury with our pristine vehicles and exceptional service.'
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
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Experience Unmatched Luxury
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Victoire Luxury Services offers premier chauffeur, car rental, and concierge services in Paris, Monaco, and beyond.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">Book Your Experience <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Our Exclusive Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tailored to provide the ultimate in luxury and convenience.
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
                   <div className="relative h-56 w-full">
                      <Image
                        src={service.image.imageUrl}
                        alt={service.image.description}
                        fill
                        className="object-cover"
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
                        <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">The Victoire Advantage</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Commitment to excellence in every detail of your journey.
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
