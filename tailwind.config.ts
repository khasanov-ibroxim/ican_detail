import type { Config } from 'tailwindcss';

const c = (name: string) => ({ opacityValue }: { opacityValue?: string }) =>
  opacityValue === undefined
    ? `var(--${name})`
    : `color-mix(in oklch, var(--${name}) calc(${opacityValue} * 100%), transparent)`;

const names = ['background','foreground','card','card-foreground','primary','primary-foreground','secondary','secondary-foreground','muted','muted-foreground','accent','accent-foreground','destructive','destructive-foreground','border','input','ring','ink','surface','surface-muted','brand-deep','hero-button','hero-button-ink','hero-button-hover'];

const colors: Record<string, ReturnType<typeof c>> = Object.fromEntries(names.map((n) => [n, c(n)]));
colors['detail-button'] = c('content-accent');

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: colors as never,
      fontFamily: { sans: ['Manrope', 'sans-serif'] },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
    },
  },
  plugins: [],
};
export default config;
