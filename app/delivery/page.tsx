import { InfoView } from '@/components/store/info-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Yetkazib berish','iCan Detail yetkazib berish shartlari.');
export default function Page() { return <InfoView kind="delivery" />; }
