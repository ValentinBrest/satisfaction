import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {loginForm: {username: 'valk'}};
        expect(getLoginUsername(state as StateSchema)).toEqual('valk');
    });
    test('should with work state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});