import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

interface DynamicModuleLoaderProps {
    name: StateSchemaKey,
    reducer: Reducer;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        name,
        reducer,
        removeAfterUnmount,
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect (() => {
        store.reducerManager.add(name, reducer);
        dispatch({type: `@INIT ${name} reducer`});

        return () => {
            if(removeAfterUnmount) {
                store.reducerManager.remove(name);
                dispatch({type: `@DESTROY ${name} reducer`});
            }
        };
        //eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};