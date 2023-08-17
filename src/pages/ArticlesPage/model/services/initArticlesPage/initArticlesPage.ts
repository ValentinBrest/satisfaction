import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import {
    getArticlesPageInited,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<
    void, 
    void, 
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (_, { getState, dispatch }) => {
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticleList({
                    page: 1,
                }));
            }
        },
    );
