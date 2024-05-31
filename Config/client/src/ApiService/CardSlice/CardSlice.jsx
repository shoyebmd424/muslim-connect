import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Axios";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: () => ({
        url: "/card/",
        method: "GET",
      }),
    }),

    getCardById: builder.query({
      query: (id) => ({
        url: `/card/${id}`,
        method: "GET",
      }),
    }),
    getCardByUserId: builder.query({
      query: (id) => {
        return {
          url: `/card/user/${id}`,
          method: "GET",
        };
      },
    }),
    createCard: builder.mutation({
      query: (data) => {
        return {
          url: "/card/",
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    deleteCard: builder.mutation({
      query: (id) => {
        return {
          url: `/card/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateCard: builder.mutation({
      query: (data, id) => {
        return {
          url: `/card/${id}`,
          method: "PUT",
          body: data,
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
  useGetAllCardsQuery,
  useGetCardByIdQuery,
  useGetCardByUserIdQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} = cardApi;
