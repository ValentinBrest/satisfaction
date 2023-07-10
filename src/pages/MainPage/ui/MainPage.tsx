import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <div>{t('glavnaya-stranica')}</div>
        </Page>
    );
});

export default MainPage;
