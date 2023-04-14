import React from "react";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { Container } from "./TweetsPage.styled";

const TweetsPage: React.FC = () => {
  return (
    <Container>
      <TweetsList />
    </Container>
  );
};

export default TweetsPage;
