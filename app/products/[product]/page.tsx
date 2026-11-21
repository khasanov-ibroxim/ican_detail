import { notFound } from 'next/navigation';
import Product from '@/components/views/product';
import { products, pageHead } from '@/lib/store/data';
type Props = { params: Promise<{ product: string }> };
export function generateStaticParams() { return products.map((p) => ({ product: p.id })); }
export async function generateMetadata({ params }: Props) { const { product } = await params; const p = products.find((x) => x.id === product); return pageHead(p?.name ?? 'Mahsulot', p?.description.uz ?? 'iCan Detail mahsulot haqida ma’lumot.'); }
export default async function Page({ params }: Props) { const { product } = await params; const p = products.find((x) => x.id === product); if (!p) notFound(); return <Product p={p} />; }
