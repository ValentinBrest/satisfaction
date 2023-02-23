import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function MainPage() {
    const {t} = useTranslation('main');

    return (
        <>
            <div>{t('glavnaya-stranica')}</div>
            <Counter/>
        </> 
    );
}

export default MainPage;
