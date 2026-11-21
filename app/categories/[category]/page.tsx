import { notFound } from 'next/navigation';
import { CatalogView } from '@/components/store/catalog-view';
import { categories, pageHead } from '@/lib/store/data';
type Props = { params: Promise<{ category: string }> };
export function generateStaticParams() { return categories.map((c) => ({ category: c.slug })); }
export async function generateMetadata({ params }: Props) { const { category } = await params; const c = categories.find((x) => x.slug === category); return pageHead(c?.name.uz ?? 'Kategoriya', c?.description.uz ?? 'iCan Detail mahsulot kategoriyasi.'); }
export default async function Page({ params }: Props) { const { category } = await params; const c = categories.find((x) => x.slug === category); if (!c) notFound(); return <CatalogView key={c.slug} category={c.slug} />; }
