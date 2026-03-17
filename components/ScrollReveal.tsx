'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, x: 0 };
      case 'down':
        return { y: -30, x: 0 };
      case 'left':
        return { y: 0, x: 30 };
      case 'right':
        return { y: 0, x: -30 };
      case 'none':
        return { y: 0, x: 0 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
