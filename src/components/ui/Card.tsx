import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export default function Card({
  children,
  className,
  interactive = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'card-base p-6 sm:p-8',
        interactive &&
          'hover:shadow-card-hover hover:-translate-y-0.5 hover:border-ink/10',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
