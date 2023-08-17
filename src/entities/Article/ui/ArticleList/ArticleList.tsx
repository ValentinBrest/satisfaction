import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cl from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { 
        className, 
        articles, 
        isLoading, 
        view = ArticleView.LIST, 
    } = props;

    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton view={view} key={index}/>);

    const renderArticles = (article: Article) => {
        return <ArticleListItem view={view} article={article} key={article.id}/>;
    };

    return (
        <div className={classNames(cl.ArticleList, {}, [className, cl[view]])}>
            {articles.length > 0 
                ? articles.map(renderArticles)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});