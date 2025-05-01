import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URI } from "../constants/env.constants";

export const accountService = createApi({
  reducerPath: "accounts",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URI}/accounts` }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/local/signup",
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation({
      query: (data) => ({
        url: "/local/signin",
        method: "POST",
        body: data,
      }),
    }),
    signout: builder.query({
      query: () => `/local/signout`,
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/local/password/forgot",
        method: "POST",
        body: data,
      }),
    }),
    emailVerification: builder.mutation({
      query: (data) => ({
        url: "/local/email/verification",
        method: "POST",
        body: data,
      }),
    }),
    tfa: builder.mutation({
      query: (data) => ({
        url: "/local/tfa",
        method: "POST",
        body: data,
      }),
    }),
    google: builder.mutation({
      query: (data) => ({
        url: "/social/google",
        method: "POST",
        body: data,
      }),
    }),
    github: builder.mutation({
      query: (data) => ({
        url: "/social/github",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useSignoutQuery,
  useForgotPasswordMutation,
  useEmailVerificationMutation,
  useTfaMutation,
  useGoogleMutation,
  useGithubMutation,
} = accountService;
