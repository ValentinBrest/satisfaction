import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';

import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';


interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList
            className={className}
            articles={articles}
            isLoading={isLoading}
            view={view}
        />
    );
});
