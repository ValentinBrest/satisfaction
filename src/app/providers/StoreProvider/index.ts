import type { 
    ReduxStoreWithManager, 
    StateSchema, 
    StateSchemaKey,
    ThunkConfig, 
    ThunkExtraArg, 
} from './config/StateSchema';
import { AppDispatch,createReduxStore } from './config/store';

export {
    createReduxStore, 
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
};
export type {
    AppDispatch,
};
