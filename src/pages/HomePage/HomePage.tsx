import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../firebase/firebase";
import {
  ButtonBox,
  Container,
  HomeText,
  Title,
  TweetsLink,
} from "./HomePage.styled";
import { useAppSelector } from "hooks/hooks";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const userName = useAppSelector(({ auth }) => auth.user.userName);

  useEffect(() => {
    if (userName !== "") {
      navigate("/tweets", { replace: true });
    }
  }, [userName]);

  return (
    <Container>
      <Title>Welcome to Tweets!</Title>
      <HomeText>To start viewing new users, click the button below</HomeText>
      <TweetsLink to="/tweets">View users</TweetsLink>
      <ButtonBox>
        <GoogleButton onClick={signInWithGoogle}>
          Sign in with google
        </GoogleButton>
      </ButtonBox>
    </Container>
  );
};

export default HomePage;
