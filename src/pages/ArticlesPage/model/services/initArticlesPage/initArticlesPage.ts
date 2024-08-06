import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

import {
    getArticlesPageInited,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<
    void, 
    URLSearchParams, 
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (searchParams, { getState, dispatch }) => {
            const inited = getArticlesPageInited(getState());

            if (!inited) {

                dispatch(articlesPageActions.setOrder(searchParams.get('order') as SortOrder ?? ''));
                dispatch(articlesPageActions.setSort(searchParams.get('sort') as ArticleSortField ?? ''));
                dispatch(articlesPageActions.setSearch(searchParams.get('search') ?? ''));
                dispatch(articlesPageActions.setType(searchParams.get('type') as ArticleType));
                
                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticleList({}));
            }
        },
    );
