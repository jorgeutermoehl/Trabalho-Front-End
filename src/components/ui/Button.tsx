import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

type SharedProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps & { as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsAnchor = SharedProps & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-bg hover:bg-primary-700 active:translate-y-px shadow-sm',
  secondary:
    'bg-surface text-ink border border-border hover:border-ink/20 hover:bg-hover',
  ghost: 'text-ink hover:bg-hover',
};

// Keys that don't belong on the final DOM element.
const sharedKeys = [
  'variant',
  'size',
  'icon',
  'iconPosition',
  'className',
  'children',
  'as',
] as const;

function pickRest<T extends object>(props: T): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (!sharedKeys.includes(key as (typeof sharedKeys)[number])) {
      out[key] = (props as Record<string, unknown>)[key];
    }
  }
  return out;
}

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const iconPosition = props.iconPosition ?? 'right';
  const classes = cn(base, sizes[size], variants[variant], props.className);

  const inner = (
    <>
      {props.icon && iconPosition === 'left' && (
        <span className="shrink-0" aria-hidden>
          {props.icon}
        </span>
      )}
      <span>{props.children}</span>
      {props.icon && iconPosition === 'right' && (
        <span className="shrink-0" aria-hidden>
          {props.icon}
        </span>
      )}
    </>
  );

  const rest = pickRest(props);

  if (props.as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
