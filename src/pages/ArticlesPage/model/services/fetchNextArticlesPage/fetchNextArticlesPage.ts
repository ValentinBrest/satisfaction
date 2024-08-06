import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { 
    getArticlesPageHasMore, 
    getArticlesPageIsLoading, 
    getArticlesPageNum, 
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlesPage = createAsyncThunk<
    void, 
    void, 
    ThunkConfig<string>
    >(
        'articlePage/fetchNextArticlesPage',
        async (_, { getState, dispatch }) => {
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticleList({}));
            }
        },
    );
