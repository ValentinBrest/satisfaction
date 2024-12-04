import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/article/calendar.svg';
import EyeIcon from '@/shared/assets/icons/article/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar, Text, TextAlign, TextSize, TextTheme } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import { renderBlock } from '../../helpers/renderBlock';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

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
                title={t('getError')}
            />
        );
    } else if (isLoading) {
        content = (
            <VStack max>
                <Skeleton
                    width={200}
                    height={200}
                    border="50%"
                    className={cl.avatar}
                />
                <Skeleton className={cl.title} width={300} height={32} />
                <Skeleton className={cl.skeleton} width={600} height={24} />
                <Skeleton className={cl.skeleton} width="100%" height={200} />
                <Skeleton className={cl.skeleton} width="100%" height={200} />
            </VStack>
        );
    } else {
        content = (
            <>
                <HStack max justify="center" className={cl.avatarWrap}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        alt="ava"
                    />
                </HStack>
                <VStack gap="8" max data-testid="ArticleDetails.Info">
                    <Text
                        className={cl.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <EyeIcon className={cl.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <CalendarIcon className={cl.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                <VStack align="center">{article?.blocks.map(renderBlock)}</VStack>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="16"
                className={classNames(cl.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
