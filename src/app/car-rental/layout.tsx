import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Location de Voitures de Luxe / Luxury Car Rental – Victoire Luxury",
  description: "Louez Mercedes, Ferrari, Range Rover. Rent luxury cars in Paris & Monaco.",
};

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
