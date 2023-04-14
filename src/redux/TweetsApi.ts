import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ITweet from "../interface/ITweet";

const URL = "https://62f55891ac59075124d029d7.mockapi.io/tweets";
export const tweetsApi = createApi({
  reducerPath: "tweetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getTweets: builder.query<Array<ITweet>, string>({
      query: () => "",
    }),
  }),
});

export const { useGetTweetsQuery } = tweetsApi;
