import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { articleMockData } from '../../../mocks/data';

import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
    
    test('success', async () => {
        
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({article: articleMockData}));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleMockData);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('11');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
