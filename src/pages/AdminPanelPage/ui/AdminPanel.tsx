import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = memo(() => {
    const {t} = useTranslation('about');
    return (
        <Page>
            <div>{t('Админ панель')}</div>
        </Page>
    );
});

export default AdminPanelPage;
