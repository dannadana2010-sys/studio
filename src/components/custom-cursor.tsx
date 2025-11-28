"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || window.getComputedStyle(target).cursor === 'pointer') {
            setIsHovering(true);
        }
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || window.getComputedStyle(target).cursor === 'pointer') {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isClient) {
    return null;
  }
  
  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
        <motion.div
            className="rounded-full transition-transform"
            animate={{
                width: isHovering ? 40 : 8,
                height: isHovering ? 40 : 8,
                x: isHovering ? -20 : -4,
                y: isHovering ? -20 : -4,
                border: isHovering ? '2px solid #D4AF37' : '0px solid #D4AF37',
                backgroundColor: isHovering ? 'transparent' : '#D4AF37'
            }}
            style={{
                backgroundColor: '#D4AF37'
            }}
        />
    </motion.div>
  );
}
