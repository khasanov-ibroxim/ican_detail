import Brands from '@/components/views/brands';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Premium brendlar','SONAX, Meguiar’s, RUPES va boshqa yetakchi detailing brendlari.');
export default function Page() { return <Brands />; }
