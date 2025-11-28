import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chauffeur Privé / Private Chauffeur Service – Victoire Luxury",
  description: "Transferts aéroports, mise à disposition et ski. Airport transfers & VIP disposal in Paris, Geneva, Alps.",
};

export default function PrivateChauffeurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
