"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8"
  >
    <path d="M.052 24l1.68-6.162A11.91 11.91 0 0112.052.5a11.9 11.9 0 0111.9 11.9c0 6.57-5.33 11.9-11.9 11.9a11.89 11.89 0 01-5.61-1.46L.052 24zm4.84-2.825l.36.215a9.88 9.88 0 005.01 1.455h.005c5.45 0 9.89-4.44 9.89-9.89s-4.44-9.89-9.89-9.89-9.89 4.44-9.89 9.89a9.88 9.88 0 002.04 5.92l.24.4-.15.35-1.15 4.18 4.28-1.13zm6.18-3.555c-.29-.145-1.72-.85-1.98-.95-.26-.1-.45-.145-.64.145-.19.29-.75.95-.92 1.14-.17.19-.34.215-.63.07-.3-.14-1.25-.46-2.38-1.46-1.13-.99-1.89-2.22-2.1-2.59s-.22-.58-.07-.73c.14-.14.3-.39.45-.58.15-.19.2-.29.29-.48s.05-.36-.02-.51c-.07-.14-.64-1.54-.87-2.1-.23-.56-.47-.48-.64-.48-.17 0-.36-.02-.55-.02s-.5.07-.75.36c-.25.29-.98 1.09-.98 2.65s1 3.08 1.14 3.3c.14.22 1.98 3.02 4.8 4.25s2.82.8 3.84.77c1.02-.03 1.72-.7 1.96-1.36.24-.66.24-1.22.17-1.36-.07-.15-.26-.24-.55-.39z" />
  </svg>
);

const MotionLink = motion(Link);

export function FloatingWhatsApp() {
  return (
    <MotionLink
        href="https://wa.me/33668827498"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsappIcon />
      </MotionLink>
  );
}
