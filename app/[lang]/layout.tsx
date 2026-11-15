// app/[lang]/layout.tsx
import { i18n, Locale } from "@/i18n-config";
import "@/app/globals.css";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import {getCommonDictionary} from "@/lib/dictionary.ts";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode,
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params;
    const dict = await getCommonDictionary(lang);
    return (
        <div className={""}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}