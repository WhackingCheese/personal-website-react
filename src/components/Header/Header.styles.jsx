import styled from "styled-components";

import { AiOutlineMenu } from 'react-icons/ai';
import { ReactComponent } from '../../img/branding/logo-transparent.svg'
import { NavLink as navLink, Link as link } from 'react-router-dom';

export const Nav = styled.header`
  /*
  position: fixed;
  top: 0;
  width: calc(100% - 2 * ((100% - 1024px) / 4));
  background-color: ${props => props.theme.background};
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.14);
  */
  height: 80px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (min-width: 1024px) {
    padding: 0 calc((100% - 1024px) / 4);
  }
`;

export const Burger = styled(AiOutlineMenu)`
  display: none;
  color: ${props => props.theme.primary};
  transition: 0.25s;
  margin: 15px 1rem;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.accent};
  }
`;

export const WebsiteLogo = styled(ReactComponent)`
  display: block;
  height: 50px;
  width: 50px;
  fill: ${props => props.theme.primary};
  transition: 0.25s;
  margin: 15px 0;
`;

export const NavLink = styled(navLink)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.25s;

  &.active {
    color: ${props => props.theme.accent};
  }

  &:hover {
    color: ${props => props.theme.accent};
    ${WebsiteLogo} {
      fill: ${props => props.theme.accent};
    }
  }
`;

export const Link = styled(link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  margin: 0 1rem;

  transition: 0.25s;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
