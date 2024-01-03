import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrlNews, createRequestNews } from "../utils";

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrlNews }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequestNews(`/search?q=${newsCategory}&pageSize=${count}&country=us&language=en`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;