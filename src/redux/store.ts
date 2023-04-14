import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tweetsApi } from "./TweetsApi";

export const store = configureStore({
  reducer: { [tweetsApi.reducerPath]: tweetsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tweetsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
