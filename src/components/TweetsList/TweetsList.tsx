import React from "react";
import { TweetsItem } from "../TweetsItem/TweetsItem";
import { TweetList } from "./TweetsList.styled";

export const TweetsList: React.FC = () => {
  return (
    <TweetList>
      <TweetsItem />
    </TweetList>
  );
};
