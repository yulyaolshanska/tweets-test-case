import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

interface ThemeProps {
  theme: {
    media: {
      tablet: string;
      desktop: string;
    };
    colors: {
      accent: string;
    };
  };
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  background-color: rgb(187 157 255 / 62%);
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  @media ${(p: ThemeProps) => p.theme.media.tablet} {
    width: 768px;
  }
  @media screen and (min-width: 940px) {
    width: 100%;
  }
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
`;

export const StyledHomeLink = styled(NavLink)`
  padding: 10px;
  display: block;
  color: ${(p: ThemeProps) => p.theme.colors.accent};
  font-weight: 700;
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;

export const UserName = styled.p`
  margin-right: 15px;
  color: ${(p: ThemeProps) => p.theme.colors.accent};
  font-weight: 700;
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 10px;
  font-size: 14px;
  border: 2px solid rgb(102 72 200 / 80%);
  background-color: transparent;
  border-radius: 4px;
  color: ${(p: ThemeProps) => p.theme.colors.accent};
  font-weight: 700;
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;

export const LoginIcon = styled(FiLogIn)`
  margin-right: 10px;
`;

export const HomeIcon = styled(GrHomeRounded)`
  margin-right: 8px;
`;

export const LogoutIcon = styled(BiLogOut)`
  margin-right: 10px;
`;

export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border: 2px solid rgb(102 72 200 / 80%);
  background-color: transparent;
  border-radius: 4px;
  color: ${(p: ThemeProps) => p.theme.colors.accent};
  font-weight: 700;
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    font-size: 15px;
  }
`;
