import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ValidateProfileError } from '../../types/profile';

import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Vasya',
    lastname: 'Pupkin',
    country: Country.Belarus,
    city: 'Brest',
    username: 'admin',
    age: 27,
    currency: Currency.EUR,
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
