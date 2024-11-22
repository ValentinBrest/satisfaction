import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui';
import { VStack } from '@/shared/ui/Stack';

import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';

import cl from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('articles');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationList(3);

        if (isLoading || error || !articles) return null;
        return (
            <VStack gap="8" max className={classNames('', {}, [className])} data-testid="ArticleRecommendationsList">
                <Text title={t('rekomenduem')} size={TextSize.L} />
                <ArticleList
                    articles={articles}
                    view={ArticleView.GRID}
                    target="_blank"
                    className={cl.recommendations}
                />
            </VStack>
        );
    },
);
