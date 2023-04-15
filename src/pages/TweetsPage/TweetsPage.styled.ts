import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

export const Container = styled.div`
  padding: 40px;
`;

export const BackButton = styled.button`
  display: flex;
  margin-left: 30px;
  margin-bottom: 30px;
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
