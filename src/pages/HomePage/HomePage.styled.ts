import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BackgroundImg from "../../img/background.svg";

export const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100%-60px);
  height: 100vh;
  background: url(${BackgroundImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: center top, 0px 0px;
  background-size: contain;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 700;
  color: #ebd8ff;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
`;

export const HomeText = styled.p`
  font-size: 32px;
  margin-bottom: 20px;
  color: #ebd8ff;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
`;

export const TweetsLink = styled(NavLink)`
  padding: 20px;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
