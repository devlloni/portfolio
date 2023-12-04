import React, { ReactPropTypes } from 'react';
import { useTranslations } from 'next-intl';
import ButtonLanguage from './ButtonLanguages';

type Props = {
    locale: string;
};

const Navbar = ({ locale }: Props) => {
    const t = useTranslations();
    return (
        <header className="text-gray-400 bg-gray-900 body-font" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">{t('Header.title')}</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">{t('Header.link1')}</a>
                    <a className="mr-5 hover:text-white">{t('Header.link2')}</a>
                    <a className="mr-5 hover:text-white">{t('Header.link3')}</a>
                </nav>
                <ButtonLanguage
                    en={t('Header.langButton.en')}
                    es={t('Header.langButton.es')}
                    current={locale}
                />
            </div>
</header >
    )
}

export default Navbar;
