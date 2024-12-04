import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cl from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST,
        target,
    } = props;

    const { t } = useTranslation('articles');

    const getSkeletons = (view: ArticleView) =>
        new Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton view={view} key={index} />
            ));

    const renderArticles = (article: Article) => {
        return (
            <ArticleListItem
                view={view}
                article={article}
                key={article.id}
                target={target}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cl.ArticleList, {}, [
                    className,
                    cl[view],
                ])}
            >
                <Text title={t('articlesNotFound')} />
            </div>
        );
    }

    return (
        <div className={classNames(cl.ArticleList, {}, [className, cl[view]])} data-testid={'ArticleList'}>
            {articles.length > 0 ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
