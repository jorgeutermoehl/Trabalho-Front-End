import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
  as?: 'section' | 'div';
};

export default function Section({
  id,
  children,
  className,
  muted = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'relative py-24 sm:py-28 lg:py-32',
        muted && 'bg-bg-alt',
        className,
      )}
      aria-labelledby={`${id}-title`}
    >
      <div className="container max-w-6xl">{children}</div>
    </Tag>
  );
}
