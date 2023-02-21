import { useTranslation } from 'react-i18next';

function AboutPage() {
    const {t} = useTranslation('about');
    return (
        <div>{t('o-saite')}</div>
    );
}

export default AboutPage;
