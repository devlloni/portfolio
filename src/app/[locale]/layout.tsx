import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from 'next-intl/server';

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";

interface LocaleLayoutProps {
    children: ReactNode,
    params: { locale: string },
};

export function generateStaticParams () {
    return [{ locale: 'en'}, { locale: 'es' }];
}
export default async function LocaleLayout({ children, params: {locale} } : LocaleLayoutProps) {
    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        console.error('Failed to load messages, ', error);
        notFound();
    }

    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
            <Navbar
                locale={locale}
            />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="text-gray-400 bg-gray-900 body-font">
                        {children}
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
