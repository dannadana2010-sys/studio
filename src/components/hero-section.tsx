import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/motion-div';

interface HeroSectionProps {
  image: ImagePlaceholder;
  title: string;
  subtitle: string;
}

export function HeroSection({ image, title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={image.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <MotionDiv
        className="relative z-10 max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          {subtitle}
        </p>
      </MotionDiv>
    </section>
  );
}
