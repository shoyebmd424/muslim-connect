import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Axios";

// It is used to define our endpoints and allow to create the API slice
export const gigsApi = createApi({
  reducerPath: "gigsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getAllGigs: builder.query({
      query: () => ({
        url: "/gigs/",
        method: "GET",
      }),
    }),
    getFilterGigs: builder.query({
      query: (params) => {
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `/gigs?${queryString}`,
          method: "GET",
        };
      },
    }),
    getGigsById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `/gigs/${id}`,
          method: "GET",
        };
      },
    }),
    getGigsByUserId: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `/gigs/user/${id}`,
          method: "GET",
        };
      },
    }),

    getGigsByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number:", num);
        return {
          url: `gigs?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deleteGigs: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `/gigs/${id}`,
          method: "DELETE",
        };
      },
    }),
    // post data
    createGigs: builder.mutation({
      query: (newPost) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(newPost)) {
          if (key !== "gigsImages") {
            formData.append(key, value);
          }
        }
        for (let i = 0; i < newPost?.gigsImages?.length; i++) {
          console.log(newPost?.gigsImages[i]);
          formData.append("gigsImages", newPost?.gigsImages[i]);
        }
        return {
          url: `/gigs/`,
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),

    // update
    updateGigs: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        return {
          url: `/gigs/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    //  review end points
    createRiview: builder.mutation({
      query: (data) => {
        return {
          url: "/gigs/review/data/",
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    updateReview: builder.mutation({
      query: (data) => {
        const { id, ...remain } = data;
        return {
          url: `/gigs/review/data/${id}`,
          body: remain,
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    deleteReview: builder.mutation({
      query: (id) => {
        return {
          url: `/gigs/review/data/${id}`,
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    getAllReviewByUserId: builder.query({
      query: (id) => {
        return {
          url: `/gigs/review/data/user/${id}`,
          method: "GET",
        };
      },
    }),
    getAllReviews: builder.query({
      query: (id) => {
        return {
          url: `/gigs/review/data/`,
          method: "GET",
        };
      },
    }),
    getAllReviewByGigId: builder.query({
      query: (id) => {
        return {
          url: `/gigs/review/data/gig/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllGigsQuery,
  useGetGigsByIdQuery,
  useGetFilterGigsQuery,
  useGetGigsByUserIdQuery,
  useGetGigsByLimitQuery,
  useDeleteGigsMutation,
  useCreateGigsMutation,
  useUpdateGigsMutation,
  //  review
  useCreateRiviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
  useGetAllReviewByGigIdQuery,
  useGetAllReviewByUserIdQuery,
} = gigsApi;
