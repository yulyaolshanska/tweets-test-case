import React from "react";
import {
  Box,
  Container,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  SignOutButton,
  StyledNavLink,
  StyledHomeLink,
  UserName,
} from "./Header.styled";
import { auth } from "../../firebase/firebase";
import { authSlice } from "redux/authSlice";
import { useAppDispatch, useAppSelector } from "hooks/hooks";

export const Header: React.FC = () => {
  const userName = useAppSelector(({ auth }) => auth.user.userName);
  const { logOut } = authSlice.actions;
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(logOut());
    auth.signOut();
  };
  return (
    <header>
      <Container>
        <StyledHomeLink to="/">
          <HomeIcon /> Home
        </StyledHomeLink>
        {userName ? (
          <Box>
            <UserName>{userName}</UserName>
            <SignOutButton onClick={onSignOut}>
              <LogoutIcon />
              Log out
            </SignOutButton>
          </Box>
        ) : (
          <>
            <StyledNavLink to="/">
              <LoginIcon /> Log In
            </StyledNavLink>
          </>
        )}
      </Container>
    </header>
  );
};
