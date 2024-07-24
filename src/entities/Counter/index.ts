import { counterReducer } from './model/slice/counterSclice';
import { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';

export type {
    CounterSchema,
};

export {
    Counter,
    counterReducer,
};