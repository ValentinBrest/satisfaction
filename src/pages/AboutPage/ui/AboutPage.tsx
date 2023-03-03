import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = memo(() => {
    const {t} = useTranslation('about');
    return (
        <>
            <div>{t('o-saite')}</div>
            <Counter/>
        </>
    );
});

export default AboutPage;
