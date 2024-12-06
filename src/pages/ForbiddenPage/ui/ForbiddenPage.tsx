import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="ForbiddenPage">
            <Text title={t('hasNotPermission')}/>
        </Page>
    );
});

export default ForbiddenPage;
