import { notFound } from 'next/navigation';
import { CatalogView } from '@/components/store/catalog-view';
import { brands, brandSlug, pageHead } from '@/lib/store/data';
type Props = { params: Promise<{ brand: string }> };
export function generateStaticParams() { return brands.map((b) => ({ brand: brandSlug(b) })); }
export async function generateMetadata({ params }: Props) { const { brand } = await params; const b = brands.find((x) => brandSlug(x) === brand) ?? 'Brend'; return pageHead(b, `${b} brendi mahsulotlari iCan Detail katalogida.`); }
export default async function Page({ params }: Props) { const { brand } = await params; const b = brands.find((x) => brandSlug(x) === brand); if (!b) notFound(); return <CatalogView key={b} brand={b} />; }
