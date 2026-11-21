import Home from '@/components/views/home';
import {pageHead} from '@/lib/store/data';

export const metadata = pageHead('Avtomobil parvarishi va detailing', 'iCan Detail — premium avtokimyo, polirovka uskunalari va avtomobil parvarishi mahsulotlari.');
export default function Page() {
    return <Home/>;
}
