import { CatalogView } from '@/components/store/catalog-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Mahsulot qidirish','Mahsulot, kategoriya yoki brend bo‘yicha iCan Detail katalogini qidiring.');
export default function Page() { return <CatalogView searchMode />; }
