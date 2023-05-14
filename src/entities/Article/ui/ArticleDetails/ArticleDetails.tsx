import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cl.ArticleDetails, {}, [className])}
            ></div>
        </DynamicModuleLoader>
    );
});
