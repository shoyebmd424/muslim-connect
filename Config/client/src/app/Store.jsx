import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gigsApi } from "../ApiService/GigsService/GigsService";
import { authApi } from "../ApiService/AuthSlice/AuthSlice";
import { cardApi } from "../ApiService/CardSlice/CardSlice";
import { sessionApi } from "../ApiService/SessionSlice/SessionSlice";

export const store = configureStore({
  reducer: {
    [gigsApi.reducerPath]: gigsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gigsApi.middleware,
      authApi.middleware,
      cardApi.middleware,
      sessionApi.middleware
    ),
});

setupListeners(store.dispatch);
