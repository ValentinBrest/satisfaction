import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data', () => {
        const data = {
            first: 'Vasya',
            lastname: 'Pupkin',
            country: Country.Belarus,
            city: 'Brest',
            username: 'admin',
            age: 27,
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {profile: {data}};
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});