
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-950 min-h-screen text-gray-300 font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="absolute top-8 left-8">
            <Button asChild variant="ghost">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                </Link>
            </Button>
        </div>
        <div className="max-w-4xl mx-auto">
            {children}
        </div>
      </div>
    </div>
  );
}
