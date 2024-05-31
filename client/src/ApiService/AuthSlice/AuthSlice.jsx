import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Axios";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getAllAuth: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
    }),
    getAuthById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `/auth/users/${id}`,
          method: "GET",
        };
      },
    }),

    getAuthByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number:", num);
        return {
          url: `auth?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deleteAuth: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `/auth/${id}`,
          method: "DELETE",
        };
      },
    }),
    // post data
    createAuth: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        const formData = new FormData();
        for (const key in newPost) {
          formData.append(key, newPost[key]);
        }
        return {
          url: `/auth/register`,
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),
    // login data
    loginAuth: builder.mutation({
      query: (newPost) => {
        console.log("login Post: ", newPost);
        return {
          url: `/auth/login`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    // update
    updateAuth: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        const formData = new FormData();
        for (let key in data) {
          if (key !== "file") {
            formData.append(
              key,
              Array.isArray(data[key]) ? JSON.stringify(data[key]) : data[key]
            );
          } else {
            formData.append(key, data[key]);
          }
        }
        return {
          url: `/auth/update/${id}`,
          method: "PUT",
          body: formData,
          formData: true,
          // headers: {
          //   "Content-type": "application/json; charset=UTF-8",
          // },
        };
      },
    }),
  }),
});

export const {
  useGetAllAuthQuery,
  useGetAuthByIdQuery,
  useGetAuthByLimitQuery,
  useDeleteAuthMutation,
  useCreateAuthMutation,
  useUpdateAuthMutation,
} = authApi;
