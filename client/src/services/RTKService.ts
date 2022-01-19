import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IOffer} from "../models/IOffer";

// Кэширует данные сам сервис + не делает лишних запросов
export const offersApi = createApi({
    reducerPath: 'offersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (builder) => ({
        getAllOffers: builder.query<IOffer[], number>({
            query: (limit) => ({
                url: '/api/offers',
                params: {
                    limit: limit
                }
            }),
        }),
        getOffer: builder.query<IOffer, string>({
            query: (id) => ({
                url: `/api/offers/offer/${id}`,
            }),
        }),
    }),
})

export const { useGetAllOffersQuery } = offersApi;