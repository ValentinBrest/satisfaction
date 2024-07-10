
import { CounterSchema } from '../types/counterSchema';

import { counterActions, counterReducer } from './counterSclice';

describe('counterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({
            value: 11,
        });
    });
});

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({
            value: 9,
        });
    });
});

describe('counterSlice', () => {
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({
            value: -1,
        });
    });
});