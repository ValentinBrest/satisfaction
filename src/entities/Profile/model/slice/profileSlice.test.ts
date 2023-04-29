
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Vasya',
    lastname: 'Pupkin',
    country: Country.Belarus,
    city: 'Brest',
    username: 'admin',
    age: 27,
    currency: Currency.EUR,
};


describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({readonly: true});
    });

    test('test set cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ''}};
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                data,
                validateErrors : undefined,
                form: data,    
                readonly: true,
            });
    });

    test('test set update profile', () => {
        const state: DeepPartial<ProfileSchema> = {form: {username: ''}};
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({username: 'admin'})))
            .toEqual({
                form: {username: 'admin'},  
            });
    });

    test('test set update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false, 
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true, 
                validateErrors: undefined,
            });
    });

    test('test set update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true, 
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false, 
                data,
                form: data,
                readonly: true,
                validateErrors: undefined,
            });
    });

});