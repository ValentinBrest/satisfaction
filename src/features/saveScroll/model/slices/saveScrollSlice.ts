import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSchema } from '../types/saveScroll';


const initialState: ScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, {payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    
});

export const { actions: saveScrollSliceActions } = saveScrollSlice;
export const { reducer: saveScrollSliceReducer } = saveScrollSlice;