import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSection } from '@/components/hero-section';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'monaco-harbor');
  if (!heroImage) return null;

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Contact Us"
        subtitle="We're here to assist you 24/7. Reach out to plan your next journey."
      />

      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold">Get In Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Please fill out the form, and a member of our team will get back to you shortly. For immediate assistance, please use the contact details provided.
              </p>
              <div className="mt-12 space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-accent p-3 rounded-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:contact@victoire.com" className="text-muted-foreground hover:text-primary transition-colors">contact@victoire.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-accent p-3 rounded-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-white">Phone</h3>
                    <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition-colors">+33 1 23 45 67 89</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-accent p-3 rounded-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-white">Main Office</h3>
                    <p className="text-muted-foreground">10 Av. des Champs-Élysées, 75008 Paris, France</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
