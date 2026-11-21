import { InfoView } from '@/components/store/info-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Biz haqimizda','iCan Detail maqsadi, qadriyatlari va professional detailing mahsulotlari.');
export default function Page() { return <InfoView kind="about" />; }
