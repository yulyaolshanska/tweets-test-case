import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../firebase/firebase";
import firebase from "../../firebase/firebase";
import {
  ButtonBox,
  Container,
  HomeText,
  Title,
  TweetsLink,
} from "./HomePage.styled";
import { useAppDispatch } from "hooks/hooks";
import { authSlice } from "redux/authSlice";

interface User {
  userName: string | null;
  userEmail: string | null;
}

const HomePage: React.FC = () => {
  const { logIn } = authSlice.actions;
  const [user, setUser] = useState<User | "">("");
  const dispatch = useAppDispatch();
  let currentUser = null;
  const userGreating = user
    ? `${user?.userName}, welcome to Tweets!`
    : " Welcome to Tweets!";

  useEffect(() => {
    if (user) {
      dispatch(logIn(user));
    }
  }, [user]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        currentUser = {
          userName: user?.displayName,
          userEmail: user?.email,
        };
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <Container>
      <Title>{userGreating}</Title>
      <HomeText>To start viewing new users, click the button below</HomeText>
      <TweetsLink to="/tweets">View users</TweetsLink>
      {!user && (
        <ButtonBox>
          <GoogleButton onClick={signInWithGoogle}>
            Sign in with google
          </GoogleButton>
        </ButtonBox>
      )}
    </Container>
  );
};

export default HomePage;
