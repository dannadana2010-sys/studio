import Link from 'next/link';
import { Crown, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary mb-4">
              <Crown className="h-8 w-8" />
              <span className="font-headline text-2xl font-bold tracking-wider text-white">
                VICTOIRE
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Vivez une Expérience de Luxe Inégalée.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/private-chauffeur" className="text-sm text-muted-foreground hover:text-primary">Chauffeur Privé</Link></li>
              <li><Link href="/car-rental" className="text-sm text-muted-foreground hover:text-primary">Location de Voiture</Link></li>
              <li><Link href="/concierge" className="text-sm text-muted-foreground hover:text-primary">Conciergerie</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Société</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">À Propos</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Suivez-nous</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Victoire Luxury Services SAS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
