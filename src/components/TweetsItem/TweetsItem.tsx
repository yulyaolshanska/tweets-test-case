import React from "react";
import AvatarImg from "../../img/Hansel.png";
import {
  Avatar,
  AvatarEllipse,
  AvatarRectangle,
  FollowButton,
  FollowersCount,
  InfoContainer,
  Logo,
  TweetItem,
  TweetsCount,
} from "./TweetsItem.styled";

export const TweetsItem: React.FC = () => {
  return (
    <TweetItem>
      <Logo />
      <AvatarEllipse />
      <AvatarRectangle />
      <Avatar src={AvatarImg} />
      <InfoContainer>
        <TweetsCount>tweets</TweetsCount>
        <FollowersCount>followers</FollowersCount>
      </InfoContainer>

      <FollowButton>follow</FollowButton>
    </TweetItem>
  );
};
