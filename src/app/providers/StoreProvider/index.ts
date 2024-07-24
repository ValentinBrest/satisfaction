import type { ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg } from './config/StateSchema';
import { AppDispatch,createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    
    createReduxStore, 
    ReduxStoreWithManager,
    StoreProvider, 
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
};
export type {
    AppDispatch,
};
