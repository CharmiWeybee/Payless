import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (data) => {
        return {
          url: `restaurants`,
          method: "get",
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getRatings: builder.query({
      query: (data) => {
        return {
          url: `ratings`,
          method: "get",
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getRestaurantMenu: builder.query({
      query: (categoryId) => {
        return {
          url: `category?restaurant_id=${categoryId}`,
          method: "get",
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    getCompareData: builder.query({
      query: (categoryId, menuId) => {
        return {
          url: `source?restaurant_id=${categoryId}&&menu_id=${menuId}`,
          method: "get",
        };
      },
      transformResponse: (response) => {
        return response;
      },
    }),
    sendContactQueries: builder.mutation({
      query: (data) => {
        return { url: `contactusQueries`, method: 'post', body: data };
      }
    }),
  }),
});

export const { useGetCategoriesQuery, useGetRatingsQuery, useGetRestaurantMenuQuery, useGetCompareDataQuery, useSendContactQueriesMutation} = foodApi;
