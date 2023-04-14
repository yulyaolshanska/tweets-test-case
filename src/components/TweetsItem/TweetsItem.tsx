import React from "react";
import {
  Avatar,
  FollowButton,
  FollowersCount,
  TweetItem,
  TweetsCount,
} from "./TweetsItem.styled";

export const TweetsItem: React.FC = () => {
  return (
    <TweetItem>
      <Avatar />
      <TweetsCount>tweets</TweetsCount>
      <FollowersCount>followers</FollowersCount>
      <FollowButton>follow</FollowButton>
    </TweetItem>
  );
};
