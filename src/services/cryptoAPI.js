import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseUrl, createRequest } from '../utils';
export const cryptoAPI = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    }),
});

export const { useGetCryptosQuery, useGetCryptoDetailQuery } = cryptoAPI;


