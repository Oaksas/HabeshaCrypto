import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrlNews, createRequestNews } from "../utils";

export const cryptoNewsAPI = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://min-api.cryptocompare.com' }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequestNews(`/data/v2/news/?lang=EN&categories=${newsCategory}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsAPI;