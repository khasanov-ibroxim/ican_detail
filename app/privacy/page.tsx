import { InfoView } from '@/components/store/info-view';
import { pageHead } from '@/lib/store/data';
export const metadata = pageHead('Maxfiylik siyosati','iCan Detail maxfiylik siyosati.');
export default function Page() { return <InfoView kind="privacy" />; }
