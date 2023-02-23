import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function AboutPage() {
    const {t} = useTranslation('about');
    return (
        <>
            <div>{t('o-saite')}</div>
            <Counter/>
        </>
    );
}

export default AboutPage;
