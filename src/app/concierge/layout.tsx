import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conciergerie de Luxe / VIP Concierge – Victoire Luxury",
};

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
