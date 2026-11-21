import Categories from '@/components/views/categories';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Kategoriyalar','Avtomobil parvarishi uchun barcha mahsulot kategoriyalari.');
export default function Page() { return <Categories />; }
