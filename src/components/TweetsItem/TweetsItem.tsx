import React, { useEffect, useState } from "react";
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

export default interface ITweet {
  id: string;
  tweets: number;
  followers: number;
  avatar: string;
}

export const TweetsItem: React.FC<ITweet> = ({
  id,
  avatar,
  followers,
  tweets,
}) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [followerCount, setFollowerCount] = useState<number>(followers);

  useEffect(() => {
    const savedIsFollowing = localStorage.getItem(`isFollowing${id}`);
    const savedFollowerCount = localStorage.getItem(`followerCount${id}`);

    if (savedIsFollowing === "true") {
      setIsFollowing(true);
    }

    if (savedFollowerCount) {
      setFollowerCount(Number(savedFollowerCount));
    }
  }, [setIsFollowing, setFollowerCount]);

  const handleFollowClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowerCount((prevCount) => prevCount + 1);
      localStorage.setItem(`isFollowing${id}`, "true");
      localStorage.setItem(`followerCount${id}`, `${followerCount + 1}`);
    } else {
      setIsFollowing(false);
      setFollowerCount((prevCount) => prevCount - 1);
      localStorage.setItem(`isFollowing${id}`, "false");
      localStorage.setItem(`followerCount${id}`, `${followerCount - 1}`);
    }
  };

  return (
    <TweetItem>
      <Logo />
      <AvatarEllipse />
      <AvatarRectangle />
      <Avatar src={avatar} />
      <InfoContainer>
        <TweetsCount>{tweets} tweets</TweetsCount>
        <FollowersCount>
          {followerCount.toLocaleString("en-US")} followers
        </FollowersCount>
      </InfoContainer>
      <FollowButton active={isFollowing} onClick={handleFollowClick}>
        {isFollowing ? "Following" : "Follow"}
      </FollowButton>
    </TweetItem>
  );
};
