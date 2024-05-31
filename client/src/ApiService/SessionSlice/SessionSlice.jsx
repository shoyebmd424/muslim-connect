import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Axios";

export const sessionApi = createApi({
  reducerPath: "sessionApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl + "/sessions" }),

  endpoints: (builder) => ({
    getAllSessions: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    getSessionById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    getSessionByUserId: builder.query({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
    }),
    createSession: builder.mutation({
      query: (data) => {
        return {
          url: "/",
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    deleteSession: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateSession: builder.mutation({
      query: (data, id) => {
        return {
          url: `/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    completeSession: builder.mutation({
      query: (id) => {
        return {
          url: `/complete/${id}`,
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    cancelSession: builder.mutation({
      query: (id) => {
        return {
          url: `/cancel/${id}`,
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    // end end points
  }),
});

export const {
  useGetAllSessionsQuery,
  useGetSessionByIdQuery,
  useGetSessionByUserIdQuery,
  useCreateSessionMutation,
  useUpdateSessionMutation,
  useDeleteSessionMutation,
  useCompleteSessionMutation,
  useCancelSessionMutation,
} = sessionApi;
