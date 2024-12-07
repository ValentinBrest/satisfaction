import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            <VStack>
                <Text title={t('hello')} />
                <br />
                <Text text={t('goal')} />
                <br />
                <Text text={t('opportunity')} />
                <br />
                <Text text={t('story')} />
                <a
                    target="_blank"
                    href={
                        'https://satisfaction-storybook.vercel.app/?path=/story/entities-article-articledetails--normal'
                    } rel="noreferrer"
                // eslint-disable-next-line i18next/no-literal-string
                >
                    storybook
                </a>
            </VStack>
        </Page>
    );
});

export default AboutPage;
