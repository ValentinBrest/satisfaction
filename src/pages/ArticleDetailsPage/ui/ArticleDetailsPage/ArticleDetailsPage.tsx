import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addComentForm';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui';
import { Page } from 'widgets/Page/Page';

import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleById } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import cl from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );
    const commentsError = useSelector(getArticleCommentsError);
    
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleById(id));
        dispatch(fetchArticleRecommendations());
    });


    if (!id) {
        return (
            <Page
                className={classNames(cl.ArticleDetailsPage, {}, [className])}
            >
                {t('statya-ne-naidena')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cl.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id} />

                <Text
                    title={t('rekomenduem')}
                    size={TextSize.L}
                    className={cl.recommendTitle}
                />
                <ArticleList
                    isLoading={recommendationsIsLoading}
                    articles={recommendations}
                    view={ArticleView.GRID}
                    className={cl.recommendations}
                    target="_blank"
                />

                <Text title={t('kommentarii')} size={TextSize.L} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
