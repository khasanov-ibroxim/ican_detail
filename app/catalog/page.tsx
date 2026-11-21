import { CatalogView } from '@/components/store/catalog-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Mahsulotlar katalogi','Avtokimyo, polirovka uskunalari, mikrofibra va professional detailing aksessuarlari.');
export default function Page() { return <CatalogView />; }
