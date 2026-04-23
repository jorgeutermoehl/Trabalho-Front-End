import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealTag = 'div' | 'span' | 'li' | 'section' | 'article';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealTag;
};

export default function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const transition = {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const initial = { opacity: 0, y };
  const animate = { opacity: 1, y: 0 };
  const viewport = { once: true, margin: '-10% 0px' } as const;

  switch (as) {
    case 'span':
      return (
        <motion.span className={className} initial={initial} whileInView={animate} viewport={viewport} transition={transition}>
          {children}
        </motion.span>
      );
    case 'li':
      return (
        <motion.li className={className} initial={initial} whileInView={animate} viewport={viewport} transition={transition}>
          {children}
        </motion.li>
      );
    case 'section':
      return (
        <motion.section className={className} initial={initial} whileInView={animate} viewport={viewport} transition={transition}>
          {children}
        </motion.section>
      );
    case 'article':
      return (
        <motion.article className={className} initial={initial} whileInView={animate} viewport={viewport} transition={transition}>
          {children}
        </motion.article>
      );
    default:
      return (
        <motion.div className={className} initial={initial} whileInView={animate} viewport={viewport} transition={transition}>
          {children}
        </motion.div>
      );
  }
}
