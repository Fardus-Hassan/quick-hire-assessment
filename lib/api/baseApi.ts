import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:5000/api";

export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, "");

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Jobs"],
  endpoints: () => ({}),
});

