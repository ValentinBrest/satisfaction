import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Card, Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="MainPage">
            <Text title={'mainPage'} />   
            <br/>            
            <Text text={t('loginAdmin')} />            
            <Text text={t('loginUser')} />     
            <br/>       
            <Card>
                <Counter />
            </Card>
        </Page>
    );
});

export default MainPage;
