import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

import { 
    getArticlesPageLimit, 
    getArticlesPageNum, 
    getArticlesPageOrder, 
    getArticlesPageSearch, 
    getArticlesPageSort,
    getArticlesPageType, 
} from '../../selectors/articlePageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
    Article[], 
    FetchArticlesListProps, 
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (args, { rejectWithValue, extra, getState }) => {

            const page = getArticlesPageNum(getState());
            const limit = getArticlesPageLimit(getState());
            const order = getArticlesPageOrder(getState());
            const sort = getArticlesPageSort(getState());
            const search = getArticlesPageSearch(getState());
            const type = getArticlesPageType(getState());

            try {
                addQueryParams({sort, order, search, type});
                const response = await extra.api.get<Article[]>('/articles/', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        type: type === ArticleType.ALL ? undefined: type,
                        q: search,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (error) {
                return rejectWithValue('error');
            }
        
        },
    );
