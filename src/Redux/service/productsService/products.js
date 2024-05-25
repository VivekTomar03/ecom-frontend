import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => ({
        url: "/products",
        params: args,
        method: "GET",
      }),
    }),
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetAllProductsQuery, useGetProductDetailQuery} = productsApi