import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { <FTName>Schema } from '../types/<FTName>';


const initialState: <FTName>Schema = {
    
};

export const <FTName | lowercasefirstchar>Slice = createSlice({
    name: '<FTName | lowercasefirstchar>',
    initialState,
    reducers: {},
    /*extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },*/
});

export const { actions: <FTName | lowercasefirstchar>Actions } = <FTName | lowercasefirstchar>Slice;
export const { reducer: <FTName | lowercasefirstchar>Reducer } = <FTName | lowercasefirstchar>Slice;