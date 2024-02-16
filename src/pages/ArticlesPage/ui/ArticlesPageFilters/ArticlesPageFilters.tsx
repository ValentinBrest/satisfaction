import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleSortField, ArticleSortSelector, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types';
import { Card, Input } from 'shared/ui';

import { 
    getArticlesPageOrder, 
    getArticlesPageSearch, 
    getArticlesPageSort, 
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlesPageActions } from '../../model/slices/articlePageSlice';

import cl from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
   className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({replace: true}));
    }, [dispatch]);

    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cl.ArticlesPageFilters, {}, [className])}>
            <div className={cl.sortWrapper}>
                <ArticleSortSelector 
                    sort={sort} 
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onViewChange}/>
            </div>
            <Card className={cl.search}>
                <Input placeholder={t('poisk')} onChange={onChangeSearch} value={search}/>
            </Card>
        </div>
    );
});