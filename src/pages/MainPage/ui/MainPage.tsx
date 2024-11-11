import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <div>{t('glavnaya-stranica')}</div>
            <RatingCard hasFeedback={true}/>
        </Page>
    );
});

export default MainPage;
