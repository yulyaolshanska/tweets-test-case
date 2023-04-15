import Loader from "components/Loader/Loader";
import React, { useState } from "react";
import { useGetTweetsQuery } from "../../redux/TweetsApi";
import { TweetsItem } from "../TweetsItem/TweetsItem";
import { LoadMoreButton, TweetList } from "./TweetsList.styled";

const TWEETS_PER_PAGE = 10;
const TWEETS_PER_LOAD = 5;

export const TweetsList: React.FC = () => {
  const [currentPage] = useState(1);
  const [displayedTweets, setDisplayedTweets] = useState(TWEETS_PER_PAGE);
  const { data: tweets, isFetching, isLoading } = useGetTweetsQuery("");
  const startIndex = (currentPage - 1) * TWEETS_PER_PAGE;
  const endIndex = displayedTweets;

  const handleLoadMoreClick = () => {
    setDisplayedTweets(displayedTweets + TWEETS_PER_LOAD);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TweetList>
            {!isFetching &&
              tweets
                ?.slice(startIndex, endIndex)
                .map(({ id, avatar, tweets, followers }) => (
                  <TweetsItem
                    key={id}
                    id={id}
                    avatar={avatar}
                    tweets={tweets}
                    followers={followers}
                  />
                ))}
          </TweetList>
          {tweets && endIndex < tweets.length && (
            <LoadMoreButton onClick={handleLoadMoreClick}>
              Load More
            </LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};
