import { Header } from "components/Header/Header";
import React from "react";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import {
  BackButton,
  Container,
  StyledGoBAckIcon,
  StyledNavLink,
} from "./TweetsPage.styled";

const TweetsPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <BackButton>
        <StyledNavLink to="/">
          <StyledGoBAckIcon />
          Go Back
        </StyledNavLink>
      </BackButton>
      <TweetsList />
    </Container>
  );
};

export default TweetsPage;
