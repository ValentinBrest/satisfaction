import { StateSchema } from 'app/providers/StoreProvider';

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails', () => {
    test('should return getArticleDetailsData', () => {
        const data = {
            id: '1',
            title: 'Title',
        };        
        const state: DeepPartial<StateSchema> = {articleDetails: {data}};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined for articleDetailsData', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return getArticleDetailsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {articleDetails: {isLoading: true}};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return getArticleDetailsError', () => {
        const state: DeepPartial<StateSchema> = {articleDetails: {error: '123'}};
        expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
    });
    test('should return undefined for articleDetailsError', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});