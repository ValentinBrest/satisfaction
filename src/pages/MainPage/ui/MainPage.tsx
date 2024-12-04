import { memo } from 'react';

import { Counter } from '@/entities/Counter';
import { Card, Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    return (
        <Page data-testid="MainPage">
            <Text title={'mainPage'} />
            <Card>
                <Counter />
            </Card>
        </Page>
    );
});

export default MainPage;
