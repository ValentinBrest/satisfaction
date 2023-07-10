import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui';

import { 
    getArticlesPageError, 
    getArticlesPageIsLoading, 
    getArticlesPageView, 
} from '../../model/selectors/articlePageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice';

import cl from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlesPageActions.initialState());
    });

    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return(
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cl.ArticlesPage, {}, [className])}>
                <Text title={t('articles')} size={TextSize.L} className={cl.title}/>
                <ArticleViewSelector view={view} onViewClick={onViewChange}/>
                <ArticleList articles={articles} isLoading={isLoading} view={view}/>
            </div>
        </DynamicModuleLoader>
    ) 
    ;
};


export default memo(ArticlesPage);
