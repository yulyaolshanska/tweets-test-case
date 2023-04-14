import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  padding: 100px 20px 100px;
  height: 100vh;
  background-size: cover;
  padding: 160px 32px 100px 32px;
`;

export const Text = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  font-size: 32px;
  flex-direction: column;
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
`;
export const HomeLink = styled(Link)`
  color: #ffffff;
  display: flex;
  font-size: 32px;
`;

export const HomeLinkBox = styled.div`
  background-color: #f59256;
  height: 70px;
  width: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  display: flex;
  border: 3px solid pink;
  border-radius: 10px;
`;

export const Error = styled.span`
  display: block;
  color: #f59256;
  font-size: 40px;
`;
