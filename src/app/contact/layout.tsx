import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Booking – Victoire Luxury Services",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
