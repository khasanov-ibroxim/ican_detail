import { InfoView } from '@/components/store/info-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Savollar va javoblar','iCan Detail haqida ko‘p beriladigan savollar.');
export default function Page() { return <InfoView kind="faq" />; }
