import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
    sort: string;
}

const initialState: SortState = {
    sort: ''
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setRateSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },
        setSumCreditSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        }
    }
})

export const {setRateSort, setSumCreditSort} = sortSlice.actions;
export default sortSlice.reducer;