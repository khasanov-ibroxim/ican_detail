'use client';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  params?: Record<string, string>;
  activeOptions?: { exact?: boolean };
  children?: ReactNode;
};

/** Next.js Link with "/products/$product" style paths and data-status="active". */
export function Link({ to, params, activeOptions, ...rest }: Props) {
  const pathname = usePathname();
  const href = to.replace(/\$(\w+)/g, (_, key: string) => encodeURIComponent(params?.[key] ?? ''));
  const active = activeOptions?.exact ? pathname === href : pathname === href || pathname.startsWith(href + '/');
  return <NextLink href={href} data-status={active ? 'active' : undefined} {...rest} />;
}
