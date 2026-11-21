import { InfoView } from '@/components/store/info-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Aloqa','iCan Detail bilan bog‘lanish.');
export default function Page() { return <InfoView kind="contact" />; }
