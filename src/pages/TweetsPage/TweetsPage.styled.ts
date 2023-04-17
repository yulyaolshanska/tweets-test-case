import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

interface ThemeProps {
  theme: {
    media: {
      tablet: string;
      desktop: string;
    };
  };
}

export const Container = styled.div`
  padding: 0 30px 40px 30px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  @media ${(p: ThemeProps) => p.theme.media.tablet} {
    width: 768px;
  }
  @media screen and (min-width: 940px) {
    width: 940px;
  }
  @media ${(p: ThemeProps) => p.theme.media.desktop} {
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  margin: 20px 0 30px 30px;
  width: 130px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #000000;
`;

export const StyledGoBAckIcon = styled(IoArrowBackSharp)`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
`;
