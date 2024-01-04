import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrlNews, createRequestNews } from "../utils";

export const cryptoNewsAPI = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrlNews }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequestNews(`/search?query=${newsCategory}&pageSize=${count}&country=US&lang=en`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsAPI;