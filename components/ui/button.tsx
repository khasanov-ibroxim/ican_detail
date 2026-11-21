'use client';
import { cloneElement, forwardRef, isValidElement, type ButtonHTMLAttributes, type ReactElement } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

const variants = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  hero: 'bg-hero-button text-hero-button-ink shadow-sm hover:bg-hero-button-hover',
  glass: 'border border-input bg-secondary text-foreground hover:bg-accent',
  detail: 'border border-primary/20 bg-detail-button text-primary hover:bg-detail-button/70',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizes = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 px-3 text-xs',
  lg: 'h-10 px-8',
  icon: 'h-9 w-9',
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(' ');
    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string }>;
      return cloneElement(child, { ...props, className: [classes, child.props.className].filter(Boolean).join(' ') } as never);
    }
    return <button ref={ref} className={classes} {...props}>{children}</button>;
  },
);
Button.displayName = 'Button';
