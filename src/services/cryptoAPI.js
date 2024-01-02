import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import BaseUrl from 'antd/es/typography/Base';
import { createRequest } from '../utils';
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'bb7c54c949mshf76f9cd4b889e90p1625f5jsnaf1ff6eef258',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }