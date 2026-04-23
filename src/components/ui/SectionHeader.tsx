import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={`${id}-title`}
        className="mt-4 text-display-md font-medium text-balance"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base text-muted leading-relaxed sm:text-lg">
          {intro}
        </p>
      )}
    </header>
  );
}
