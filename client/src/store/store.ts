import {combineReducers, configureStore} from "@reduxjs/toolkit";
import banksReducer from './reducers/offersSlice';
import {offersApi} from "../services/RTKService";
import sortReducer from './reducers/sortSlice'

const rootReducer = combineReducers({
    banksReducer,
    sortReducer,
    [offersApi.reducerPath]: offersApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(offersApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
