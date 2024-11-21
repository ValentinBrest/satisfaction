import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="ForbiddenPage">
            <div>{t('У вас не хватает прав!')}</div>
        </Page>
    );
});

export default ForbiddenPage;
