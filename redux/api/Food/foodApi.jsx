import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return {
          url: `restaurants`,
          method: "get",
          responseHandler: (response) => response.text(),
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = foodApi;
