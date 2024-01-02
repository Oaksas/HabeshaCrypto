import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseUrl, createRequest } from '../utils';
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;


