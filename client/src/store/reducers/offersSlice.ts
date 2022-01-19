import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOffer} from "../../models/IOffer";

interface FetchState {
    offers: IOffer[];
    offer: IOffer;
    isLoading: boolean;
    error: string;
}

const initialState: FetchState = {
    offers: [],
    offer: {},
    isLoading: false,
    error: '',
}

export const offersSlice = createSlice({
    name: 'banksOffers',
    initialState,
    reducers: {}
})

export default offersSlice.reducer;