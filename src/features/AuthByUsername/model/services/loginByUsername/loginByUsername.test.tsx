import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    test('success login', async () => {
        const userValue = {id: '1', username: '123'};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
        const action = loginByUsername({username: '123', password: '123'});
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const action = loginByUsername({username: '123', password: '123'});
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
        console.log(result);
    });
});