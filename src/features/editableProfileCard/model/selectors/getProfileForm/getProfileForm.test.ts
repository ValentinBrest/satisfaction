import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return form', () => {
        const data = {
            first: 'Vasya',
            lastname: 'Pupkin',
            country: Country.Belarus,
            city: 'Brest',
            username: 'admin',
            age: 27,
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {profile: {form : data}};
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});