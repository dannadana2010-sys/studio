import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-div';
import { CheckCircle, Plane, Briefcase, Mountain, Star } from 'lucide-react';

const serviceFeatures = [
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Transferts aéroports & gares",
    description: "Paris, Nice, Genève, Chambéry. Accueil personnalisé avec pancarte nominative."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Déplacements Business & Mise à disposition",
    description: "Optimisez votre temps avec un service flexible pour vos rendez-vous et roadshows."
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: "Transferts Stations de Ski",
    description: "Rejoignez Courchevel, Megève, et les Alpes en toute sécurité avec nos véhicules équipés."
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Transport Événementiel",
    description: "Service dédié pour le Festival de Cannes, Fashion Week, et autres événements privés."
  }
];

const qualityPillars = [
  "Chauffeurs professionnels, bilingues et formés à la discrétion.",
  "Véhicules Mercedes récents, inspectés et entretenus pour un confort maximal.",
  "Service client disponible pour toute demande de modification ou d'itinéraire.",
  "Confidentialité et sécurité garanties à chaque trajet."
];


export default function PrivateChauffeurPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'mercedes-s-class-1');

  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Chauffeur Privé de Luxe"
        subtitle="Voyagez avec élégance, ponctualité et une discrétion absolue."
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
            <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Nos Prestations Sur-Mesure</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Un service adapté à chaque besoin, pour une expérience de transport inégalée.
            </p>
          </MotionDiv>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, index) => (
                <MotionDiv
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full bg-accent border-border hover:border-primary transition-colors duration-300 p-6 flex items-start gap-6">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                            <h3 className="font-headline text-xl text-white font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    </Card>
                </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative aspect-video w-full">
                    <Image
                        src={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.imageUrl || ''}
                        alt={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.description || ''}
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                        data-ai-hint={PlaceHolderImages.find(img => img.id === 'chauffeur-service')?.imageHint}
                    />
                </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">L'Engagement de l'Excellence</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Notre réputation repose sur la qualité de nos chauffeurs et l'état irréprochable de notre flotte.
              </p>
               <ul className="mt-8 space-y-4">
                {qualityPillars.map(pillar => (
                  <li key={pillar} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{pillar}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
