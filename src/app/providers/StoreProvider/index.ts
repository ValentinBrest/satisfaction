import type { ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg } from './config/StateSchema';
import { AppDispatch,createReduxStore } from './config/store';

export {
    createReduxStore, 
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
};
export type {
    AppDispatch,
};
