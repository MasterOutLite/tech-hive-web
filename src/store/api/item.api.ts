import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import queryString from "query-string";


// Define a service using a base URL and expected endpoints
export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: (builder) => ({
    // getItemList: builder.query<ItemTypeRes[], ItemListQuery>({
    //   query: (param) => {
    //     const query = queryString.stringify(param, {skipNull: true, skipEmptyString: true,});
    //     console.log('New request for item', query)
    //     return `item?${query}`
    //   },
    // }),
    // getItemById: builder.query<ItemTypeRes, string>({
    //   query: (id) => {
    //     console.log('Caching item by id', id)
    //     return `item/${id}`;
    //   },
    // }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  // useGetItemListQuery, useGetItemByIdQuery
} = itemApi
