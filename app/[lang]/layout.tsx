// app/[lang]/layout.tsx
import { i18n, Locale } from "@/i18n-config";


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
    return (
        <div className={"text-[#fff]"}>asdsa
            {children}
        </div>
    );
}