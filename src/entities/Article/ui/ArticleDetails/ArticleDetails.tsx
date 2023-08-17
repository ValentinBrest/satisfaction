import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import CalendarIcon from 'shared/assets/icons/article/calendar.svg';
import EyeIcon from 'shared/assets/icons/article/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar, Text, TextAlign, TextSize, TextTheme } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { renderBlock } from '../../helpers/renderBlock';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

import cl from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => dispatch(fetchArticleById(id)));

    let content;

    if (error) {
        content = (
            <Text 
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке страницы')}/>
        );
    } else if (isLoading) {
        content = (
            <>
                <Skeleton className={cl.avatar} width={200} height={200} border="50%"/>
                <Skeleton className={cl.title} width={300} height={32} />
                <Skeleton className={cl.skeleton} width={600} height={24} />
                <Skeleton className={cl.skeleton}width="100%" height={200} />
                <Skeleton className={cl.skeleton} width="100%" height={200} />
            </>
        );
    } else {
        content = (
            <>
                <div className={cl.avatarWrap}>
                    <Avatar 
                        className={cl.avatar} 
                        size={200} src={article?.img} 
                        alt="ava"
                    />
                </div>
                <Text 
                    className={cl.title} 
                    title={article?.title} 
                    text={article?.subtitle} 
                    size={TextSize.L}
                />
                <div className={cl.articleInfo}>
                    <EyeIcon className={cl.icon}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cl.articleInfo}>
                    <CalendarIcon className={cl.icon}/>
                    <Text text={article?.createdAt}/>
                </div>
                <div className={cl.blockWrap}>
                    {article?.blocks.map(renderBlock)}
                </div>
                
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} >
            <div
                className={classNames(cl.ArticleDetails, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
});


