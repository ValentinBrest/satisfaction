import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: 'klav'};
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('valk')))
            .toEqual({username: 'valk'});
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '123'};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('456')))
            .toEqual({password: '456'});
    });
});