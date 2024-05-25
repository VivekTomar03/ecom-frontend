import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { getUserDataFromCookies } from "../../../Components/GetUserCookiesdata";

const userData = getUserDataFromCookies();
export const userApi = createApi({
  reducerPath: "userAuth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/user" }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
      // Define a `onSuccess` callback to handle the successful response
      onSuccess: (response, variables, api) => {
        const dispatch = api.dispatch;
        // Dispatch an action to save the response data in the Redux store
        dispatch(setUserData(response.data));
      },
    }),

    updateUserCart: builder.mutation({
      query: (data) => ({
        url: `/update-cart`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.data?.token}`,
        },
        body: data,
      }),
    }),

    getUserDetail: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.data?.token}`,
        },
      }),
    }),
    
    reqmoveCartItem: builder.mutation({
      query: (data) => ({
        url: `/remove-cart-item`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.data?.token}`,
        },
      body:data
      }),
    }),


  }),
});
export const setUserData = (userData) => ({
  type: "userAuth/setUserData",
  payload: userData,
});
export const {
  useAddNewUserMutation,
  useLoginUserMutation,
  useUpdateUserCartMutation,
  useGetUserDetailQuery,
  useReqmoveCartItemMutation
} = userApi;
