import styled from "styled-components";

import { AiOutlineMenu } from 'react-icons/ai';
import { ReactComponent } from '../../Assets/Images/Branding/logo-transparent.svg';
import { NavLink as navLink, Link as link } from 'react-router-dom';

export const Nav = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (min-width: 1024px) {
    padding: 0 calc((100% - 1024px) / 4);
  }
`;

export const Burger = styled(AiOutlineMenu)`
  display: none;
  color: #3E4455;
  transition: 0.25s;
  margin: 15px 1rem;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  &:hover {
    color: #FF023E;
  }
`;

export const WebsiteLogo = styled(ReactComponent)`
  display: block;
  height: 50px;
  width: 50px;
  fill: #3E4455;
  transition: 0.25s;
  margin: 15px 0;
`;

export const NavLink = styled(navLink)`
  color: #3E4455;
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.25s;

  &.active {
    color: #FF023E;
  }

  &:hover {
    color: #FF023E;
    ${WebsiteLogo} {
      fill: #FF023E;
    }
  }
`;

export const Link = styled(link)`
  color: #3E4455;
  text-decoration: none;
  margin: 0 1rem;
  display: flex;
  transition: 0.25s;

  &:hover {
    color: #FF023E;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
