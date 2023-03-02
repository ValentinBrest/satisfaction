import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    
    test('success login', async () => {
        const userValue = {id: '1', username: '123'};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({password: '123', username: '123'});

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({password: '123', username: '123'});

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});