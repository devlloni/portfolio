'use client'
import React from 'react';
import { useTranslations } from 'next-intl';

const InfoPage = () => {
    const t = useTranslations();
    return (
        <div>
            <h1>{t('InfoPage.title')}</h1>
            <h3>{t('InfoPage.description')}</h3>
        </div>
    );
}

export default InfoPage;
